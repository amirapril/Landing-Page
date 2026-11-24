import { useState } from 'react'
import Reveal from './Reveal.jsx'
import { contact, servicesSelect } from '../data/content.js'
import './Contact.css'

const initialValues = {
  name: '',
  phone: '',
  email: '',
  service: '',
  message: '',
}

const isEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value.trim())

/** Accepts: 0912 123 4567 · +98 912 123 4567 · 989121234567 */
const isPhone = (value) => /^(\+98|0098|98|0)?9\d{9}$/.test(value.replace(/[^\d+]/g, ''))

function validate(values) {
  const errors = {}

  if (!values.name.trim()) errors.name = 'Please enter your full name.'
  else if (values.name.trim().length < 3) errors.name = 'Name must be at least 3 characters.'

  if (!values.phone.trim()) errors.phone = 'Please enter your phone number.'
  else if (!isPhone(values.phone)) errors.phone = 'Enter a valid mobile number, e.g. 0912 123 4567.'

  if (!values.email.trim()) errors.email = 'Please enter your email address.'
  else if (!isEmail(values.email)) errors.email = 'Enter a valid email, e.g. name@example.com.'

  if (!values.service) errors.service = 'Please choose the service you are interested in.'

  return errors
}

export default function Contact() {
  const [values, setValues] = useState(initialValues)
  const [touched, setTouched] = useState({})
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState('')

  const showError = (field) => (touched[field] ? errors[field] : '')

  const handleChange = (event) => {
    const { name, value } = event.target
    const nextValues = { ...values, [name]: value }
    setValues(nextValues)
    setSuccess('')
    // Re-validate live once the user has started interacting with the form
    if (Object.keys(touched).length) {
      setErrors(validate(nextValues))
    }
  }

  const handleBlur = (event) => {
    const { name } = event.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors(validate(values))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setTouched({ name: true, phone: true, email: true, service: true, message: true })

    if (Object.keys(nextErrors).length) {
      const firstInvalid = Object.keys(nextErrors)[0]
      document.getElementById(firstInvalid)?.focus()
      return
    }

    const firstName = values.name.trim().split(' ')[0]
    setSuccess(
      `Thank you, ${firstName}! Your appointment request has been received. Our reception team will call you within 2 working hours to confirm your slot.`,
    )
    setValues(initialValues)
    setTouched({})
    setErrors({})
  }

  const fieldClass = (field) =>
    `form-control${showError(field) ? ' is-invalid' : ''}`

  return (
    <section className="section contact" id="contact">
      <span className="blob blob--primary contact__blob" aria-hidden="true" />

      <div className="container">
        <div className="row g-5">
          {/* ---------- Left: info ---------- */}
          <div className="col-lg-5">
            <Reveal>
              <span className="eyebrow">{contact.eyebrow}</span>
              <h2 className="section-title">{contact.title}</h2>
              <p className="section-sub">{contact.description}</p>
            </Reveal>

            <Reveal className="contact__info" delay={120}>
              {contact.info.map((item) => (
                <div className="contact__info-item" key={item.label}>
                  <span className="contact__info-icon" aria-hidden="true">
                    <i className={`bi ${item.icon}`} />
                  </span>
                  <span>
                    <small>{item.label}</small>
                    <strong>{item.value}</strong>
                  </span>
                </div>
              ))}
            </Reveal>

            <Reveal className="contact__hours" delay={200}>
              <div className="contact__hours-head">
                <i className="bi bi-clock" aria-hidden="true" />
                <span>Opening hours</span>
              </div>
              {contact.hours.map((row) => (
                <div className="contact__hours-row" key={row.days}>
                  <span>{row.days}</span>
                  <strong>{row.time}</strong>
                </div>
              ))}
              <p className="contact__hours-note mb-0">{contact.walkInNote}</p>
            </Reveal>
          </div>

          {/* ---------- Right: form ---------- */}
          <div className="col-lg-7">
            <Reveal className="contact-form" delay={120}>
              <div className="contact-form__head">
                <h3>Request an appointment</h3>
                <p className="mb-0">All fields marked with * are required.</p>
              </div>

              {success && (
                <div className="contact-success" role="alert">
                  <i className="bi bi-check-circle-fill" aria-hidden="true" />
                  <span>{success}</span>
                  <button
                    type="button"
                    className="contact-success__close"
                    onClick={() => setSuccess('')}
                    aria-label="Dismiss message"
                  >
                    <i className="bi bi-x-lg" aria-hidden="true" />
                  </button>
                </div>
              )}

              <form noValidate onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-6">
                    <label className="form-label" htmlFor="name">
                      Full name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className={fieldClass('name')}
                      placeholder="Sara Hosseini"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(showError('name'))}
                    />
                    <div className="invalid-feedback">{showError('name')}</div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="phone">
                      Phone *
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      dir="ltr"
                      className={fieldClass('phone')}
                      placeholder="0912 123 4567"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(showError('phone'))}
                    />
                    <div className="invalid-feedback">{showError('phone')}</div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="email">
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      dir="ltr"
                      className={fieldClass('email')}
                      placeholder="name@example.com"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(showError('email'))}
                    />
                    <div className="invalid-feedback">{showError('email')}</div>
                  </div>

                  <div className="col-md-6">
                    <label className="form-label" htmlFor="service">
                      Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      className={`form-select${
                        showError('service') ? ' is-invalid' : ''
                      }`}
                      value={values.service}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      aria-invalid={Boolean(showError('service'))}
                    >
                      <option value="">Choose a treatment…</option>
                      {servicesSelect.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    <div className="invalid-feedback">{showError('service')}</div>
                  </div>

                  <div className="col-12">
                    <label className="form-label" htmlFor="message">
                      Message <span className="form-label--optional">(optional)</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      className="form-control"
                      placeholder="Tell us about your skin goals, preferred days or any questions…"
                      value={values.message}
                      onChange={handleChange}
                      maxLength="600"
                    />
                  </div>

                  <div className="col-12">
                    <button type="submit" className="btn-glow contact-form__submit">
                      Book my appointment
                      <i className="bi bi-arrow-right" aria-hidden="true" />
                    </button>
                    <p className="contact-form__privacy mb-0">
                      <i className="bi bi-shield-check" aria-hidden="true" />
                      Your information stays private — we never share it with third parties.
                    </p>
                  </div>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
