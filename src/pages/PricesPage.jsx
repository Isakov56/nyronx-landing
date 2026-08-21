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
  const [openCategories, setOpenCategories] = useState({
    warehouse: true,
    staff: true,
    finance: true,
    marketing: true,
    integration: true,
  })
  const [openFaq, setOpenFaq] = useState(null)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [])

  const toggleCategory = (cat) => {
    setOpenCategories((prev) => ({ ...prev, [cat]: !prev[cat] }))
  }

  const formatPrice = (price) => {
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
    <div className="bg-white min-h-screen pt-28 pb-20 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Back Button */}
        <div className="mb-8">
          <button
            type="button"
            onClick={onNavigateHome}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-gray-500 hover:text-brand-primary transition-colors cursor-pointer"
          >
            <span>←</span>
            <span>{language === 'uz' ? 'Bosh sahifaga qaytish' : 'Вернуться на главную'}</span>
          </button>
        </div>

        {/* Page Main Headline */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <h1 className="text-[38px] sm:text-5xl lg:text-[58px] font-black text-[#1A1D1F] leading-[1.1] tracking-tight mb-8">
            {language === 'uz' ? (
              <>
                Biznesingiz uchun mos <br />
                <span className="text-brand-primary">tarifni</span> tanlang
              </>
            ) : (
              <>
                Выберите подходящий <br />
                <span className="text-brand-primary">тариф</span> для бизнеса
              </>
            )}
          </h1>

          {/* Billing Switcher with Purple Note (Matching Screenshot 1) */}
          <div className="inline-flex items-center relative">
            <div className="p-1.5 rounded-full bg-[#F1F3F5] flex items-center">
              <button
                type="button"
                onClick={() => setIsAnnual(false)}
                className={`px-8 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all cursor-pointer ${
                  !isAnnual
                    ? 'bg-white text-[#1A1D1F] shadow-[0_2px_10px_rgba(0,0,0,0.08)]'
                    : 'text-gray-500 hover:text-[#1A1D1F]'
                }`}
              >
                {language === 'uz' ? 'Oylik' : 'Ежемесячно'}
              </button>
              <button
                type="button"
                onClick={() => setIsAnnual(true)}
                className={`px-8 py-2.5 rounded-full text-sm sm:text-base font-bold transition-all cursor-pointer ${
                  isAnnual
                    ? 'bg-white text-[#1A1D1F] shadow-[0_2px_10px_rgba(0,0,0,0.08)]'
                    : 'text-gray-500 hover:text-[#1A1D1F]'
                }`}
              >
                {language === 'uz' ? 'Yillik' : 'Ежегодно'}
              </button>
            </div>

            {/* Purple Handwritten Note & Arrow */}
            <div className="hidden md:flex items-center absolute -top-8 -right-48 pointer-events-none select-none">
              <div className="flex flex-col items-start">
                <span className="text-[13px] font-bold italic text-[#9333EA] leading-tight font-serif whitespace-nowrap">
                  {language === 'uz' ? "Yillik to'lov tanlanganda\n20% chegirma" : "Скидка 20%\nпри годовой оплате"}
                </span>
                <svg className="w-10 h-6 text-[#9333EA] -mt-1 ml-2 rotate-12" viewBox="0 0 50 30" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M45 5 C 30 25, 15 20, 5 22" strokeLinecap="round" />
                  <path d="M12 17 L 5 22 L 10 28" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Main Pricing Cards (Matching Screenshot 1) */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-20">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annual : plan.monthly
            return (
              <div
                key={plan.id}
                className={`rounded-[36px] overflow-hidden flex flex-col justify-between transition-all duration-300 border ${
                  plan.isPopular
                    ? 'bg-white border-brand-primary shadow-[0_20px_50px_rgba(31,165,108,0.15)] ring-2 ring-brand-primary'
                    : 'bg-white border-black/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-xl'
                }`}
              >
                {/* Popular Header Top Pill */}
                {plan.isPopular ? (
                  <div className="bg-brand-primary text-white text-center py-2 text-xs font-black uppercase tracking-wider">
                    ★ {language === 'uz' ? 'Mashhur' : 'Популярный'}
                  </div>
                ) : (
                  <div className="h-4" />
                )}

                <div className="p-7 sm:p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1A1D1F] mb-4">
                    {plan.name}
                  </h3>

                  <div className="mb-2">
                    <span className="text-3xl sm:text-4xl lg:text-[42px] font-black text-brand-primary tracking-tight">
                      {new Intl.NumberFormat('uz-UZ').format(price)}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-gray-500 font-medium mb-6">
                    {language === 'uz' ? "so'm / bir oy uchun" : 'сум / за один месяц'}
                  </p>

                  <div className="mt-auto pt-6 border-t border-black/[0.06]">
                    <button
                      type="button"
                      onClick={() => openDemoModal('trial')}
                      className={`w-full py-3.5 rounded-2xl font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer shadow-md flex items-center justify-center gap-2 ${
                        plan.isPopular
                          ? 'bg-brand-primary text-white hover:bg-brand-deep shadow-brand-primary/25 hover:shadow-lg'
                          : 'bg-[#F1F3F5] text-[#1A1D1F] hover:bg-gray-200'
                      }`}
                    >
                      <span>{language === 'uz' ? '7 kunlik bepul sinov' : 'Попробовать бесплатно'}</span>
                      <span>➔</span>
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
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

        {/* Bottom Guarantees Strip (With Gorgeous Flaticon-style SVG Icons) */}
        <div className="rounded-[36px] bg-[#F4F7F2] border border-brand-primary/15 p-6 sm:p-10 mb-16 shadow-xs">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="mb-3 transform hover:scale-110 transition-transform duration-200">
                <FlaticonIcons.gift />
              </div>
              <h4 className="font-extrabold text-sm sm:text-base text-[#1A1D1F]">
                {language === 'uz' ? '100% Bepul o\'rnatish' : 'Бесплатная установка'}
              </h4>
              <p className="text-xs text-gray-500 mt-1 font-medium">
                {language === 'uz' ? 'O\'rgatish va sozlash' : 'Настройка и обучение'}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-3 transform hover:scale-110 transition-transform duration-200">
                <FlaticonIcons.lightning />
              </div>
              <h4 className="font-extrabold text-sm sm:text-base text-[#1A1D1F]">
                {language === 'uz' ? '7 kun bepul sinov' : '7 дней бесплатно'}
              </h4>
              <p className="text-xs text-gray-500 mt-1 font-medium">
                {language === 'uz' ? 'Karta talab qilinmaydi' : 'Без привязки карты'}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-3 transform hover:scale-110 transition-transform duration-200">
                <FlaticonIcons.sync />
              </div>
              <h4 className="font-extrabold text-sm sm:text-base text-[#1A1D1F]">
                {language === 'uz' ? 'Tezkor ma\'lumot ko\'chirish' : 'Быстрый перенос базы'}
              </h4>
              <p className="text-xs text-gray-500 mt-1 font-medium">
                {language === 'uz' ? 'Excel orqali 10 daqiqada' : 'Из Excel за 10 минут'}
              </p>
            </div>

            <div className="flex flex-col items-center">
              <div className="mb-3 transform hover:scale-110 transition-transform duration-200">
                <FlaticonIcons.shield />
              </div>
              <h4 className="font-extrabold text-sm sm:text-base text-[#1A1D1F]">
                {language === 'uz' ? '24/7 Texnik yordam' : 'Поддержка 24/7'}
              </h4>
              <p className="text-xs text-gray-500 mt-1 font-medium">
                {language === 'uz' ? 'Doimiy operativ aloqa' : 'Всегда на связи'}
              </p>
            </div>
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
