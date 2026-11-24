import Reveal from './Reveal.jsx'
import { testimonials, testimonialsIntro } from '../data/content.js'
import './Testimonials.css'

export default function Testimonials() {
  return (
    <section className="section testimonials" id="testimonials">
      <span className="blob blob--primary testimonials__blob-a" aria-hidden="true" />
      <span className="blob blob--rose testimonials__blob-b" aria-hidden="true" />

      <div className="container">
        <Reveal className="section-head section-head--center">
          <span className="eyebrow">{testimonialsIntro.eyebrow}</span>
          <h2 className="section-title">{testimonialsIntro.title}</h2>
          <p className="section-sub mb-0">{testimonialsIntro.description}</p>
        </Reveal>

        <div className="row g-4 align-items-stretch">
          {testimonials.map((item, index) => (
            <div className="col-md-6 col-lg-4" key={item.name}>
              <Reveal
                as="figure"
                className={`testimonial h-100${item.featured ? ' testimonial--featured' : ''}`}
                delay={index * 130}
              >
                <div className="testimonial__stars" aria-label={`${item.rating} out of 5 stars`}>
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <i className="bi bi-star-fill" key={i} aria-hidden="true" />
                  ))}
                </div>

                <i className="bi bi-quote testimonial__quote" aria-hidden="true" />

                <blockquote className="testimonial__text">“{item.quote}”</blockquote>

                <figcaption className="testimonial__author">
                  <span className="testimonial__avatar" aria-hidden="true">
                    {item.initials}
                  </span>
                  <span>
                    <strong>{item.name}</strong>
                    <small>{item.role}</small>
                  </span>
                </figcaption>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
