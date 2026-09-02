import { useState, useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useModal } from '../context/ModalContext.jsx'

// High quality Flaticon-style SVG Icons
const FlaticonIcons = {
  gift: () => (
    <svg className="w-10 h-10 mx-auto" viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="giftBox" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#047857" />
        </linearGradient>
        <linearGradient id="giftRibbon" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>
      </defs>
      {/* Box */}
      <rect x="10" y="24" width="44" height="34" rx="6" fill="url(#giftBox)" />
      {/* Box Lid */}
      <rect x="7" y="16" width="50" height="12" rx="4" fill="#059669" />
      {/* Vertical Ribbon */}
      <rect x="28" y="16" width="8" height="42" fill="url(#giftRibbon)" />
      {/* Horizontal Ribbon */}
      <rect x="10" y="36" width="44" height="6" fill="url(#giftRibbon)" />
      {/* Bow Loop Left */}
      <path d="M32 16 C25 6, 12 8, 20 16 Z" fill="url(#giftRibbon)" />
      {/* Bow Loop Right */}
      <path d="M32 16 C39 6, 52 8, 44 16 Z" fill="url(#giftRibbon)" />
      {/* Center Knot */}
      <circle cx="32" cy="16" r="4" fill="#B45309" />
    </svg>
  ),
  lightning: () => (
    <svg className="w-10 h-10 mx-auto" viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="boltGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>
        <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#F59E0B" floodOpacity="0.3" />
        </filter>
      </defs>
      {/* Circular Badge Backing */}
      <circle cx="32" cy="32" r="26" fill="#FEF3C7" />
      {/* Lightning Bolt */}
      <path
        d="M34 10 L18 34 H32 L28 54 L46 28 H32 L38 10 Z"
        fill="url(#boltGrad)"
        filter="url(#glow)"
      />
    </svg>
  ),
  sync: () => (
    <svg className="w-10 h-10 mx-auto" viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="syncGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#1D4ED8" />
        </linearGradient>
      </defs>
      {/* Circular Badge Backing */}
      <circle cx="32" cy="32" r="26" fill="#EFF6FF" />
      {/* Sync Arrow 1 */}
      <path
        d="M32 18 A14 14 0 0 1 46 32 H41 L48 40 L55 32 H50 A18 18 0 0 0 32 14 Z"
        fill="url(#syncGrad)"
      />
      {/* Sync Arrow 2 */}
      <path
        d="M32 46 A14 14 0 0 1 18 32 H23 L16 24 L9 32 H14 A18 18 0 0 0 32 50 Z"
        fill="url(#syncGrad)"
      />
      {/* Database/File Center Dot */}
      <circle cx="32" cy="32" r="4" fill="#2563EB" />
    </svg>
  ),
  shield: () => (
    <svg className="w-10 h-10 mx-auto" viewBox="0 0 64 64" fill="none">
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10B981" />
          <stop offset="100%" stopColor="#0F766E" />
        </linearGradient>
      </defs>
      {/* Shield Body */}
      <path
        d="M32 8 L48 14 V28 C48 41 41 50 32 56 C23 50 16 41 16 28 V14 Z"
        fill="url(#shieldGrad)"
      />
      {/* Shield Inner Border */}
      <path
        d="M32 12 L44 17 V28 C44 38 38 46 32 51 C26 46 20 38 20 28 V17 Z"
        fill="#047857"
      />
      {/* Checkmark */}
      <path
        d="M26 31 L30 35 L38 25"
        stroke="#FFFFFF"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
}

export default function PricesPage({ onNavigateHome }) {
  const { language } = useLanguage()
  const { openDemoModal } = useModal()

  const [isAnnual, setIsAnnual] = useState(true)
  const [currency, setCurrency] = useState('UZS')
  const [openCategories, setOpenCategories] = useState({
    warehouse: true,
    staff: true,
    finance: true,
    marketing: true,
    integration: true,
  })
  const [openFaq, setOpenFaq] = useState(null)

  // 1 USD ≈ 12,700 UZS (approximate)
  const USD_RATE = 12700

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const toggleCategory = (cat) => {
    setOpenCategories((prev) => ({ ...prev, [cat]: !prev[cat] }))
  }

  const formatPrice = (price) => {
    if (currency === 'USD') {
      const usd = (price / USD_RATE).toFixed(0)
      return '$' + new Intl.NumberFormat('en-US').format(usd)
    }
    return new Intl.NumberFormat('uz-UZ').format(price) + ' ' + (language === 'uz' ? "so'm" : 'сум')
  }

  // 3 Core Plans
  const plans = [
    {
      id: 'start',
      name: 'Start',
      monthly: 299000,
      annual: 239000,
      isPopular: false,
      tag: language === 'uz' ? 'Kichik dorixonalar uchun' : 'Для небольших аптек',
    },
    {
      id: 'advanced',
      name: 'Advanced',
      monthly: 499000,
      annual: 399000,
      isPopular: true,
      tag: language === 'uz' ? 'O\'rta va rivojlanayotgan dorixonalar' : 'Для растущих аптек',
    },
    {
      id: 'pro',
      name: 'Pro',
      monthly: 999000,
      annual: 799000,
      isPopular: false,
      tag: language === 'uz' ? 'Tarmoqlar va yirik klinikalar' : 'Для сетей аптек и клиник',
    },
  ]

  // Comparison Categories & Matrix
  const categories = [
    {
      id: 'warehouse',
      title: language === 'uz' ? 'Omborxona hisobi' : 'Складской учет',
      items: [
        {
          name: language === 'uz'
            ? 'Tovarlarni rangi, o\'lchami va boshqa belgilari (doza, seriya) bo\'yicha turkumlash va hisobga olish'
            : 'Категоризация и учет товаров по дозировкам, сериям и признакам',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Tovarlarni o\'lchov birliklari (dona, metr, kilogramm, flakon) bo\'yicha hisobga olish'
            : 'Учет товаров по единицам измерения (штука, флакон, упаковка, кг)',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Komplektlar va retsept bo\'yicha tayyorlanadigan dori vositalarini hisobga olish'
            : 'Учет комплектов и рецептурных наборов лекарств',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Mahsulotlarga fotosuratlar qo\'shish va dori yo\'riqnomasini ko\'rish'
            : 'Добавление фотографий к товарам и просмотр инструкций',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Tovarlar harakati tarixini kuzatish (kirim, chiqim, spetsifikatsiya)'
            : 'Отслеживание истории движения товаров (приход, расход, списание)',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Tovarlarga opsional xususiyatlarni qo\'shish (Retseptli / Retseptsiz)'
            : 'Дополнительные свойства товаров (рецептурный / безрецептурный)',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Mahsulot narxlarini o\'zgartirish va marja nazorati'
            : 'Изменение цен на товары и контроль наценки',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Tovarlar narxlarini ro\'yxat bo\'yicha ommaviy o\'zgartirish'
            : 'Массовое изменение цен по списку или накладной',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Tovarlarni to\'liq va qisman inventarizatsiya qilish (mobil skaner orqali)'
            : 'Полная и выборочная инвентаризация (со смартфона или сканера)',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Asl Belgisi (DataMatrix) markirovkalash va agregatsiya'
            : 'Маркировка Asl Belgisi (DataMatrix) и агрегация',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Dorilarning yaroqlilik muddati (Srok) tugashini avtomatik ogohlantirish'
            : 'Автоматическое оповещение об истечении срока годности',
          start: false,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Avtomatlashtirilgan dori xaridi va tugash ehtimoli prognozi (AI)'
            : 'Автоматический дозаказ лекарств и AI прогноз спроса',
          start: false,
          advanced: false,
          pro: true,
        },
      ],
    },
    {
      id: 'staff',
      title: language === 'uz' ? 'Xodimlar va rollarni boshqarish' : 'Управление сотрудниками и ролями',
      items: [
        {
          name: language === 'uz'
            ? 'Xodimlar uchun rollar (Kassir, Farmatsevt, Bosh hisobchi, Menejer)'
            : 'Роли для сотрудников (Кассир, Фармацевт, Бухгалтер, Администратор)',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Har bir xodim uchun cheklangan huquqlar va xavfsizlik'
            : 'Индивидуальные права доступа и безопасность данных',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Kassirlar KPI si va sotuvdan foiz (bonus) hisoblash'
            : 'Расчет KPI кассиров и процента от продаж (мотивация)',
          start: false,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Cheksiz miqdorda xodimlar va kassirlar qo\'shish'
            : 'Неограниченное количество сотрудников и рабочих мест',
          start: false,
          advanced: true,
          pro: true,
        },
      ],
    },
    {
      id: 'finance',
      title: language === 'uz' ? 'Moliyani boshqarish' : 'Управление финансами',
      items: [
        {
          name: language === 'uz'
            ? 'Kassa smenalarini ochish, yopish va avtomatik Z-hisobot'
            : 'Открытие/закрытие кассовых смен и авто-формирование Z-отчетов',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Naqd, Plastik karta, Humo, Uzcard, QR va Click/Payme to\'lovlari'
            : 'Прием оплаты наличными, Humo, Uzcard, QR, Click и Payme',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Yetkazib beruvchilar (distribyutorlar) bilan hisob-kitob va qarz daftari'
            : 'Взаиморасчеты с поставщиками и контроль задолженностей',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Foyda va zarar (P&L) moliyaviy hisoboti'
            : 'Отчет о прибылях и убытках (P&L)',
          start: false,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Pul oqimi (Cash Flow) va filiallar rentabelligi chuqur tahlili'
            : 'Движение денежных средств (Cash Flow) и рентабельность филиалов',
          start: false,
          advanced: false,
          pro: true,
        },
      ],
    },
    {
      id: 'marketing',
      title: language === 'uz' ? 'Marketing vositalari va mijozlar sodiqligi' : 'Маркетинг и лояльность клиентов',
      items: [
        {
          name: language === 'uz'
            ? 'Mijozlar va bemorlar elektron bazasi'
            : 'Электронная база клиентов и пациентов',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Chegirma kartalari va jamg\'arib boriladigan keshbek'
            : 'Дисконтные карты и накопительный кешбэк',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Do\'kondagi xaridlar va servis haqida fikr-mulohazalar uchun Telegram bot'
            : 'Telegram-бот для отзывов о покупках и качестве сервиса',
          start: false,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Reklama xabarlarini yuborish uchun Telegram bot (aksiyalar, maxsus takliflar)'
            : 'Рассылка промо-акций и персональных предложений в Telegram',
          start: false,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Elektron retseptlar va shifokorlar bilan integratsiya'
            : 'Интеграция с электронными рецептами и врачами',
          start: false,
          advanced: false,
          pro: true,
        },
      ],
    },
    {
      id: 'integration',
      title: language === 'uz' ? 'Integratsiya va texnik xizmat' : 'Интеграции и техподдержка',
      items: [
        {
          name: language === 'uz'
            ? '100% Bepul o\'rnatish, ma\'lumotlarni ko\'chirish va xodimlarni o\'rgatish'
            : 'Бесплатная установка, перенос данных и обучение персонала',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Har qanday shtrix-kod skaneri, chek printeri va kassa apparatlari bilan ishlash'
            : 'Поддержка любых сканеров, фискальных принтеров и весов',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Ochiq REST API orqali tashqi dasturlar (1C, ERP, Sayt) bilan integratsiya'
            : 'Открытый REST API для интеграции с 1C, сайтом и ERP',
          start: false,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? '24/7 Shaxsiy menejer va prioritetli texnik qo\'llab-quvvatlash'
            : 'Персональный менеджер и приоритетная техподдержка 24/7',
          start: false,
          advanced: false,
          pro: true,
        },
      ],
    },
  ]

  const faqs = language === 'uz'
    ? [
        {
          q: 'Dasturni o\'rnatish va o\'rgatish uchun alohida to\'lov bormi?',
          a: 'Yo\'q, dasturni o\'rnatish, sozlash va xodimlaringizni to\'liq o\'rgatish 100% bepul amalga oshiriladi.',
        },
        {
          q: '7 kunlik bepul sinov davri qanday ishlaydi?',
          a: 'Ro\'yxatdan o\'tganingizdan so\'ng 7 kun davomida tizimning barcha imkoniyatlaridan hech qanday cheklovlarsiz va bepul foydalanasiz. Kredit karta kiritish talab qilinmaydi.',
        },
        {
          q: 'Boshqa dasturdan dori qoldiqlarini ko\'chirib berishadimi?',
          a: 'Ha, mutaxassislarimiz mavjud bazangizdagi barcha dorilar, qoldiqlar, partiyalar va narxlarni Excel orqali bir necha daqiqada Nyronx ga xatosiz o\'tkazib beradi.',
        },
        {
          q: 'Internet o\'chib qolsa tizim ishlaydimi?',
          a: 'Ha, Nyronx oflayn rejimda ishlash imkoniyatiga ega. Internet uzilganda ham kassangiz savdoni to\'xtatmaydi va internet paydo bo\'lgach ma\'lumotlar avtomatik sinxronlanadi.',
        },
      ]
    : [
        {
          q: 'Есть ли отдельная плата за установку и обучение?',
          a: 'Нет, установка программы, настройка оборудования и полное обучение сотрудников проводятся абсолютно бесплатно.',
        },
        {
          q: 'Как работает 7-дневный бесплатный период?',
          a: 'После регистрации вы получаете полный доступ ко всем функциям системы на 7 дней без ограничений. Привязка карты не требуется.',
        },
        {
          q: 'Поможете ли вы перенести остатки лекарств из другой программы?',
          a: 'Да, наши специалисты бесплатно перенесут всю базу наименований, остатков, сроков и цен из Excel или другой системы.',
        },
        {
          q: 'Будет ли программа работать при отключении интернета?',
          a: 'Да, Nyronx поддерживает автономный офлайн-режим. Касса продолжает продавать лекарства без прерываний.',
        },
      ]

  return (
    <div className="bg-[#F4F7F2] min-h-screen pt-28 pb-20 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Back Button */}
        <div className="mb-12">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-500 hover:text-brand-primary transition-colors cursor-pointer"
          >
            <span>←</span>
            <span>{language === 'uz' ? 'Bosh sahifaga qaytish' : 'Вернуться на главную'}</span>
          </button>
        </div>

        {/* ── EDITORIAL HEADER + CARDS ────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center mb-20">

          {/* LEFT COLUMN ─ label / heading / description / billing toggle / all-plans list */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-primary mb-5">
              {language === 'uz' ? 'Tariflar va narxlar' : 'Тарифы и цены'}
            </p>

            <h1 className="text-[38px] sm:text-[46px] font-black text-brand-forest leading-[1.1] tracking-tight mb-5">
              {language === 'uz' ? (
                <>Bitta platforma, <span className="italic font-light" style={{ fontFamily: '"Fraunces", serif' }}>ikki yo'l</span> boshlash uchun.</>
              ) : (
                <>Одна платформа, <span className="italic font-light" style={{ fontFamily: '"Fraunces", serif' }}>два способа</span> начать.</>
              )}
            </h1>

            {/* Currency Toggle: UZS / USD */}
            <div className="inline-flex mb-8">
              <div className="p-1 rounded-full bg-[#EAEDE8] flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setCurrency('UZS')}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                    currency === 'UZS'
                      ? 'bg-white text-brand-forest shadow-sm'
                      : 'text-gray-500 hover:text-brand-forest'
                  }`}
                >
                  UZS
                </button>
                <button
                  type="button"
                  onClick={() => setCurrency('USD')}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                    currency === 'USD'
                      ? 'bg-white text-brand-forest shadow-sm'
                      : 'text-gray-500 hover:text-brand-forest'
                  }`}
                >
                  USD
                </button>
              </div>
            </div>

            {/* Billing Switcher */}
            <div className="inline-flex mb-10">
              <div className="p-1 rounded-full bg-[#EAEDE8] flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setIsAnnual(false)}
                  className={`px-6 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                    !isAnnual
                      ? 'bg-white text-brand-forest shadow-sm'
                      : 'text-gray-500 hover:text-brand-forest'
                  }`}
                >
                  {language === 'uz' ? 'Oylik' : 'Месячно'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsAnnual(true)}
                  className={`flex items-center gap-2 pl-5 pr-3 py-2 rounded-full text-sm font-bold transition-all cursor-pointer ${
                    isAnnual
                      ? 'bg-white text-brand-forest shadow-sm'
                      : 'text-gray-500 hover:text-brand-forest'
                  }`}
                >
                  {language === 'uz' ? 'Yillik' : 'Годовой'}
                  <span className="text-[9px] font-black bg-brand-accent text-brand-forest px-2 py-0.5 rounded-full tracking-wide whitespace-nowrap">
                    {language === 'uz' ? '20% tejash' : 'Скидка 20%'}
                  </span>
                </button>
              </div>
            </div>

            {/* All plans include */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
                {language === 'uz' ? "Barcha tariflarda bor" : 'Во всех тарифах'}
              </p>
              <ul className="space-y-3">
                {(language === 'uz'
                  ? ["O'rnatish to'lovi yo'q", "Istalgan vaqt bekor qilish", "Zudlik bilan faollashtirish", "Xavfsiz saqlash + kunlik zaxira"]
                  : ['Без платы за установку', 'Отмена в любое время', 'Мгновенная активация', 'Безопасное хранение + резерв']
                ).map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-600">
                    <span className="w-4 h-4 rounded-full bg-brand-primary flex items-center justify-center shrink-0">
                      <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* RIGHT COLUMN ─ 3 pricing cards stacked */}
          <div className="lg:col-span-8 grid sm:grid-cols-3 gap-4 lg:gap-5 items-stretch">
            {plans.map((plan, idx) => {
              const price = isAnnual ? plan.annual : plan.monthly
              const isPopular = plan.isPopular

              // idx=0 → white, idx=1 → light brand (sand), idx=2 → dark forest
              const cardBg =
                idx === 0 ? 'bg-white border border-black/[0.08] shadow-sm'
                : idx === 1 ? 'bg-brand-sand border border-brand-primary/15 shadow-[0_12px_40px_rgba(31,165,108,0.14)]'
                : 'bg-brand-forest'

              const titleColor = idx === 0 ? 'text-brand-primary' : idx === 1 ? 'text-brand-forest' : 'text-brand-mint'
              const tagColor = idx === 0 ? 'text-gray-400' : idx === 1 ? 'text-brand-deep/70' : 'text-white/50'
              const priceColor = idx === 0 ? 'text-brand-forest' : idx === 1 ? 'text-brand-forest' : 'text-white'
              const unitColor = idx === 0 ? 'text-gray-400' : idx === 1 ? 'text-brand-slate' : 'text-white/40'
              const oldPriceColor = idx === 0 ? 'text-gray-300' : idx === 1 ? 'text-brand-slate/50' : 'text-white/25'
              const dividerColor = idx === 0 ? 'border-black/[0.07]' : idx === 1 ? 'border-brand-primary/15' : 'border-white/10'
              const bulletBg = idx === 0 ? 'text-brand-primary' : idx === 1 ? 'text-brand-forest' : 'text-brand-accent'
              const featureText = idx === 0 ? 'text-gray-600' : idx === 1 ? 'text-brand-forest/80' : 'text-white/70'
              const btnClass = idx === 0
                ? 'bg-brand-forest text-white hover:bg-brand-deep'
                : idx === 1
                ? 'bg-brand-primary text-white hover:bg-brand-deep shadow-brand-primary/30 shadow-lg'
                : 'bg-brand-accent text-brand-forest hover:brightness-110'

              return (
                <div
                  key={plan.id}
                  className={`relative rounded-[24px] flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${cardBg} shadow-sm`}
                >
                  {/* Popular badge */}
                  {isPopular && (
                    <div className="py-2 text-center bg-brand-primary/10 border-b border-brand-primary/15">
                      <span className="text-[10px] font-black uppercase tracking-[0.18em] text-brand-forest">
                        ★ {language === 'uz' ? 'Mashhur' : 'Популярный'}
                      </span>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-1">
                    {/* Category dot + name */}
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`w-1.5 h-1.5 rounded-full ${idx === 2 ? 'bg-brand-mint' : 'bg-brand-primary'}`} />
                      <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${titleColor}`}>{plan.id === 'start' ? (language === 'uz' ? 'Yakka filial' : 'Один магазин') : plan.id === 'advanced' ? (language === 'uz' ? "Ko'p filial" : 'Несколько магазинов') : (language === 'uz' ? "Tarmoq" : 'Сеть')}</span>
                    </div>

                    <h3 className={`text-2xl font-black mb-1 ${priceColor}`}>{plan.name}</h3>
                    <p className={`text-[11px] leading-relaxed mb-5 ${tagColor}`}>{plan.tag}</p>

                    {/* Price */}
                    <div className={`pb-5 mb-5 border-b ${dividerColor}`}>
                      {isAnnual && (
                        <div className={`text-sm line-through mb-0.5 ${oldPriceColor}`}>
                          {currency === 'USD'
                            ? '$' + Math.round(plan.monthly / USD_RATE).toLocaleString('en-US')
                            : new Intl.NumberFormat('uz-UZ').format(plan.monthly)}
                        </div>
                      )}
                      <div className="flex items-baseline gap-1">
                        {currency === 'USD' && (
                          <span className={`text-xl font-black ${priceColor}`}>$</span>
                        )}
                        <span className={`text-[38px] font-black tracking-tight leading-none ${priceColor}`}>
                          {currency === 'USD'
                            ? Math.round(price / USD_RATE).toLocaleString('en-US')
                            : new Intl.NumberFormat('uz-UZ').format(price)}
                        </span>
                      </div>
                      <p className={`text-[10px] mt-1 font-medium ${unitColor}`}>
                        {currency} / {language === 'uz' ? 'oy' : 'мес'}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {(idx === 0
                        ? (language === 'uz' ? ["1 ta filial", "5 ta xodim", "Asosiy zaxira", "To'liq POS", "Mijozlar bazasi", "Bepul o'rnatish"] : ['1 магазин', 'До 5 сотрудников', 'Базовый склад', 'Полная POS', 'База клиентов', 'Установка бесплатно'])
                        : idx === 1
                        ? (language === 'uz' ? ["Cheksiz filiallar", "Cheksiz xodimlar", "Kengaytirilgan tahlil", "Telegram bot", "REST API", "Prioritetli yordam"] : ['Неограниченные филиалы', 'Без лимита штата', 'Аналитика Pro', 'Telegram бот', 'REST API', 'Приоритет поддержка'])
                        : (language === 'uz' ? ["Hamma Advanced", "AI prognoz", "Cash Flow", "E-retsept", "24/7 menejer", "SLA kafolati"] : ['Всё из Advanced', 'AI прогноз', 'Cash Flow', 'Э-рецепты', '24/7 менеджер', 'Гарантия SLA'])
                      ).map((f, i) => (
                        <li key={i} className="flex items-center gap-2.5">
                          <svg className={`w-3 h-3 shrink-0 ${bulletBg}`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          <span className={`text-[11px] leading-snug ${featureText}`}>{f}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <button
                      type="button"
                      onClick={() => openDemoModal('trial')}
                      className={`w-full py-3.5 rounded-2xl font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${btnClass}`}
                    >
                      {language === 'uz' ? '7 kun bepul sinov' : 'Попробовать'}
                      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Feature Comparison Table (Sticky header enabled for effortless comparison on scroll) */}
        <div className="rounded-[40px] bg-white border border-black/[0.08] shadow-[0_15px_60px_rgba(0,0,0,0.04)] mb-20">
          {/* Table Header Row — Sticky at top-[60px] with smooth shadow */}
          <div className="sticky top-[60px] z-30 p-6 sm:p-8 lg:p-10 border-b border-black/[0.08] bg-white/95 backdrop-blur-md rounded-t-[40px] shadow-[0_10px_25px_rgba(0,0,0,0.04)]">
            <div className="grid grid-cols-12 items-center gap-4">
              <div className="col-span-6 sm:col-span-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1D1F] tracking-tight">
                  {language === 'uz' ? 'Tariflarni solishtirish' : 'Сравнение тарифов'}
                </h2>
              </div>

              <div className="col-span-2 sm:col-span-2 text-center">
                <div className="text-base sm:text-xl font-black text-[#1A1D1F]">Start</div>
                <div className="text-[11px] sm:text-xs text-gray-500 font-semibold mt-0.5">
                  {formatPrice(isAnnual ? plans[0].annual : plans[0].monthly)}
                </div>
              </div>

              <div className="col-span-2 sm:col-span-2 text-center bg-[#ECFDF5] py-2.5 px-3 rounded-2xl border border-[#A7F3D0]">
                <div className="text-base sm:text-xl font-black text-[#059669]">Advanced</div>
                <div className="text-[11px] sm:text-xs text-[#065F46] font-bold mt-0.5">
                  {formatPrice(isAnnual ? plans[1].annual : plans[1].monthly)}
                </div>
              </div>

              <div className="col-span-2 sm:col-span-2 text-center">
                <div className="text-base sm:text-xl font-black text-[#1A1D1F]">Pro</div>
                <div className="text-[11px] sm:text-xs text-gray-500 font-semibold mt-0.5">
                  {formatPrice(isAnnual ? plans[2].annual : plans[2].monthly)}
                </div>
              </div>
            </div>
          </div>

          {/* Accordion Categories */}
          <div className="divide-y divide-black/[0.06] rounded-b-[40px] overflow-hidden">
            {categories.map((category) => {
              const isOpen = openCategories[category.id] !== false
              return (
                <div key={category.id} className="transition-colors">
                  {/* Category Header Button */}
                  <button
                    type="button"
                    onClick={() => toggleCategory(category.id)}
                    className="w-full px-6 sm:px-10 py-5 flex items-center justify-between gap-4 bg-[#F8F9FA] hover:bg-gray-100 transition-colors text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-3">
                      <span
                        className={`w-6 h-6 rounded-full bg-brand-primary/10 text-brand-primary flex items-center justify-center text-xs font-black transition-transform duration-200 ${
                          isOpen ? 'rotate-90' : 'rotate-0'
                        }`}
                      >
                        ▶
                      </span>
                      <span className="text-base sm:text-lg font-black text-[#1A1D1F] tracking-tight">
                        {category.title}
                      </span>
                    </div>

                    <span className="text-xs font-bold text-gray-400">
                      {isOpen ? (language === 'uz' ? 'Yopish' : 'Скрыть') : (language === 'uz' ? 'Ko\'rish' : 'Показать')}
                    </span>
                  </button>

                  {/* Rows inside Category */}
                  {isOpen && (
                    <div className="divide-y divide-black/[0.04] bg-white">
                      {category.items.map((row, rIdx) => (
                        <div
                          key={rIdx}
                          className="grid grid-cols-12 items-center gap-4 px-6 sm:px-10 py-4 hover:bg-gray-50/70 transition-colors"
                        >
                          {/* Feature Name */}
                          <div className="col-span-6 sm:col-span-6 text-xs sm:text-sm font-medium text-gray-700 leading-relaxed pr-2">
                            {row.name}
                          </div>

                          {/* Start Value */}
                          <div className="col-span-2 sm:col-span-2 flex justify-center">
                            {row.start ? (
                              <span className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-black shadow-xs">
                                ✓
                              </span>
                            ) : (
                              <span className="w-5 h-5 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center text-xs font-bold">
                                ✕
                              </span>
                            )}
                          </div>

                          {/* Advanced Value */}
                          <div className="col-span-2 sm:col-span-2 flex justify-center bg-brand-primary/[0.02] py-1 rounded-xl">
                            {row.advanced ? (
                              <span className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-black shadow-xs">
                                ✓
                              </span>
                            ) : (
                              <span className="w-5 h-5 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center text-xs font-bold">
                                ✕
                              </span>
                            )}
                          </div>

                          {/* Pro Value */}
                          <div className="col-span-2 sm:col-span-2 flex justify-center">
                            {row.pro ? (
                              <span className="w-6 h-6 rounded-full bg-brand-primary text-white flex items-center justify-center text-xs font-black shadow-xs">
                                ✓
                              </span>
                            ) : (
                              <span className="w-5 h-5 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center text-xs font-bold">
                                ✕
                              </span>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>



        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-2xl sm:text-3xl font-black text-[#1A1D1F] tracking-tight">
              {language === 'uz' ? 'Ko\'p beriladigan savollar' : 'Часто задаваемые вопросы'}
            </h3>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-white border border-black/[0.08] overflow-hidden transition-all shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-[17px] text-[#1A1D1F] hover:text-brand-primary transition-colors cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0 font-black transition-transform duration-200 ${
                        isOpen ? 'rotate-180 bg-brand-primary text-white' : 'text-gray-500'
                      }`}
                    >
                      ↓
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-sm sm:text-base text-gray-600 leading-relaxed border-t border-black/[0.04] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
