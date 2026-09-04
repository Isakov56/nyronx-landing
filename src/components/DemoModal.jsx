import { useState, useEffect, useCallback, useRef, useId } from 'react'
import { createPortal } from 'react-dom'
import { useModal } from '../context/ModalContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { sendLeadToTelegram } from '../config/telegram.js'

// Umumiy input/select uchun class — takrorlanishning oldini oladi (DRY)
const fieldClass =
  'w-full px-4 py-3 rounded-2xl bg-white border text-slate-900 text-sm transition-all placeholder:text-slate-400 font-medium focus:outline-none focus:ring-4'

const fieldStateClass = (hasError) =>
  hasError
    ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
    : 'border-slate-200 focus:border-brand-primary focus:ring-brand-primary/10'

// Uzbek telefon raqamini +998 XX XXX XX XX formatida saqlash
function formatUzPhone(raw) {
  const digits = raw.replace(/\D/g, '').replace(/^998/, '')
  const d = digits.slice(0, 9)
  let out = '+998'
  if (d.length > 0) out += ' ' + d.slice(0, 2)
  if (d.length > 2) out += ' ' + d.slice(2, 5)
  if (d.length > 5) out += ' ' + d.slice(5, 7)
  if (d.length > 7) out += ' ' + d.slice(7, 9)
  return out
}

const isPhoneComplete = (phone) => phone.replace(/\D/g, '').length === 12 // 998 + 9 raqam

export default function DemoModal() {
  const { demoOpen, closeDemoModal } = useModal()
  const { language } = useLanguage()
  const isUz = language === 'uz'
  const isRu = language === 'ru'

  const [formData, setFormData] = useState({
    name: '',
    phone: '+998',
    pharmacyName: '',
    branchCount: '1',
  })
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const dialogRef = useRef(null)
  const firstFieldRef = useRef(null)
  const uid = useId() // input id'larini unikal qilish uchun

  // --- Esc bilan yopish ---
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        closeDemoModal()
        return
      }
      // --- Oddiy focus trap: Tab modal ichida aylanadi ---
      if (e.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll(
          'input, select, button, a[href]'
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    },
    [closeDemoModal]
  )

  useEffect(() => {
    if (demoOpen) {
      setSubmitted(false)
      setLoading(false)
      setSubmitError(false)
      setErrors({})
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
      // Modal ochilganda birinchi inputga fokus — foydalanuvchi darhol yoza boshlaydi
      const t = setTimeout(() => firstFieldRef.current?.focus(), 50)
      return () => {
        clearTimeout(t)
        document.body.style.overflow = 'unset'
        window.removeEventListener('keydown', handleKeyDown)
      }
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [demoOpen, handleKeyDown])

  if (!demoOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: null }))
  }

  const handlePhoneChange = (e) => {
    const formatted = formatUzPhone(e.target.value)
    setFormData((prev) => ({ ...prev, phone: formatted }))
    if (errors.phone) setErrors((prev) => ({ ...prev, phone: null }))
  }

  // --- Validatsiya: submitdan oldin barcha maydonlarni tekshiradi ---
  const validate = () => {
    const next = {}
    if (formData.name.trim().length < 3) {
      next.name = isUz ? 'Ism va familiya kiriting' : isRu ? 'Введите имя и фамилию' : 'Enter your full name'
    }
    if (!isPhoneComplete(formData.phone)) {
      next.phone = isUz ? 'Telefon raqamni to‘liq kiriting' : isRu ? 'Введите номер телефона полностью' : 'Enter complete phone number'
    }
    if (formData.pharmacyName.trim().length < 2) {
      next.pharmacyName = isUz ? 'Dorixona nomini kiriting' : isRu ? 'Введите название аптеки' : 'Enter pharmacy name'
    }
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitError(false)

    if (!validate()) return

    setLoading(true)
    try {
      const res = await sendLeadToTelegram({ ...formData, language })
      if (res && res.ok !== false) {
        setSubmitted(true)
      } else {
        setSubmitError(true)
      }
    } catch (error) {
      console.error('Xatolik yuz berdi:', error)
      setSubmitError(true)
    } finally {
      setLoading(false)
    }
  }

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${uid}-title`}
    >
      {/* Background Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={closeDemoModal}
      />

      {/* Modal Card Container */}
      <div
        ref={dialogRef}
        className="relative w-full max-w-[480px] bg-white rounded-[28px] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.18)] border border-slate-100 p-7 sm:p-9 z-10 transition-all duration-300 animate-in zoom-in-95 slide-in-from-bottom-4"
      >
        {/* Yopish tugmasi */}
        <button
          onClick={closeDemoModal}
          aria-label={isUz ? 'Yopish' : isRu ? 'Закрыть' : 'Close'}
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-all cursor-pointer"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <div>
            {/* Sarlavha qismi */}
            <h3
              id={`${uid}-title`}
              className="text-2xl sm:text-[28px] font-extrabold text-[#0F172A] tracking-tight leading-tight mb-2 pr-6"
            >
              {isUz ? "Nyronx tizimini sinab ko'ring" : isRu ? 'Попробуйте систему Nyronx' : 'Try Nyronx Platform'}
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              {isUz
                ? "Ma'lumotlaringizni qoldiring, 10 daqiqada sizga tizimga kirish huquqini taqdim etamiz."
                : isRu
                ? 'Оставьте заявку, наш специалист подключит тестовый доступ за 10 минут.'
                : 'Fill in your details and our specialist will set up demo access in 10 minutes.'}
            </p>

            {/* Umumiy xatolik banneri — server/tarmoq xatosi bo'lsa ko'rinadi */}
            {submitError && (
              <div className="mb-4 px-4 py-3 rounded-2xl bg-red-50 border border-red-100 text-red-600 text-sm font-medium">
                {isUz
                  ? "Xatolik yuz berdi. Iltimos, qayta urinib ko'ring yoki Telegram orqali bog'laning."
                  : isRu
                  ? 'Произошла ошибка. Попробуйте снова или свяжитесь через Telegram.'
                  : 'An error occurred. Please try again or contact us via Telegram.'}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              {/* Ism va familiya */}
              <div>
                <label
                  htmlFor={`${uid}-name`}
                  className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5"
                >
                  {isUz ? 'ISM VA FAMILIYANGIZ' : isRu ? 'ВАШЕ ИМЯ И ФАМИЛИЯ' : 'YOUR FULL NAME'}
                </label>
                <input
                  ref={firstFieldRef}
                  id={`${uid}-name`}
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={isUz ? 'Alisher Qodirov' : isRu ? 'Алишер Кадыров' : 'John Smith'}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? `${uid}-name-error` : undefined}
                  className={`${fieldClass} ${fieldStateClass(errors.name)}`}
                />
                {errors.name && (
                  <p id={`${uid}-name-error`} className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Telefon raqam */}
              <div>
                <label
                  htmlFor={`${uid}-phone`}
                  className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5"
                >
                  {isUz ? 'TELEFON RAQAMINGIZ' : isRu ? 'НОМЕР ТЕЛЕФОНА' : 'PHONE NUMBER'}
                </label>
                <input
                  id={`${uid}-phone`}
                  type="tel"
                  name="phone"
                  inputMode="numeric"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="+998 90 123 45 67"
                  aria-invalid={!!errors.phone}
                  aria-describedby={errors.phone ? `${uid}-phone-error` : undefined}
                  className={`${fieldClass} font-bold ${fieldStateClass(errors.phone)}`}
                />
                {errors.phone && (
                  <p id={`${uid}-phone-error`} className="mt-1.5 text-xs font-medium text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Dorixona nomi & Filiallar soni */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor={`${uid}-pharmacy`}
                    className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5"
                  >
                    {isUz ? 'DORIXONA NOMI' : isRu ? 'НАЗВАНИЕ АПТЕКИ' : 'PHARMACY NAME'}
                  </label>
                  <input
                    id={`${uid}-pharmacy`}
                    type="text"
                    name="pharmacyName"
                    autoComplete="organization"
                    value={formData.pharmacyName}
                    onChange={handleChange}
                    placeholder="Shifo Pharma"
                    aria-invalid={!!errors.pharmacyName}
                    aria-describedby={errors.pharmacyName ? `${uid}-pharmacy-error` : undefined}
                    className={`${fieldClass} ${fieldStateClass(errors.pharmacyName)}`}
                  />
                  {errors.pharmacyName && (
                    <p id={`${uid}-pharmacy-error`} className="mt-1.5 text-xs font-medium text-red-500">
                      {errors.pharmacyName}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor={`${uid}-branches`}
                    className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5"
                  >
                    {isUz ? 'FILIALLAR SONI' : isRu ? 'КОЛИЧЕСТВО ФИЛИАЛОВ' : 'BRANCH COUNT'}
                  </label>
                  <div className="relative">
                    <select
                      id={`${uid}-branches`}
                      name="branchCount"
                      value={formData.branchCount}
                      onChange={handleChange}
                      className={`${fieldClass} ${fieldStateClass(false)} font-semibold cursor-pointer appearance-none pr-8`}
                    >
                      <option value="1">{isUz ? '1 ta dorixona' : isRu ? '1 аптека' : '1 store'}</option>
                      <option value="2-5">{isUz ? '2 — 5 ta filial' : isRu ? '2 — 5 филиалов' : '2 — 5 branches'}</option>
                      <option value="5-10">{isUz ? '5 — 10 ta filial' : isRu ? '5 — 10 филиалов' : '5 — 10 branches'}</option>
                      <option value="10+">{isUz ? '10+ ta tarmoq' : isRu ? '10+ филиалов' : '10+ chain stores'}</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yuborish tugmasi */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-3 py-3.5 px-6 rounded-full bg-brand-primary hover:bg-brand-deep active:scale-[0.98] text-white font-bold text-base shadow-lg shadow-brand-primary/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{isUz ? 'Bepul sinovni boshlash' : isRu ? 'Начать бесплатный тест' : 'Start Free Trial'}</span>
                    <svg className="w-4 h-4 fill-none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>
        ) : (
          /* Muvaffaqiyatli yakunlash ekrani */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mx-auto mb-4 animate-in zoom-in-50 duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>

            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              {isUz ? 'Ariza qabul qilindi!' : isRu ? 'Заявка принята!' : 'Request Submitted!'}
            </h3>

            <p className="text-sm text-slate-600 max-w-xs mx-auto mb-6 leading-relaxed">
              {isUz
                ? `Tez orada mutaxassisimiz ${formData.phone} raqamingizga bog'lanadi.`
                : isRu
                ? `Наш специалист свяжется с вами по номеру ${formData.phone}.`
                : `Our manager will contact you shortly at ${formData.phone}.`}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">

              <a href="https://t.me/nyronx"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0088cc] hover:bg-[#0077b5] text-white font-semibold text-sm transition-all shadow-md"
              >
                <span>{isUz ? "Telegram orqali bog'lanish" : isRu ? 'Связаться в Telegram' : 'Contact via Telegram'}</span>
              </a>
              <button
                onClick={closeDemoModal}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all cursor-pointer"
              >
                {isUz ? 'Yopish' : isRu ? 'Закрыть' : 'Close'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}