import Reveal from './Reveal.jsx'
import { services, servicesIntro } from '../data/content.js'
import './Services.css'

export default function Services() {
  return (
    <section className="section services" id="services">
      <span className="blob blob--primary services__blob-a" aria-hidden="true" />
      <span className="blob blob--rose services__blob-b" aria-hidden="true" />

      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">{servicesIntro.eyebrow}</span>
          <h2 className="section-title">{servicesIntro.title}</h2>
          <p className="section-sub mb-0">{servicesIntro.description}</p>
        </Reveal>

        <div className="row g-4">
          {services.map((service, index) => (
            <div className="col-md-6 col-lg-4" key={service.title}>
              <Reveal className="service-card h-100" delay={(index % 3) * 110}>
                <span className="service-card__icon" aria-hidden="true">
                  <i className={`bi ${service.icon}`} />
                </span>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <a href="#contact" className="service-card__link">
                  Book this treatment
                  <i className="bi bi-arrow-right" aria-hidden="true" />
                </a>
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal className="services__note" delay={120}>
          <span>{servicesIntro.note}</span>
          <a href="#contact">
            {servicesIntro.noteLink}
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
