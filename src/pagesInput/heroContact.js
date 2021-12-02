const allContactData = {
  github: {
    title: 'GitHub',
    text: 'jwpf100',
    faIcon: ['fab', 'github'],
    href: 'https://github.com/jwpf100',
  },
  email: {
    title: 'Email',
    text: 'joseph.fletcher100@gmail.com',
    faIcon: ['far', 'envelope'],
    faIconAlt: ['fas', 'envelope'],
    classNameSpecific: 'text-small',
    href:
      'mailto:joseph.fletcher100@gmail.com?subject=Wed Developer Enquiry - Portfolio', //
  },
  linkedIn: {
    title: 'LinkedIn',
    text: 'Joseph Fletcher',
    faIcon: ['fab', 'linkedin'], // OR linkedin-in
    faIconAlt: ['fab', 'linkedin-in'], // OR linkedin-in
    href: 'https://www.linkedin.com/in/joseph-fletcher-25a69818/',
  },
  wordPress: {
    title: 'WordPress',
    text: 'Lessons Learned',
    faIcon: ['fab', 'wordpress-simple'], // OR linkedin-in
    // faIconAlt: ['fab', 'wordpress'], // OR linkedin-in
    href: 'http://blog.josephfletcher.co.uk',
  },
  location: {
    title: 'Location',
    text: 'London, UK',
    faIcon: ['far', 'compass'], //
  },
  phone: {
    title: 'Phone',
    text: '+44 7957 450 010',
    faIcon: ['fas', 'phone'],
    href: 'tel:+44-7957-450-010',
    phone: true, //
  },
}

export const footerContact = [
  allContactData.email,
  allContactData.phone,
  allContactData.github,
  allContactData.linkedIn,
  allContactData.wordPress,
]
export const mainContact = [
  allContactData.location,
  allContactData.email,
  allContactData.phone,
  allContactData.linkedIn,
]

export const heroContact = [
  allContactData.github,
  allContactData.email,
  allContactData.linkedIn,
  allContactData.wordPress,
]
