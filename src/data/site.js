// ------------------------------------------------------------
// All the editable content for the site lives in this file.
// Change text here, save, and the page updates.
// ------------------------------------------------------------

export const site = {
  name: 'Non Stop Plumbing & Heating Ltd',
  shortName: 'Non Stop',
  tagline: 'Plumbing & Heating',
  title: 'Non Stop Plumbing & Heating Ltd | Plumbing, hot water & boilers, Langley BC',
  description:
    'Reliable residential and commercial plumbing and heating in Langley and the Lower Mainland. Hot water tanks, boilers, leak repair and renovation plumbing. Rated 4.9 on HomeStars.',
  logo: '/images/logo.png',

  // PHONE NUMBER: still unknown.
  // Leave `phone` empty ('') and the "Call" buttons go to the contact form instead.
  // When you get the number, fill in both lines, for example:
  //   phone: '+16045551234',          // digits only, used for the tel: link
  //   phoneDisplay: '604-555-1234',   // how it looks on the page
  phone: '',
  phoneDisplay: 'Phone number TBC',

  area: 'Langley, BC',
  companyNumber: '751328832',

  // FORM: paste your Formspree form URL here, e.g. 'https://formspree.io/f/abcdwxyz'.
  // While it's empty, the form just shows the thank-you message and sends nothing.
  formEndpoint: '',

  backpackUrl: 'https://backpackdigitalmedia.com',
};

export const nav = [
  { href: '#services', label: 'Services' },
  { href: '#why', label: 'Why us' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#contact', label: 'Contact' },
];

// tag: 'red' (heating) or 'blue' (plumbing) — the coloured bar on each card.
export const services = [
  { t: 'Hot water tank replacement', tag: 'red', d: 'Old tank failing or too small? We remove it and install a new one, sized for your household.' },
  { t: 'Boiler maintenance', tag: 'red', d: 'Servicing and repairs that keep your heating efficient and reliable through the winter.' },
  { t: 'Leak repair', tag: 'blue', d: 'We find the source and fix it properly, before it turns into water damage.' },
  { t: 'Renovation plumbing', tag: 'blue', d: 'Rough-in and finishing for kitchen, bathroom and basement renovations.' },
  { t: 'Residential plumbing', tag: 'blue', d: 'Fixtures, drains, shut-offs and everyday repairs around the home.' },
  { t: 'Commercial plumbing', tag: 'red', d: 'Dependable service for businesses and property managers.' },
];

export const why = [
  { t: 'Honest pricing', d: 'Clear quotes up front, with no surprises on the invoice.' },
  { t: 'Warranty on our work', d: 'We stand behind every job we do.' },
  { t: 'Verified by HomeStars', d: 'Rated 4.9 out of 5 by our customers.' },
];

// REVIEWS: paste real HomeStars reviews here. While `text` is empty,
// the card shows a "review coming soon" placeholder. Example:
//   { text: 'Fixed our leak the same day...', name: 'Jane D.', place: 'Langley' },
export const reviews = [
  { text: '', name: '', place: '' },
  { text: '', name: '', place: '' },
];

// The "What do you need?" buttons on the contact form.
export const chips = ['Leak', 'Hot water tank', 'Boiler', 'Renovation', 'Commercial'];
