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
    return new Intl.NumberFormat('uz-UZ').format(price) + ' ' + (language === 'uz' ? "so'm" : language === 'ru' ? 'сум' : 'sum')
  }

  // 3 Core Plans
  const plans = [
    {
      id: 'start',
      name: 'Start',
      monthly: 299000,
      annual: 239000,
      isPopular: false,
      tag: language === 'uz' ? 'Kichik dorixonalar uchun' : language === 'ru' ? 'Для небольших аптек' : 'For small pharmacies',
    },
    {
      id: 'advanced',
      name: 'Advanced',
      monthly: 499000,
      annual: 399000,
      isPopular: true,
      tag: language === 'uz' ? "O'rta va rivojlanayotgan dorixonalar" : language === 'ru' ? 'Для растущих аптек' : 'For growing pharmacies',
    },
    {
      id: 'pro',
      name: 'Pro',
      monthly: 999000,
      annual: 799000,
      isPopular: false,
      tag: language === 'uz' ? 'Tarmoqlar va yirik klinikalar' : language === 'ru' ? 'Для сетей аптек и клиник' : 'For pharmacy chains & clinics',
    },
  ]

  // Comparison Categories & Matrix
  const categories = [
    {
      id: 'warehouse',
      title: language === 'uz' ? 'Omborxona hisobi' : language === 'ru' ? 'Складской учет' : 'Inventory Accounting',
      items: [
        {
          name: language === 'uz'
            ? 'Tovarlarni rangi, o\'lchami va boshqa belgilari (doza, seriya) bo\'yicha turkumlash va hisobga olish'
            : language === 'ru'
            ? 'Категоризация и учет товаров по дозировкам, сериям и признакам'
            : 'Categorization and inventory tracking by dosage, batch, and attributes',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Tovarlarni o\'lchov birliklari (dona, metr, kilogramm, flakon) bo\'yicha hisobga olish'
            : language === 'ru'
            ? 'Учет товаров по единицам измерения (штука, флакон, упаковка, кг)'
            : 'Inventory tracking by unit of measure (piece, vial, pack, kg)',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Komplektlar va retsept bo\'yicha tayyorlanadigan dori vositalarini hisobga olish'
            : language === 'ru'
            ? 'Учет комплектов и рецептурных наборов лекарств'
            : 'Compounded prescriptions and product kit tracking',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Mahsulotlarga fotosuratlar qo\'shish va dori yo\'riqnomasini ko\'rish'
            : language === 'ru'
            ? 'Добавление фотографий к товарам и просмотр инструкций'
            : 'Attach product images and view drug insert instructions',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Tovarlar harakati tarixini kuzatish (kirim, chiqim, spetsifikatsiya)'
            : language === 'ru'
            ? 'Отслеживание истории движения товаров (приход, расход, списание)'
            : 'Track complete product movement history (intake, sales, write-offs)',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Tovarlarga opsional xususiyatlarni qo\'shish (Retseptli / Retseptsiz)'
            : language === 'ru'
            ? 'Дополнительные свойства товаров (рецептурный / безрецептурный)'
            : 'Custom product tags and properties (Prescription / OTC)',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Mahsulot narxlarini o\'zgartirish va marja nazorati'
            : language === 'ru'
            ? 'Изменение цен на товары и контроль наценки'
            : 'Dynamic price edits and margin markup controls',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Tovarlar narxlarini ro\'yxat bo\'yicha ommaviy o\'zgartirish'
            : language === 'ru'
            ? 'Массовое изменение цен по списку или накладной'
            : 'Bulk price updates by list or supplier invoice',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Tovarlarni to\'liq va qisman inventarizatsiya qilish (mobil skaner orqali)'
            : language === 'ru'
            ? 'Полная и выборочная инвентаризация (со смартфона или сканера)'
            : 'Full and partial inventory audits (via mobile scanner or phone)',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Asl Belgisi (DataMatrix) markirovkalash va agregatsiya'
            : language === 'ru'
            ? 'Маркировка Asl Belgisi (DataMatrix) и агрегация'
            : 'Asl Belgisi (DataMatrix) serialization & barcode aggregation',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Dorilarning yaroqlilik muddati (Srok) tugashini avtomatik ogohlantirish'
            : language === 'ru'
            ? 'Автоматическое оповещение об истечении срока годности'
            : 'Automated medication expiration date alert notifications',
          start: false,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Avtomatlashtirilgan dori xaridi va tugash ehtimoli prognozi (AI)'
            : language === 'ru'
            ? 'Автоматический дозаказ лекарств и AI прогноз спроса'
            : 'Automated stock reordering and AI demand forecasting',
          start: false,
          advanced: false,
          pro: true,
        },
      ],
    },
    {
      id: 'staff',
      title: language === 'uz' ? 'Xodimlar va rollarni boshqarish' : language === 'ru' ? 'Управление сотрудниками и ролями' : 'Staff & Role Management',
      items: [
        {
          name: language === 'uz'
            ? 'Xodimlar uchun rollar (Kassir, Farmatsevt, Bosh hisobchi, Menejer)'
            : language === 'ru'
            ? 'Роли для сотрудников (Кассир, Фармацевт, Бухгалтер, Администратор)'
            : 'Staff role permissions (Cashier, Pharmacist, Accountant, Manager)',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Har bir xodim uchun cheklangan huquqlar va xavfsizlik'
            : language === 'ru'
            ? 'Индивидуальные права доступа и безопасность данных'
            : 'Granular access rights and data security control',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Kassirlar KPI si va sotuvdan foiz (bonus) hisoblash'
            : language === 'ru'
            ? 'Расчет KPI кассиров и процента от продаж (мотивация)'
            : 'Cashier KPI tracking and sales commission bonus calculation',
          start: false,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Cheksiz miqdorda xodimlar va kassirlar qo\'shish'
            : language === 'ru'
            ? 'Неограниченное количество сотрудников и рабочих мест'
            : 'Unlimited employee profiles and active register terminals',
          start: false,
          advanced: true,
          pro: true,
        },
      ],
    },
    {
      id: 'finance',
      title: language === 'uz' ? 'Moliyani boshqarish' : language === 'ru' ? 'Управление финансами' : 'Financial Management',
      items: [
        {
          name: language === 'uz'
            ? 'Kassa smenalarini ochish, yopish va avtomatik Z-hisobot'
            : language === 'ru'
            ? 'Открытие/закрытие кассовых смен и авто-формирование Z-отчетов'
            : 'Shift opening/closing and automated Z-report generation',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Naqd, Plastik karta, Humo, Uzcard, QR va Click/Payme to\'lovlari'
            : language === 'ru'
            ? 'Прием оплаты наличными, Humo, Uzcard, QR, Click и Payme'
            : 'Cash, Humo, Uzcard, QR, Click, and Payme payment processing',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Yetkazib beruvchilar (distribyutorlar) bilan hisob-kitob va qarz daftari'
            : language === 'ru'
            ? 'Взаиморасчеты с поставщиками и контроль задолженностей'
            : 'Supplier accounts payable and debt ledger management',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Foyda va zarar (P&L) moliyaviy hisoboti'
            : language === 'ru'
            ? 'Отчет о прибылях и убытках (P&L)'
            : 'Profit & Loss (P&L) financial statements',
          start: false,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Pul oqimi (Cash Flow) va filiallar rentabelligi chuqur tahlili'
            : language === 'ru'
            ? 'Движение денежных средств (Cash Flow) и рентабельность филиалов'
            : 'Cash Flow statements and in-depth branch profitability analytics',
          start: false,
          advanced: false,
          pro: true,
        },
      ],
    },
    {
      id: 'marketing',
      title: language === 'uz' ? 'Marketing vositalari va mijozlar sodiqligi' : language === 'ru' ? 'Маркетинг и лояльность клиентов' : 'Marketing & Customer Loyalty',
      items: [
        {
          name: language === 'uz'
            ? 'Mijozlar va bemorlar elektron bazasi'
            : language === 'ru'
            ? 'Электронная база клиентов и пациентов'
            : 'Digital customer and patient profile database',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Chegirma kartalari va jamg\'arib boriladigan keshbek'
            : language === 'ru'
            ? 'Дисконтные карты и накопительный кешбэк'
            : 'Discount cards and automated customer cashback',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Do\'kondagi xaridlar va servis haqida fikr-mulohazalar uchun Telegram bot'
            : language === 'ru'
            ? 'Telegram-бот для отзывов о покупках и качестве сервиса'
            : 'Telegram bot for customer purchase reviews and feedback',
          start: false,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Reklama xabarlarini yuborish uchun Telegram bot (aksiyalar, maxsus takliflar)'
            : language === 'ru'
            ? 'Рассылка промо-акций и персональных предложений в Telegram'
            : 'Promotional broadcasts and targeted deal alerts via Telegram',
          start: false,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Elektron retseptlar va shifokorlar bilan integratsiya'
            : language === 'ru'
            ? 'Интеграция с электронными рецептами и врачами'
            : 'E-prescription system & doctor network integration',
          start: false,
          advanced: false,
          pro: true,
        },
      ],
    },
    {
      id: 'integration',
      title: language === 'uz' ? 'Integratsiya va texnik xizmat' : language === 'ru' ? 'Интеграции и техподдержка' : 'Integrations & Technical Support',
      items: [
        {
          name: language === 'uz'
            ? '100% Bepul o\'rnatish, ma\'lumotlarni ko\'chirish va xodimlarni o\'rgatish'
            : language === 'ru'
            ? 'Бесплатная установка, перенос данных и обучение персонала'
            : '100% Free setup, data migration, and full team training',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Har qanday shtrix-kod skaneri, chek printeri va kassa apparatlari bilan ishlash'
            : language === 'ru'
            ? 'Поддержка любых сканеров, фискальных принтеров и весов'
            : 'Support for all barcode scanners, receipt printers & POS hardware',
          start: true,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? 'Ochiq REST API orqali tashqi dasturlar (1C, ERP, Sayt) bilan integratsiya'
            : language === 'ru'
            ? 'Открытый REST API для интеграции с 1C, сайтом и ERP'
            : 'Open REST API for 1C, ERP, and e-commerce platform integrations',
          start: false,
          advanced: true,
          pro: true,
        },
        {
          name: language === 'uz'
            ? '24/7 Shaxsiy menejer va prioritetli texnik qo\'llab-quvvatlash'
            : language === 'ru'
            ? 'Персональный менеджер и приоритетная техподдержка 24/7'
            : '24/7 Dedicated account manager & priority tech support',
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
    : language === 'ru'
    ? [
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
    : [
        {
          q: 'Is there any additional charge for setup and onboarding?',
          a: 'No, software installation, system configuration, and complete team training are 100% free of charge.',
        },
        {
          q: 'How does the 7-day free trial period work?',
          a: 'After signing up, you get full access to all features for 7 days without restrictions. No credit card required.',
        },
        {
          q: 'Can you help migrate medication inventory from our existing software?',
          a: 'Yes, our team will safely import all products, stock quantities, expiration dates, and prices from Excel or your current system.',
        },
        {
          q: 'Will the checkout system work if the internet goes down?',
          a: 'Yes, Nyronx supports full offline operation. Your registers continue sales seamlessly, and data automatically syncs once reconnected.',
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
            <span>{language === 'uz' ? 'Bosh sahifaga qaytish' : language === 'ru' ? 'Вернуться на главную' : 'Back to main page'}</span>
          </button>
        </div>

        {/* ── EDITORIAL HEADER + CARDS ────────────────────────── */}
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">

          {/* LEFT COLUMN ─ label / heading / description / all-plans list */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-brand-primary mb-5">
              {language === 'uz' ? 'Tariflar va narxlar' : language === 'ru' ? 'Тарифы и цены' : 'Plans & Pricing'}
            </p>

            <h1 className="text-[38px] sm:text-[46px] font-black text-brand-forest leading-[1.1] tracking-tight mb-8">
              {language === 'uz' ? (
                <>Bitta platforma, <span className="italic font-light" style={{ fontFamily: '"Fraunces", serif' }}>ikki yo'l</span> boshlash uchun.</>
              ) : language === 'ru' ? (
                <>Одна платформа, <span className="italic font-light" style={{ fontFamily: '"Fraunces", serif' }}>два способа</span> начать.</>
              ) : (
                <>One platform, <span className="italic font-light" style={{ fontFamily: '"Fraunces", serif' }}>two simple paths</span> to launch.</>
              )}
            </h1>

            {/* All plans include */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4">
                {language === 'uz' ? "Barcha tariflarda bor" : language === 'ru' ? 'Во всех тарифах' : 'Included in all plans'}
              </p>
              <ul className="space-y-3">
                {(language === 'uz'
                  ? ["O'rnatish to'lovi yo'q", "Istalgan vaqt bekor qilish", "Zudlik bilan faollashtirish", "Xavfsiz saqlash + kunlik zaxira"]
                  : language === 'ru'
                  ? ['Без платы за установку', 'Отмена в любое время', 'Мгновенная активация', 'Безопасное хранение + резерв']
                  : ['Zero setup fees', 'Cancel anytime', 'Instant activation', 'Secure cloud storage + daily backup']
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

          {/* RIGHT COLUMN ─ Controls + 3 pricing cards stacked */}
          <div className="lg:col-span-8 flex flex-col">
            {/* Top Control Bar: Currency Toggle + Billing Switcher above cards */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              {/* Currency Toggle: UZS / USD */}
              <div className="p-1 rounded-full bg-[#EAEDE8] flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setCurrency('UZS')}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
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
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    currency === 'USD'
                      ? 'bg-white text-brand-forest shadow-sm'
                      : 'text-gray-500 hover:text-brand-forest'
                  }`}
                >
                  USD
                </button>
              </div>

              {/* Billing Switcher: Monthly / Annual */}
              <div className="p-1 rounded-full bg-[#EAEDE8] flex items-center gap-1">
                <button
                  type="button"
                  onClick={() => setIsAnnual(false)}
                  className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    !isAnnual
                      ? 'bg-white text-brand-forest shadow-sm'
                      : 'text-gray-500 hover:text-brand-forest'
                  }`}
                >
                  {language === 'uz' ? 'Oylik' : language === 'ru' ? 'Месячно' : 'Monthly'}
                </button>
                <button
                  type="button"
                  onClick={() => setIsAnnual(true)}
                  className={`flex items-center gap-2 pl-4 pr-2 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isAnnual
                      ? 'bg-white text-brand-forest shadow-sm'
                      : 'text-gray-500 hover:text-brand-forest'
                  }`}
                >
                  {language === 'uz' ? 'Yillik' : language === 'ru' ? 'Годовой' : 'Annual'}
                  <span className="text-[9px] font-black bg-brand-accent text-brand-forest px-2 py-0.5 rounded-full tracking-wide whitespace-nowrap">
                    {language === 'uz' ? '20% tejash' : language === 'ru' ? 'Скидка 20%' : 'Save 20%'}
                  </span>
                </button>
              </div>
            </div>

            {/* 3 Pricing Cards Grid */}
            <div className="grid sm:grid-cols-3 gap-4 lg:gap-5 items-stretch">
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
                  className={`group relative rounded-2xl flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-25px_rgba(15,61,46,0.3)] ${cardBg}`}
                >
                  <div className="p-6 flex flex-col flex-1">
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
                        {currency} / {language === 'uz' ? 'oy' : language === 'ru' ? 'мес' : 'mo'}
                      </p>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {(idx === 0
                        ? (language === 'uz' ? ["1 ta filial", "5 ta xodim", "Asosiy zaxira", "To'liq POS", "Mijozlar bazasi", "Bepul o'rnatish"] : language === 'ru' ? ['1 магазин', 'До 5 сотрудников', 'Базовый склад', 'Полная POS', 'База клиентов', 'Установка бесплатно'] : ['1 store location', 'Up to 5 staff', 'Basic inventory', 'Full POS checkout', 'Customer database', 'Free installation'])
                        : idx === 1
                        ? (language === 'uz' ? ["Cheksiz filiallar", "Cheksiz xodimlar", "Kengaytirilgan tahlil", "Telegram bot", "REST API", "Prioritetli yordam"] : language === 'ru' ? ['Неограниченные филиалы', 'Без лимита штата', 'Аналитика Pro', 'Telegram бот', 'REST API', 'Приоритет поддержка'] : ['Unlimited locations', 'Unlimited staff', 'Advanced analytics', 'Telegram bot', 'REST API access', 'Priority support'])
                        : (language === 'uz' ? ["Hamma Advanced", "AI prognoz", "Cash Flow", "E-retsept", "24/7 menejer", "SLA kafolati"] : language === 'ru' ? ['Всё из Advanced', 'AI прогноз', 'Cash Flow', 'Э-рецепты', '24/7 менеджер', 'Гарантия SLA'] : ['All Advanced features', 'AI forecasting', 'Cash Flow statements', '24/7 manager', 'SLA uptime SLA'])
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
                      className={`w-full py-3.5 rounded-full font-bold text-sm transition-all cursor-pointer flex items-center justify-center gap-2 ${btnClass}`}
                    >
                      {language === 'uz' ? '7 kun bepul sinov' : language === 'ru' ? 'Попробовать' : 'Start 7-Day Trial'}
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
      </div>

        {/* Feature Comparison Table (Header fixed at top of card, rows scroll smoothly inside) */}
        <div className="rounded-[40px] bg-white border border-black/[0.08] shadow-[0_15px_60px_rgba(0,0,0,0.04)] mb-20 overflow-hidden">
          {/* Table Header Row — Fixed at top of table card */}
          <div className="sticky top-0 z-20 p-6 sm:p-8 lg:p-10 border-b border-black/[0.08] bg-white shadow-[0_4px_15px_rgba(0,0,0,0.03)]">
            <div className="grid grid-cols-12 items-center gap-4">
              <div className="col-span-6 sm:col-span-6">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#1A1D1F] tracking-tight">
                  {language === 'uz' ? 'Tariflarni solishtirish' : language === 'ru' ? 'Сравнение тарифов' : 'Compare Plans'}
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

          {/* Accordion Categories - Internal Scroll Box */}
          <div className="max-h-[540px] overflow-y-auto divide-y divide-black/[0.06] rounded-b-[40px]">
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
                      {isOpen
                        ? (language === 'uz' ? 'Yopish' : language === 'ru' ? 'Скрыть' : 'Collapse')
                        : (language === 'uz' ? 'Ko\'rish' : language === 'ru' ? 'Показать' : 'Expand')}
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
              {language === 'uz' ? 'Ko\'p beriladigan savollar' : language === 'ru' ? 'Часто задаваемые вопросы' : 'Frequently Asked Questions'}
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
