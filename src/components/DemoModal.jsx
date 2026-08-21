import { useState, useEffect } from 'react'
import { useModal } from '../context/ModalContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'
import { sendLeadToTelegram } from '../config/telegram.js'

export default function DemoModal() {
  const { demoOpen, closeDemoModal, initialType } = useModal()
  const { language } = useLanguage()

  const [name, setName] = useState('')
  const [phone, setPhone] = useState('+998 ')
  const [pharmacyName, setPharmacyName] = useState('')
  const [branchCount, setBranchCount] = useState('1')
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (demoOpen) {
      setSubmitted(false)
      setLoading(false)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [demoOpen])

  if (!demoOpen) return null

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // Telegram kanal yoki guruhga yuborish
    await sendLeadToTelegram({
      name,
      phone,
      pharmacyName,
      branchCount,
      language,
    })

    setLoading(false)
    setSubmitted(true)
  }

  const handlePhoneChange = (e) => {
    let val = e.target.value
    if (!val.startsWith('+998')) {
      val = '+998 '
    }
    setPhone(val)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={closeDemoModal}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-[32px] sm:rounded-[40px] shadow-2xl border border-black/10 p-6 sm:p-10 z-10 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={closeDemoModal}
          aria-label="Yopish"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-all cursor-pointer"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <div>
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
              <span>
                {language === 'uz' ? '7 kunlik bepul sinov' : '7 дней бесплатного теста'}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-[#1A1D1F] tracking-tight leading-tight mb-2">
              {language === 'uz'
                ? 'Nyronx tizimini sinab ko\'ring'
                : 'Попробуйте систему Nyronx'}
            </h3>

            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6">
              {language === 'uz'
                ? 'Ma\'lumotlaringizni qoldiring, mutaxassisimiz 10 daqiqada sizga tizimga kirish huquqini ulab beradi.'
                : 'Оставьте заявку, наш специалист подключит тестовый доступ за 10 минут.'}
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {/* Ism */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  {language === 'uz' ? 'Ism va familiyangiz' : 'Ваше имя и фамилия'}
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={language === 'uz' ? 'Masalan: Alisher Qodirov' : 'Например: Алишер Кадыров'}
                  className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-black/10 focus:border-brand-primary focus:bg-white focus:outline-none text-sm font-medium transition-all"
                />
              </div>

              {/* Telefon */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  {language === 'uz' ? 'Telefon raqamingiz' : 'Номер телефона'}
                </label>
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={handlePhoneChange}
                  placeholder="+998 90 123 45 67"
                  className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-black/10 focus:border-brand-primary focus:bg-white focus:outline-none text-sm font-bold text-[#1A1D1F] transition-all"
                />
              </div>

              {/* Dorixona nomi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    {language === 'uz' ? 'Dorixona nomi' : 'Название аптеки'}
                  </label>
                  <input
                    type="text"
                    required
                    value={pharmacyName}
                    onChange={(e) => setPharmacyName(e.target.value)}
                    placeholder={language === 'uz' ? 'Masalan: Shifo Pharma' : 'Например: Shifo Pharma'}
                    className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-black/10 focus:border-brand-primary focus:bg-white focus:outline-none text-sm font-medium transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    {language === 'uz' ? 'Filiallar soni' : 'Количество филиалов'}
                  </label>
                  <select
                    value={branchCount}
                    onChange={(e) => setBranchCount(e.target.value)}
                    className="w-full px-4 py-3.5 rounded-2xl bg-gray-50 border border-black/10 focus:border-brand-primary focus:bg-white focus:outline-none text-sm font-bold text-gray-800 transition-all cursor-pointer"
                  >
                    <option value="1">1 {language === 'uz' ? 'ta dorixona' : 'аптека'}</option>
                    <option value="2-5">2 — 5 {language === 'uz' ? 'ta filial' : 'филиалов'}</option>
                    <option value="5-10">5 — 10 {language === 'uz' ? 'ta filial' : 'филиалов'}</option>
                    <option value="10+">10+ {language === 'uz' ? 'ta tarmoq' : 'сеть аптек'}</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-3 w-full py-4 rounded-2xl bg-brand-primary hover:bg-brand-deep text-white font-black text-base shadow-xl shadow-brand-primary/25 transition-all hover:scale-[1.01] active:scale-98 cursor-pointer flex items-center justify-center gap-2"
              >
                {loading ? (
                  <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <span>
                      {language === 'uz'
                        ? '7 kunlik bepul sinovni boshlash'
                        : 'Начать 7 дней бесплатного теста'}
                    </span>
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M5 3l14 9-14 9V3z" />
                    </svg>
                  </>
                )}
              </button>
            </form>

            <p className="text-[11px] text-center text-gray-400 mt-4">
              🔒 {language === 'uz' ? 'Kredit karta talab qilinmaydi. To\'liq bepul.' : 'Кредитная карта не требуется. Полностью бесплатно.'}
            </p>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center mx-auto mb-4 text-3xl">
              ✓
            </div>
            <h3 className="text-2xl font-black text-[#1A1D1F] mb-2">
              {language === 'uz' ? 'Rahmat! Aringiz qabul qilindi' : 'Спасибо! Заявка принята'}
            </h3>
            <p className="text-sm text-gray-600 max-w-sm mx-auto mb-6 leading-relaxed">
              {language === 'uz'
                ? `Tez orada mutaxassisimiz ${phone} raqamiga bog'lanib, sizga Nyronx demo tizimini o'rnatib beradi.`
                : `Наш специалист свяжется с вами по номеру ${phone} и настроит демо-доступ к системе.`}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://t.me/nyronx"
                target="_blank"
                rel="noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#0088cc] text-white font-bold text-sm shadow-md"
              >
                <span>Telegram orqali bog'lanish</span>
              </a>
              <button
                onClick={closeDemoModal}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-gray-100 text-gray-700 font-bold text-sm hover:bg-gray-200 transition-colors"
              >
                {language === 'uz' ? 'Yopish' : 'Закрыть'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
