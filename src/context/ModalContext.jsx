import { createContext, useContext, useState } from 'react'

const ModalContext = createContext()

export function ModalProvider({ children }) {
  const [demoOpen, setDemoOpen] = useState(false)
  const [downloadOpen, setDownloadOpen] = useState(false)
  const [initialType, setInitialType] = useState('demo') // 'demo' | 'trial' | 'consultation'

  const openDemoModal = (type = 'demo') => {
    setInitialType(type)
    setDemoOpen(true)
  }

  const closeDemoModal = () => setDemoOpen(false)

  const openDownloadModal = () => setDownloadOpen(true)
  const closeDownloadModal = () => setDownloadOpen(false)

  return (
    <ModalContext.Provider
      value={{
        demoOpen,
        openDemoModal,
        closeDemoModal,
        downloadOpen,
        openDownloadModal,
        closeDownloadModal,
        initialType,
      }}
    >
      {children}
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider')
  }
  return context
}
