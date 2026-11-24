import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { about } from '../data/content.js'
import './About.css'

/** Animated counter that starts when scrolled into view. */
function Stat({ value, suffix = '', decimals = 0, label }) {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const finalValue = () => setDisplay(value)

    const prefersReduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      finalValue()
      return
    }

    let frame
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()

        const duration = 1400
        const start = performance.now()

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - progress, 3)
          setDisplay(value * eased)
          if (progress < 1) frame = requestAnimationFrame(tick)
        }

        frame = requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )

    observer.observe(el)
    return () => {
      observer.disconnect()
      if (frame) cancelAnimationFrame(frame)
    }
  }, [value])

  return (
    <div className="stat" ref={ref}>
      <span className="stat__value">
        {display.toFixed(decimals)}
        {suffix}
      </span>
      <span className="stat__label">{label}</span>
    </div>
  )
}

export default function About() {
  return (
    <section className="section section--alt about" id="about">
      <span className="blob blob--primary about__blob" aria-hidden="true" />

      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <Reveal className="about-media">
              <span className="about-media__frame" aria-hidden="true" />
              <span className="about-media__photo" role="img" aria-label="Relaxing facial treatment at Glow Clinic" />

              <a href="#contact" className="about-media__badge">
                <span className="about-media__badge-icon" aria-hidden="true">
                  <i className={`bi ${about.mediaBadge.icon}`} />
                </span>
                <span>
                  <small>{about.mediaBadge.label}</small>
                  <strong>{about.mediaBadge.value}</strong>
                </span>
                <i className="bi bi-arrow-right about-media__badge-go" aria-hidden="true" />
              </a>
            </Reveal>
          </div>

          <div className="col-lg-6">
            <Reveal>
              <span className="eyebrow">{about.eyebrow}</span>
              <h2 className="section-title">{about.title}</h2>
              <p className="section-sub">{about.description}</p>
            </Reveal>

            <Reveal as="ul" className="about-list" delay={120}>
              {about.highlights.map((item) => (
                <li key={item}>
                  <i className="bi bi-check-circle-fill" aria-hidden="true" />
                  <span>{item}</span>
                </li>
              ))}
            </Reveal>

            <div className="about-stats">
              {about.stats.map((stat, index) => (
                <Reveal key={stat.label} delay={index * 100}>
                  <Stat {...stat} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
