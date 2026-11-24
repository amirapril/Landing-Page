import Reveal from './Reveal.jsx'
import { hero } from '../data/content.js'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg" aria-hidden="true" />
      <div className="hero__overlay" aria-hidden="true" />

      <div className="container hero__inner">
        <div className="row">
          <div className="col-lg-8 col-xl-7">
            <Reveal className="hero__badge" delay={80}>
              <span className="hero__pulse" aria-hidden="true" />
              {hero.badge}
            </Reveal>

            <Reveal delay={180}>
              <h1 className="hero__title">
                {hero.titleA}{' '}
                <span className="text-gradient--bright">{hero.titleHighlight}</span>
                {hero.titleB}
              </h1>
            </Reveal>

            <Reveal delay={280}>
              <p className="hero__lead">{hero.description}</p>
            </Reveal>

            <Reveal className="hero__cta" delay={380}>
              <a href="#contact" className="btn-glow">
                {hero.primaryCta}
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </a>
              <a href="#services" className="btn-glass">
                {hero.secondaryCta}
              </a>
            </Reveal>

            <Reveal as="ul" className="hero__trust" delay={480}>
              {hero.trust.map((item) => (
                <li key={item.label}>
                  {item.icon && (
                    <i className={`bi ${item.icon} hero__star`} aria-hidden="true" />
                  )}
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </li>
              ))}
            </Reveal>
          </div>
        </div>
      </div>

      <Reveal className="hero__float" delay={700}>
        <span className="hero__float-icon" aria-hidden="true">
          <i className={`bi ${hero.float.icon}`} />
        </span>
        <span className="hero__float-text">
          <small>{hero.float.label}</small>
          <strong>{hero.float.value}</strong>
        </span>
        <a href="#contact" className="hero__float-go" aria-label="Book this slot">
          <i className="bi bi-arrow-right" aria-hidden="true" />
        </a>
      </Reveal>
    </section>
  )
}
