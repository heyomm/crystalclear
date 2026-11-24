import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { emptyEnquiry } from '../data/enquiry.js'

const EnquiryContext = createContext(null)

export function EnquiryProvider({ children }) {
  const [values, setValues] = useState(emptyEnquiry)

  const updateField = useCallback((name, value) => {
    setValues((current) => ({ ...current, [name]: value }))
  }, [])

  const startEnquiry = useCallback(({ service, model } = {}) => {
    setValues((current) => ({
      ...current,
      ...(service && { service }),
      ...(model && { model }),
    }))
    document.getElementById('enquiry-form')?.scrollIntoView({ block: 'start' })
  }, [])

  const value = useMemo(
    () => ({ values, updateField, startEnquiry }),
    [values, updateField, startEnquiry],
  )

  return <EnquiryContext.Provider value={value}>{children}</EnquiryContext.Provider>
}

export function useEnquiry() {
  const context = useContext(EnquiryContext)
  if (!context) {
    throw new Error('useEnquiry must be used inside <EnquiryProvider>')
  }
  return context
}
