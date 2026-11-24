import { CircleAlert, CircleCheck, Mail, MessageCircle, Send } from 'lucide-react'
import { useRef, useState } from 'react'
import { useEnquiry } from '../context/EnquiryContext.jsx'
import { enquiryOptions } from '../data/enquiry.js'
import { buildEnquiryMessage, buildMailtoUrl, buildWhatsAppUrl, validateEnquiry } from '../lib/enquiry.js'

function Field({ name, label, optional = false, error, children }) {
  const id = `enquiry-${name}`
  const errorId = `${id}-error`

  return (
    <div className={`field field--${name}`}>
      <label htmlFor={id} className="field__label">
        {label}
        {optional && <span className="field__optional"> (optional)</span>}
      </label>
      {children({
        id,
        name,
        className: 'field__control',
        'aria-invalid': error ? true : undefined,
        'aria-describedby': error ? errorId : undefined,
      })}
      {error && (
        <p id={errorId} className="field__error">
          <CircleAlert aria-hidden="true" />
          {error}
        </p>
      )}
    </div>
  )
}

export default function EnquiryForm() {
  const { values, updateField } = useEnquiry()
  const [errors, setErrors] = useState({})
  const [result, setResult] = useState(null)
  const formRef = useRef(null)

  const handleChange = (event) => {
    const { name, value } = event.target
    updateField(name, value)
    if (errors[name]) {
      setErrors((current) => {
        const { [name]: _removed, ...rest } = current
        return rest
      })
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const foundErrors = validateEnquiry(values)
    setErrors(foundErrors)

    const [firstInvalid] = Object.keys(foundErrors)
    if (firstInvalid) {
      setResult({ type: 'error' })
      formRef.current?.querySelector(`[name="${firstInvalid}"]`)?.focus()
      return
    }

    const message = buildEnquiryMessage(values)
    const whatsappUrl = buildWhatsAppUrl(message)
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    setResult({
      type: 'ready',
      whatsappUrl,
      mailtoUrl: buildMailtoUrl(`RO service enquiry – ${values.service}`, message),
    })
  }

  return (
    <form
      id="enquiry-form"
      ref={formRef}
      className="enquiry-form"
      onSubmit={handleSubmit}
      noValidate
      aria-labelledby="enquiry-form-title"
    >
      <h3 id="enquiry-form-title" className="enquiry-form__title">
        Send an Enquiry
      </h3>
      <p className="enquiry-form__lead">
        Fill in your details and we will open WhatsApp with your enquiry ready to send.
      </p>

      <div className="enquiry-form__fields">
        <Field name="name" label="Full Name" error={errors.name}>
          {(props) => (
            <input {...props} type="text" autoComplete="name" required value={values.name} onChange={handleChange} />
          )}
        </Field>
        <Field name="phone" label="Phone Number" error={errors.phone}>
          {(props) => (
            <input
              {...props}
              type="tel"
              inputMode="tel"
              autoComplete="tel"
              required
              value={values.phone}
              onChange={handleChange}
            />
          )}
        </Field>
        <Field name="email" label="Email Address" optional error={errors.email}>
          {(props) => (
            <input {...props} type="email" autoComplete="email" value={values.email} onChange={handleChange} />
          )}
        </Field>
        <Field name="service" label="Select Service" error={errors.service}>
          {(props) => (
            <select {...props} required value={values.service} onChange={handleChange}>
              <option value="">Choose a service</option>
              {enquiryOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          )}
        </Field>
        <Field name="model" label="RO Brand / Model" optional error={errors.model}>
          {(props) => <input {...props} type="text" value={values.model} onChange={handleChange} />}
        </Field>
        <Field name="message" label="Message" optional error={errors.message}>
          {(props) => <textarea {...props} rows={4} value={values.message} onChange={handleChange} />}
        </Field>
      </div>

      <button type="submit" className="btn btn--primary btn--lg enquiry-form__submit">
        <Send aria-hidden="true" />
        Submit Enquiry
      </button>

      <div aria-live="polite">
        {result?.type === 'error' && (
          <p className="form-status form-status--error">
            <CircleAlert aria-hidden="true" />
            Please correct the highlighted fields and submit again.
          </p>
        )}
        {result?.type === 'ready' && (
          <div className="form-status form-status--ready">
            <CircleCheck aria-hidden="true" />
            <div>
              <p>
                <strong>Your enquiry is ready.</strong> WhatsApp should have opened with your details
                filled in. Press Send there to deliver it to us. Nothing has been sent yet.
              </p>
              <div className="form-status__actions">
                <a className="btn btn--teal btn--sm" href={result.whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <MessageCircle aria-hidden="true" />
                  Open WhatsApp
                </a>
                <a className="btn btn--outline btn--sm" href={result.mailtoUrl}>
                  <Mail aria-hidden="true" />
                  Send by email instead
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </form>
  )
}
