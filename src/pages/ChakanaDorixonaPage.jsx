import { useEffect } from 'react'
import { useLanguage } from '../context/LanguageContext.jsx'
import { useModal } from '../context/ModalContext.jsx'

export default function ChakanaDorixonaPage({ onNavigateHome }) {
  const { t, language } = useLanguage()
  const { openDemoModal } = useModal()
  const isUz = language === 'uz'
  const isRu = language === 'ru'

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const features = [
    {
      id: 'inventory',
      icon: '📦',
      title: isUz ? 'Dori va tovarlar hisobi' : isRu ? 'Учет лекарств и товаров' : 'Medication & Stock Accounting',
      description: isUz
        ? "Ombordagi qoldiqlarni aniq vaqt rejimida kuzatib boring. Yaroqlilik muddatlari, seriyalar va partiyalar bo'yicha to'liq nazorat."
        : isRu
        ? 'Следите за остатками на складе в режиме реального времени. Полный контроль по срокам годности, сериям и партиям.'
        : 'Track warehouse inventory balances in real time. Full expiration date, batch, and serial number control.'
    },
    {
      id: 'pos',
      icon: '🛒',
      title: isUz ? 'Tezkor kassa (POS)' : isRu ? 'Быстрая касса (POS)' : 'Fast Checkout POS',
      description: isUz
        ? "Mijozlarga navbatsiz xizmat ko'rsatish uchun shtrix-kod skaneri va kassa apparatlari bilan uzluksiz integratsiya."
        : isRu
        ? 'Бесшовная интеграция со сканерами штрих-кодов и кассовыми аппаратами для обслуживания клиентов без очередей.'
        : 'Seamless integration with barcode scanners and receipt printers for queue-free customer checkout.'
    },
    {
      id: 'analytics',
      icon: '📊',
      title: isUz ? 'Chuqur tahlil va hisobotlar' : isRu ? 'Глубокая аналитика и отчеты' : 'Deep Analytics & Reports',
      description: isUz
        ? "Savdo dinamikasi, foyda, eng ko'p sotiladigan dorilar va xodimlarning samaradorligi bo'yicha tayyor hisobotlar."
        : isRu
        ? 'Готовые отчеты по динамике продаж, прибыли, самым продаваемым лекарствам и эффективности сотрудников.'
        : 'Out-of-the-box reports on sales velocity, profit margins, top-selling Rx items, and cashier performance.'
    },
    {
      id: 'crm',
      icon: '👥',
      title: isUz ? 'Mijozlar bazasi va bonuslar' : isRu ? 'База клиентов и бонусы' : 'Customer Database & Rewards',
      description: isUz
        ? "Doimiy xaridorlarni rag'batlantirish, keshbek va chegirmalar tizimini joriy etish orqali sodiqlikni oshiring."
        : isRu
        ? 'Повышайте лояльность за счет поощрения постоянных покупателей, внедрения системы кэшбэка и скидок.'
        : 'Boost repeat customer loyalty with built-in cashback, bonus points, and discount programs.'
    }
  ]

  return (
    <div className="font-sans pt-[72px] sm:pt-[88px] bg-[#FAFAFA] min-h-screen pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-16 sm:pt-20 sm:pb-24 border-b border-black/[0.04]">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            {/* Left: Text Content */}
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-primary/10 text-brand-forest font-bold text-[13px] mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
                {isUz ? 'Yangi yechim' : isRu ? 'Новое решение' : 'New Solution'}
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#1A1D1F] tracking-tight leading-[1.1] mb-6">
                {isUz 
                  ? 'Chakana dorixonangizni avtomatlashtiring'
                  : isRu
                  ? 'Автоматизируйте вашу розничную аптеку'
                  : 'Automate your retail pharmacy'}
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-500 font-medium mb-8 leading-relaxed max-w-xl">
                {isUz
                  ? "Savdo, zaxira hisobi va xodimlarni boshqarish uchun zamonaviy dasturiy ta'minot. Barcha jarayonlarni bitta joyda nazorat qiling."
                  : isRu
                  ? 'Современное программное обеспечение для управления продажами, складом и персоналом. Контролируйте все процессы в одном месте.'
                  : 'Modern operating software for sales, inventory, and staff management. Control all pharmacy operations in one dashboard.'}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="button"
                  onClick={() => openDemoModal('demo')}
                  className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-brand-primary text-white font-bold text-[17px] shadow-lg shadow-brand-primary/30 hover:bg-brand-deep hover:scale-105 transition-all cursor-pointer"
                >
                  {isUz ? 'Demo olish' : isRu ? 'Получить демо' : 'Get Demo'}
                </button>
                <button
                  type="button"
                  onClick={onNavigateHome}
                  className="inline-flex justify-center items-center px-8 py-4 rounded-full bg-white border border-gray-200 text-gray-800 font-bold text-[17px] hover:bg-gray-50 hover:scale-105 transition-all cursor-pointer"
                >
                  {isUz ? 'Bosh sahifaga qaytish' : isRu ? 'Вернуться на главную' : 'Back to Home'}
                </button>
              </div>
            </div>

            {/* Right: Mockup Illustration */}
            <div className="relative">
              <div className="relative z-10 w-full rounded-[40px] bg-white border border-black/[0.08] shadow-[0_30px_80px_rgba(0,0,0,0.08)] p-6 sm:p-8 overflow-hidden select-none">
                {/* Mockup Header */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary text-xl">
                      💊
                    </div>
                    <div>
                      <h4 className="text-[17px] font-black text-[#1A1D1F]">NYRONX POS</h4>
                      <p className="text-xs text-gray-500 font-medium">{isUz ? 'Chakana savdo' : isRu ? 'Розничная продажа' : 'Retail POS'}</p>
                    </div>
                  </div>
                  <div className="px-3 py-1 rounded-lg bg-green-50 text-green-600 text-xs font-bold border border-green-100">
                    Online
                  </div>
                </div>

                {/* Mockup Content */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="p-4 rounded-2xl bg-[#F8FAF8] border border-brand-primary/10">
                    <div className="text-xs text-gray-500 font-medium mb-1">
                      {isUz ? 'Kunlik savdo' : isRu ? 'Продажи за день' : 'Daily Sales'}
                    </div>
                    <div className="text-[22px] font-black text-brand-forest">15.5 M</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-blue-50 border border-blue-100">
                    <div className="text-xs text-blue-600 font-medium mb-1">
                      {isUz ? 'Cheklar soni' : isRu ? 'Количество чеков' : 'Receipt Count'}
                    </div>
                    <div className="text-[22px] font-black text-blue-800">1,248</div>
                  </div>
                </div>

                {/* Fake Cart Items */}
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors border border-transparent hover:border-gray-100">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center text-sm">
                          📦
                        </div>
                        <div>
                          <div className="text-[14px] font-bold text-[#1A1D1F]">Trimol 500mg #{i * 10}</div>
                          <div className="text-[11px] text-gray-500">2 pcs x 15,000 UZS</div>
                        </div>
                      </div>
                      <div className="font-bold text-[14px] text-brand-forest">
                        {30000} UZS
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Decorative blobs */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-brand-primary/20 to-blue-400/20 rounded-full blur-[100px] -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* 2. FEATURES GRID SECTION */}
      <section className="py-16 sm:py-24">
        <div className="max-w-[1360px] mx-auto px-4 sm:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#1A1D1F] tracking-tight mb-4">
              {isUz 
                ? "Barcha kerakli imkoniyatlar bitta tizimda"
                : isRu
                ? "Все необходимые возможности в одной системе"
                : "All essential features in one platform"}
            </h2>
            <p className="text-[17px] text-gray-500 font-medium">
              {isUz
                ? "Dorixonani muvaffaqiyatli boshqarish uchun eng zamonaviy vositalar va hisobotlar."
                : isRu
                ? "Самые современные инструменты и отчеты для успешного управления аптекой."
                : "State-of-the-art tools and reports for successful pharmacy management."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature) => (
              <div key={feature.id} className="group bg-white rounded-2xl p-8 border border-black/5 hover:border-brand-forest/20 hover:-translate-y-0.5 hover:shadow-[0_18px_45px_-25px_rgba(15,61,46,0.3)] transition-all duration-300">
                <div className="w-14 h-14 rounded-2xl bg-brand-primary/10 flex items-center justify-center text-3xl mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-[#1A1D1F] mb-3 leading-snug">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-gray-500 leading-relaxed font-medium">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CTA SECTION */}
      <section className="py-12 sm:py-16 px-4">
        <div className="max-w-[1200px] mx-auto bg-brand-forest rounded-[40px] sm:rounded-[56px] p-10 sm:p-16 lg:p-20 text-center relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-6 leading-tight max-w-3xl mx-auto">
              {isUz
                ? "Hoziroq bepul sinab ko'ring va savdolaringizni oshiring"
                : isRu
                ? "Попробуйте бесплатно прямо сейчас и увеличьте свои продажи"
                : "Try free today and boost your pharmacy revenue"}
            </h2>
            <p className="text-lg sm:text-xl text-white/80 font-medium mb-10 max-w-2xl mx-auto">
              {isUz
                ? "Dasturni o'rnatish, o'rgatish va 14 kunlik sinov muddati mutlaqo bepul."
                : isRu
                ? "Установка программы, обучение и 14-дневный пробный период абсолютно бесплатно."
                : "Software deployment, team training, and 14-day trial period are completely free."}
            </p>
            <button
              type="button"
              onClick={() => openDemoModal('demo')}
              className="inline-flex justify-center items-center px-10 py-5 rounded-full bg-brand-accent text-[#1A1D1F] font-black text-[17px] sm:text-[19px] shadow-2xl hover:scale-105 transition-all cursor-pointer"
            >
              {isUz ? "Ulanish uchun ariza qoldirish" : isRu ? "Оставить заявку на подключение" : "Apply for Connection"}
            </button>
          </div>

          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand-primary/30 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
        </div>
      </section>
    </div>
  )
}

