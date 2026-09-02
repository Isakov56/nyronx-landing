import { useState, useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useModal } from '../context/ModalContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { sendLeadToTelegram } from '../config/telegram.js'

export default function DemoModal() {
  const { demoOpen, closeDemoModal } = useModal()
  const { language } = useLanguage()

  const [formData, setFormData] = useState({
    name: '',
    phone: '+998 ',
    pharmacyName: '',
    branchCount: '1',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  // Esc tugmasi orqali yopish
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') closeDemoModal()
    },
    [closeDemoModal]
  )

  useEffect(() => {
    if (demoOpen) {
      setSubmitted(false)
      setLoading(false)
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [demoOpen, handleKeyDown])

  if (!demoOpen) return null

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handlePhoneChange = (e) => {
    let val = e.target.value
    if (!val.startsWith('+998')) {
      val = '+998 '
    }
    setFormData((prev) => ({ ...prev, phone: val }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      await sendLeadToTelegram({
        ...formData,
        language,
      })
      setSubmitted(true)
    } catch (error) {
      console.error('Xatolik yuz berdi:', error)
    } finally {
      setLoading(false)
    }
  }

  const isUz = language === 'uz'

  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Background Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/50 backdrop-blur-md transition-opacity duration-300 animate-in fade-in"
        onClick={closeDemoModal}
      />

      {/* Modal Card Container */}
      <div className="relative w-full max-w-[480px] bg-white rounded-[28px] shadow-[0_24px_50px_-12px_rgba(0,0,0,0.18)] border border-slate-100 p-7 sm:p-9 z-10 transition-all duration-300 animate-in zoom-in-95 slide-in-from-bottom-4">
        
        {/* Yopish tugmasi */}
        <button
          onClick={closeDemoModal}
          aria-label="Yopish"
          className="absolute top-6 right-6 w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 active:scale-95 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-all cursor-pointer"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <div>
            {/* Sarlavha qismi */}
            <h3 className="text-2xl sm:text-[28px] font-extrabold text-[#0F172A] tracking-tight leading-tight mb-2 pr-6">
              {isUz ? "Nyronx tizimini sinab ko'ring" : 'Попробуйте систему Nyronx'}
            </h3>

            <p className="text-sm text-slate-500 leading-relaxed mb-6">
              {isUz
                ? "Ma'lumotlaringizni qoldiring, 10 daqiqada sizga tizimga kirish huquqini taqdim etamiz."
                : 'Оставьте заявку, наш специалист подключит тестовый доступ за 10 минут.'}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Ism va familiya */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                  {isUz ? 'ISM VA FAMILIYANGIZ' : 'ВАШЕ ИМЯ И ФАМИЛИЯ'}
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={isUz ? 'Alisher Qodirov' : 'Алишер Кадыров'}
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#15A869] focus:ring-4 focus:ring-[#15A869]/10 transition-all placeholder:text-slate-400 font-medium"
                />
              </div>

              {/* Telefon raqam */}
              <div>
                <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                  {isUz ? 'TELEFON RAQAMINGIZ' : 'НОМЕР ТЕЛЕФОНА'}
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  placeholder="+998"
                  className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 font-bold text-sm focus:outline-none focus:border-[#15A869] focus:ring-4 focus:ring-[#15A869]/10 transition-all"
                />
              </div>

              {/* Dorixona nomi & Filiallar soni */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    {isUz ? 'DORIXONA NOMI' : 'НАЗВАНИЕ АПТЕКИ'}
                  </label>
                  <input
                    type="text"
                    name="pharmacyName"
                    required
                    value={formData.pharmacyName}
                    onChange={handleChange}
                    placeholder="Shifo Pharma"
                    className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm focus:outline-none focus:border-[#15A869] focus:ring-4 focus:ring-[#15A869]/10 transition-all placeholder:text-slate-400 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 uppercase tracking-wider mb-1.5">
                    {isUz ? 'FILIALLAR SONI' : 'КОЛИЧЕСТВО ФИЛИАЛОВ'}
                  </label>
                  <div className="relative">
                    <select
                      name="branchCount"
                      value={formData.branchCount}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-2xl bg-white border border-slate-200 text-slate-900 text-sm font-semibold focus:outline-none focus:border-[#15A869] focus:ring-4 focus:ring-[#15A869]/10 transition-all cursor-pointer appearance-none pr-8"
                    >
                      <option value="1">1 ta dorixona</option>
                      <option value="2-5">2 — 5 ta filial</option>
                      <option value="5-10">5 — 10 ta filial</option>
                      <option value="10+">10+ ta tarmoq</option>
                    </select>
                    <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Yuborish Tugmasi (Kapsula shakli va Brend yashil rangi) */}
              <button
                type="submit"
                disabled={loading}
                className="w-full mt-3 py-3.5 px-6 rounded-full bg-[#15A869] hover:bg-[#12945d] active:scale-[0.98] text-white font-bold text-base shadow-lg shadow-[#15A869]/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 cursor-pointer"
              >
                {loading ? (
                  <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : (
                  <>
                    <span>{isUz ? 'Bepul sinovni boshlash' : 'Начать бесплатный тест'}</span>
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
            <div className="w-16 h-16 rounded-full bg-[#15A869]/10 text-[#15A869] flex items-center justify-center mx-auto mb-4 animate-in zoom-in-50 duration-300">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">
              {isUz ? 'Ariza qabul qilindi!' : 'Заявка принята!'}
            </h3>
            
            <p className="text-sm text-slate-600 max-w-xs mx-auto mb-6 leading-relaxed">
              {isUz
                ? `Tez orada mutaxassisimiz ${formData.phone} raqamingizga bog'lanadi.`
                : `Наш специалист свяжется с вами по номеру ${formData.phone}.`}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://t.me/nyronx"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#0088cc] hover:bg-[#0077b5] text-white font-semibold text-sm transition-all shadow-md"
              >
                <span>Telegram orqali bog'lanish</span>
              </a>
              <button
                onClick={closeDemoModal}
                className="w-full sm:w-auto px-6 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm transition-all cursor-pointer"
              >
                {isUz ? 'Yopish' : 'Закрыть'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>,
    document.body
  )
}