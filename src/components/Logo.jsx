import { brand } from '../data/content.js'

export default function Logo({ href = '#home' }) {
  return (
    <a className="logo" href={href}>
      <span className="logo__mark" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" focusable="false">
          <path d="M12 2.5c.7 4.6 3 7.4 7.8 8.4-4.8 1-7.1 3.8-7.8 8.4-.7-4.6-3-7.4-7.8-8.4 4.8-1 7.1-3.8 7.8-8.4Z" />
        </svg>
      </span>
      <span className="logo__text">
        {brand.name}
        <span>{brand.suffix}</span>
      </span>
    </a>
  )
}
