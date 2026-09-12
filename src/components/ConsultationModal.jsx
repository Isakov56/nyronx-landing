import { useEffect, useRef, useState } from 'react'
import { ArrowRight, Telegram } from './Icons.jsx'

/**
 * "Book a consultation" dialog.
 *
 * Replaces the old behaviour where every CTA scrolled to the footer, which
 * left the visitor on a link list with an email address and no next step.
 *
 * Delivery is deliberately doubled: the form POSTs to our own API (which
 * forwards to the sales Telegram) AND fires EmailJS, two independent
 * providers. A submission counts as delivered if EITHER lands, so one
 * outage never silently loses a lead. If both fail we say so and show the
 * direct channels instead of pretending it sent.
 */

const API_URL = import.meta.env.VITE_API_URL || 'https://api.nyronx.uz/api'
const EMAILJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID
const EMAILJS_TEMPLATE = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const EMAILJS_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

const TELEGRAM_URL = 'https://t.me/nyronx'
const CONTACT_EMAIL = 'contact@nyronx.com'

async function sendToApi(data) {
  const r = await fetch(`${API_URL}/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
  if (!r.ok) throw new Error(`api ${r.status}`)
  return r.json()
}

async function sendToEmailJs(data) {
  if (!EMAILJS_SERVICE || !EMAILJS_TEMPLATE || !EMAILJS_KEY) throw new Error('emailjs not configured')
  const r = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: EMAILJS_SERVICE,
      template_id: EMAILJS_TEMPLATE,
      user_id: EMAILJS_KEY,
      template_params: {
        from_name: data.name,
        from_email: data.email,
        phone: data.phone,
        business_name: data.company,
        message: data.message,
      },
    }),
  })
  if (!r.ok) throw new Error(`emailjs ${r.status}`)
  return true
}

export default function ConsultationModal({ open, onClose }) {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', message: '', website: '' })
  const [state, setState] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState(null)
  const firstFieldRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    const t = setTimeout(() => firstFieldRef.current?.focus(), 40)
    // Don't let the page scroll behind the dialog.
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      clearTimeout(t)
      document.body.style.overflow = prev
      }
  }, [open, onClose])

  // Reset a finished submission when the dialog is reopened.
  useEffect(() => {
    if (open && state === 'sent') {
      setState('idle')
      setForm({ name: '', company: '', phone: '', email: '', message: '', website: '' })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open])

  if (!open) return null

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const submit = async (e) => {
    e.preventDefault()
    if (state === 'sending') return
    if (!form.name.trim()) { setError('Please tell us your name.'); return }
    if (!form.phone.trim() && !form.email.trim()) { setError('Leave a phone number or an email so we can reply.'); return }
    setError(null)
    setState('sending')

    // Fire both channels; succeed if either one does.
    const results = await Promise.allSettled([sendToApi(form), sendToEmailJs(form)])
    const delivered = results.some((r) => r.status === 'fulfilled')
    if (delivered) {
      setState('sent')
    } else {
      setState('error')
      setError('We could not send that just now. Please reach us on Telegram or by email below.')
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-brand-ink/60 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Book a consultation"
    >
      <div
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 p-6 pb-4">
          <div>
            <p className="text-sm tracking-widest uppercase text-brand-primary font-medium mb-2">
              Book a consultation
            </p>
            <h3 className="text-2xl text-brand-forest leading-tight">
              Let's look at your <span className="italic">counter.</span>
            </h3>
            <p className="mt-2 text-sm text-brand-ink/70">
              Tell us a little about your pharmacy and we'll get back to you.
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 -mt-1 -mr-1 rounded-lg p-2 text-brand-ink/40 hover:bg-black/5 hover:text-brand-ink transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {state === 'sent' ? (
          <div className="px-6 pb-6">
            <div className="rounded-xl border border-brand-primary/30 bg-brand-primary/[0.06] p-5">
              <p className="text-brand-forest font-medium">Thank you — we have your request.</p>
              <p className="mt-1 text-sm text-brand-ink/70">
                We'll be in touch shortly. If it's urgent, message us on Telegram.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              <a href={TELEGRAM_URL} target="_blank" rel="noreferrer noopener" className="btn-primary">
                Telegram <ArrowRight />
              </a>
              <button type="button" onClick={onClose} className="px-4 py-2 rounded-full text-sm font-medium border border-black/10 text-brand-ink/70 hover:bg-black/5 transition-colors">
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} className="px-6 pb-6 space-y-3">
            {/* Honeypot — hidden from people, irresistible to bots. */}
            <input
              type="text"
              name="website"
              value={form.website}
              onChange={set('website')}
              tabIndex={-1}
              autoComplete="off"
              aria-hidden="true"
              className="hidden"
            />

            <div className="grid sm:grid-cols-2 gap-3">
              <Field label="Your name" required>
                <input ref={firstFieldRef} value={form.name} onChange={set('name')} className={inputCls} placeholder="Aziz" />
              </Field>
              <Field label="Pharmacy / company">
                <input value={form.company} onChange={set('company')} className={inputCls} placeholder="Optional" />
              </Field>
              <Field label="Phone">
                <input value={form.phone} onChange={set('phone')} className={inputCls} inputMode="tel" placeholder="+998 ..." />
              </Field>
              <Field label="Email">
                <input value={form.email} onChange={set('email')} className={inputCls} inputMode="email" placeholder="you@pharmacy.com" />
              </Field>
            </div>
            <Field label="What would you like to cover?">
              <textarea value={form.message} onChange={set('message')} rows={3} className={`${inputCls} resize-none`} placeholder="How many branches, what you use today…" />
            </Field>

            {error && <p className="text-xs text-red-600">{error}</p>}

            <div className="flex items-center justify-between gap-3 pt-1">
              <p className="text-[11px] text-brand-ink/45">
                Or <a href={TELEGRAM_URL} target="_blank" rel="noreferrer noopener" className="underline hover:text-brand-forest">Telegram</a>
                {' · '}
                <a href={`mailto:${CONTACT_EMAIL}`} className="underline hover:text-brand-forest">{CONTACT_EMAIL}</a>
              </p>
              <button
                type="submit"
                disabled={state === 'sending'}
                className="inline-flex items-center gap-2 rounded-full bg-brand-primary px-6 py-3 text-sm font-medium text-white hover:bg-brand-deep disabled:opacity-60 transition-colors"
              >
                {state === 'sending' ? 'Sending…' : 'Send request'}
                {state !== 'sending' && <ArrowRight />}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

const inputCls =
  'w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-brand-ink placeholder:text-brand-ink/35 focus:border-brand-primary focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-colors'

function Field({ label, required, children }) {
  return (
    <label className="block">
      <span className="mb-1 block text-[11px] uppercase tracking-wider text-brand-ink/50">
        {label}{required && <span className="text-brand-primary"> *</span>}
      </span>
      {children}
    </label>
  )
}
