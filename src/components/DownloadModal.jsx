import { useState, useEffect } from 'react'
import { useModal } from '../context/ModalContext.jsx'
import { useLanguage } from '../context/LanguageContext.jsx'

export default function DownloadModal() {
  const { downloadOpen, closeDownloadModal } = useModal()
  const { language } = useLanguage()
  const [downloading, setDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  useEffect(() => {
    if (downloadOpen) {
      setDownloading(false)
      setDownloaded(false)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [downloadOpen])

  if (!downloadOpen) return null

  const handleDownload = () => {
    setDownloading(true)
    setTimeout(() => {
      setDownloading(false)
      setDownloaded(true)
      // Create a virtual download link
      const blob = new Blob(['Nyronx Pharmacy Management Software for Windows v2.4'], { type: 'text/plain' })
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = 'Nyronx_Pharmacy_Setup_v2.4_x64.exe'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    }, 1200)
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity animate-in fade-in duration-200"
        onClick={closeDownloadModal}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-lg bg-white rounded-[32px] sm:rounded-[40px] shadow-2xl border border-black/10 p-6 sm:p-10 z-10 overflow-hidden animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={closeDownloadModal}
          aria-label="Yopish"
          className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 transition-all cursor-pointer"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Windows Header Icon */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#0078D4] to-[#005A9E] text-white flex items-center justify-center shadow-lg shadow-[#0078D4]/25">
            {/* Windows 4-pane icon */}
            <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
              <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
            </svg>
          </div>
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#0078D4]">
              {language === 'uz' ? 'Rasmiy ish stoli ilovasi' : 'Официальное приложение'}
            </div>
            <h3 className="text-2xl font-black text-[#1A1D1F] tracking-tight">
              Nyronx for Windows
            </h3>
          </div>
        </div>

        {/* Version Details */}
        <div className="p-4 rounded-2xl bg-gray-50 border border-black/[0.06] mb-6 flex items-center justify-between text-xs sm:text-sm">
          <div>
            <span className="text-gray-500 font-medium">Versiya:</span>{' '}
            <span className="font-bold text-[#1A1D1F]">v2.4.2 (Stable)</span>
          </div>
          <div>
            <span className="text-gray-500 font-medium">Tizim:</span>{' '}
            <span className="font-bold text-[#1A1D1F]">Windows 10 / 11 (64-bit)</span>
          </div>
          <div>
            <span className="text-gray-500 font-medium">Hajm:</span>{' '}
            <span className="font-bold text-[#1A1D1F]">84.6 MB</span>
          </div>
        </div>

        {/* Key Features */}
        <div className="space-y-3.5 mb-8 mt-2 text-sm text-gray-700">
          {[
            language === 'uz' ? 'Yuqori tezlikdagi kassa va POS operatsiyalari' : 'Быстрые кассовые и POS операции',
            language === 'uz' ? 'Internet uzilsa ham oflayn rejimda ishlash' : 'Работа в оффлайн-режиме без интернета',
            language === 'uz' ? 'Barcha chek printerlar va shtrix-kod skanerlarni avtomatik aniqlash' : 'Поддержка сканеров и фискальных принтеров',
            language === 'uz' ? '100% xavfsiz va avtomatik zaxira nusxalash' : 'Автоматическое резервное копирование',
          ].map((feat, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="mt-0.5 w-5 h-5 rounded-full bg-[#0078D4]/10 flex items-center justify-center shrink-0">
                <svg className="w-3 h-3 text-[#0078D4] font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="leading-snug">{feat}</span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={handleDownload}
          disabled={downloading}
          className="w-full py-4 rounded-2xl bg-brand-forest hover:bg-brand-deep text-white font-black text-base shadow-xl shadow-brand-forest/20 transition-all hover:scale-[1.01] active:scale-98 cursor-pointer flex items-center justify-center gap-3"
        >
          {downloading ? (
            <>
              <span className="inline-block w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>{language === 'uz' ? 'Yuklab olinmoqda...' : 'Скачивание...'}</span>
            </>
          ) : downloaded ? (
            <>
              <span className="text-lg">✓</span>
              <span>{language === 'uz' ? 'Fayl yuklandi! (Qayta yuklash)' : 'Файл скачан! (Повторить)'}</span>
            </>
          ) : (
            <>
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z" />
              </svg>
              <span>
                {language === 'uz'
                  ? 'Windows uchun yuklab olish (.exe)'
                  : 'Скачать для Windows (.exe)'}
              </span>
            </>
          )}
        </button>

        <p className="text-[11px] text-center text-gray-400 mt-4">
          {language === 'uz'
            ? 'Yuklab olish bepul. O\'rnatgandan so\'ng bepul test rejimida ishlaydi.'
            : 'Бесплатная загрузка. Поддерживает тестовый период.'}
        </p>
      </div>
    </div>
  )
}
