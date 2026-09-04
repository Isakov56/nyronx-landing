import { createContext, useContext, useState, useMemo, useCallback } from 'react'

const ModalContext = createContext()

// Ruxsat etilgan modal turlari — noto'g'ri qiymat kelsa jim tarzda xato
// kontent ko'rsatishning oldini oladi
const VALID_DEMO_TYPES = ['demo', 'trial', 'consultation']

export function ModalProvider({ children }) {
  const [demoOpen, setDemoOpen] = useState(false)
  const [downloadOpen, setDownloadOpen] = useState(false)
  const [initialType, setInitialType] = useState('demo') // 'demo' | 'trial' | 'consultation'

  // useCallback — funksiyalarning reference'i har renderda o'zgarmasligi uchun
  // (useMemo bilan birga ishlaydi, pastga qarang)
  const openDemoModal = useCallback((type = 'demo') => {
    setInitialType(VALID_DEMO_TYPES.includes(type) ? type : 'demo')
    setDemoOpen(true)
  }, [])

  const closeDemoModal = useCallback(() => setDemoOpen(false), [])

  const openDownloadModal = useCallback(() => setDownloadOpen(true), [])
  const closeDownloadModal = useCallback(() => setDownloadOpen(false), [])

  // Provider value'ni memoize qilish — demoOpen/downloadOpen/initialType
  // o'zgarmasa, context'ga bog'langan komponentlar keraksiz qayta render bo'lmaydi
  const value = useMemo(
    () => ({
      demoOpen,
      openDemoModal,
      closeDemoModal,
      downloadOpen,
      openDownloadModal,
      closeDownloadModal,
      initialType,
    }),
    [demoOpen, downloadOpen, initialType, openDemoModal, closeDemoModal, openDownloadModal, closeDownloadModal]
  )

  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}