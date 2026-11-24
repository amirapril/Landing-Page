/**
 * All website copy lives here — edit this one file to re-brand the page.
 * (Colors live in src/styles/global.css under the "design tokens" block.)
 */

export const brand = {
  name: 'Glow',
  suffix: 'Clinic',
  tagline: 'Advanced Aesthetic Care',
}

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'about', label: 'About' },
  { id: 'testimonials', label: 'Testimonials' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  badge: 'Open daily · Valiasr, Tehran',
  titleA: 'Reveal your',
  titleHighlight: 'natural glow',
  titleB: '.',
  description:
    'Glow Clinic blends medical dermatology with an artist’s eye — personalised treatments, honest advice and real results in a calm, luxurious setting.',
  primaryCta: 'Book Appointment',
  secondaryCta: 'View Services',
  trust: [
    { icon: 'bi-star-fill', value: '4.9/5', label: '620+ reviews' },
    { value: '500+', label: 'happy clients' },
    { value: '12+', label: 'years of care' },
  ],
  float: { icon: 'bi-calendar-check', label: 'Next available slot', value: 'Today · 4:30 PM' },
}

export const services = [
  {
    icon: 'bi-droplet',
    title: 'HydraFacial & Deep Cleansing',
    description:
      'A multi-step facial that cleanses, exfoliates and infuses hydration for an instant, camera-ready glow with zero downtime.',
  },
  {
    icon: 'bi-lightning-charge',
    title: 'Laser Hair Removal',
    description:
      'FDA-approved laser technology for smooth, hair-free skin — safe and effective for every skin type and tone.',
  },
  {
    icon: 'bi-heart-pulse',
    title: 'Anti-Aging Injections',
    description:
      'Botox, fillers and skin boosters applied by medical specialists for fresh, natural-looking results that still feel like you.',
  },
  {
    icon: 'bi-activity',
    title: 'Body Contouring',
    description:
      'Non-invasive slimming and skin tightening to sculpt your silhouette — no surgery, no anaesthesia, no downtime.',
  },
  {
    icon: 'bi-brightness-high',
    title: 'Skin Brightening',
    description:
      'Target pigmentation, acne scars and uneven tone with medical-grade peels, microneedling and laser therapy.',
  },
  {
    icon: 'bi-palette',
    title: 'Bridal & Event Makeup',
    description:
      'Long-lasting, photo-perfect looks designed around your dress, your style and your big day — trial session included.',
  },
]

export const servicesIntro = {
  eyebrow: 'Our services',
  title: 'Treatments designed around you',
  description:
    'From first-time facials to advanced laser programs — every service at Glow Clinic is performed by certified specialists using medical-grade technology.',
  note: 'Not sure which treatment is right for you?',
  noteLink: 'Get a free consultation',
}

export const about = {
  eyebrow: 'Why Glow Clinic',
  title: 'A decade of expertise, a personal touch.',
  description:
    'Founded in the heart of Tehran, Glow Clinic is a doctor-led aesthetic centre where medical precision meets genuine hospitality. Every journey begins with a complimentary skin analysis and a plan built around your goals — never around upselling.',
  highlights: [
    'Board-certified dermatologists & injectors',
    'FDA-approved products and devices',
    'Private, hospital-grade sterilised rooms',
    'Honest advice — only the treatments you need',
  ],
  mediaBadge: { icon: 'bi-chat-square-heart', label: 'First visit', value: 'Free skin analysis' },
  stats: [
    { value: 12, suffix: '+', label: 'Years of experience' },
    { value: 500, suffix: '+', label: 'Happy clients' },
    { value: 25, suffix: '+', label: 'Signature treatments' },
    { value: 4.9, suffix: '', decimals: 1, label: 'Average rating' },
  ],
}

export const testimonialsIntro = {
  eyebrow: 'Testimonials',
  title: 'Loved by 500+ clients',
  description: 'Real words from people who walked in with a question and left with a plan.',
}

export const testimonials = [
  {
    quote:
      'I’ve tried clinics across Tehran and Glow is on another level. My HydraFacial results were visible the same day, and the team never pushed extra treatments on me.',
    name: 'Sara Hosseini',
    role: 'HydraFacial · Verified client',
    initials: 'SH',
    rating: 5,
  },
  {
    quote:
      'The laser sessions were practically painless and every step was explained before it happened. After six visits my skin is smoother than it has ever been — worth every toman.',
    name: 'Omid Farhadi',
    role: 'Laser hair removal · Verified client',
    initials: 'OF',
    rating: 5,
    featured: true,
  },
  {
    quote:
      'They did my bridal makeup at 6 AM and it lasted through the entire wedding night. My photos came out flawless and I never once had to retouch anything.',
    name: 'Maryam Ahmadi',
    role: 'Bridal makeup · Verified client',
    initials: 'MA',
    rating: 5,
  },
]

export const contact = {
  eyebrow: 'Book an appointment',
  title: 'Let’s start your glow journey',
  description:
    'Tell us what you are looking for and we will get back to you within 2 working hours — no obligation, no pressure.',
  info: [
    { icon: 'bi-geo-alt', label: 'Visit us', value: 'No. 24, Valiasr St., Tehran, Iran' },
    { icon: 'bi-telephone', label: 'Reception', value: '+98 21 8877 6655' },
    { icon: 'bi-envelope', label: 'Email', value: 'hello@glowclinic.ir' },
  ],
  hours: [
    { days: 'Saturday – Thursday', time: '9:00 – 20:00' },
    { days: 'Friday', time: '10:00 – 16:00' },
  ],
  walkInNote: 'Walk-ins are welcome, but booking ahead guarantees your preferred slot.',
}

export const servicesSelect = [
  'HydraFacial & Deep Cleansing',
  'Laser Hair Removal',
  'Anti-Aging Injections',
  'Body Contouring',
  'Skin Brightening',
  'Bridal & Event Makeup',
  'Not sure yet — please advise',
]

export const footer = {
  description:
    'Glow Clinic is a doctor-led aesthetic centre in Tehran, combining medical expertise with genuine care since 2014.',
  quickLinksTitle: 'Quick links',
  servicesTitle: 'Treatments',
  contactTitle: 'Contact',
  servicesLinks: [
    'HydraFacial',
    'Laser Hair Removal',
    'Anti-Aging Injections',
    'Body Contouring',
    'Bridal Makeup',
  ],
  socials: [
    { icon: 'bi-instagram', label: 'Instagram', href: '#' },
    { icon: 'bi-telegram', label: 'Telegram', href: '#' },
    { icon: 'bi-whatsapp', label: 'WhatsApp', href: '#' },
    { icon: 'bi-linkedin', label: 'LinkedIn', href: '#' },
  ],
  legalLinks: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
}
