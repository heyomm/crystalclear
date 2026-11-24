import { business } from '../data/business.js'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/
const INDIAN_MOBILE_PATTERN = /^[6-9]\d{9}$/
const MAX_MESSAGE_LENGTH = 800

export function normalisePhone(phone) {
  return phone.replace(/\D/g, '').replace(/^(91|0)(?=\d{10}$)/, '')
}

export function validateEnquiry(values) {
  const errors = {}

  if (values.name.trim().length < 2) {
    errors.name = 'Please enter your full name.'
  }
  if (!INDIAN_MOBILE_PATTERN.test(normalisePhone(values.phone))) {
    errors.phone = 'Please enter a valid 10-digit mobile number.'
  }
  if (values.email.trim() && !EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address or leave this field empty.'
  }
  if (!values.service) {
    errors.service = 'Please select the service you need.'
  }
  if (values.message.length > MAX_MESSAGE_LENGTH) {
    errors.message = `Please keep your message under ${MAX_MESSAGE_LENGTH} characters.`
  }

  return errors
}

export function buildEnquiryMessage(values) {
  const lines = [
    `Hello ${business.shortName}, I would like to enquire about an RO service.`,
    '',
    `Name: ${values.name.trim()}`,
    `Phone: ${normalisePhone(values.phone)}`,
  ]
  if (values.email.trim()) lines.push(`Email: ${values.email.trim()}`)
  lines.push(`Service: ${values.service}`)
  if (values.model.trim()) lines.push(`RO brand / model: ${values.model.trim()}`)
  if (values.message.trim()) lines.push('', values.message.trim())
  return lines.join('\n')
}

export function buildWhatsAppUrl(message) {
  return `${business.whatsappHref}?text=${encodeURIComponent(message)}`
}

export function buildMailtoUrl(subject, body) {
  return `${business.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}
