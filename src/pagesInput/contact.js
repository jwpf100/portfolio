const inputData = {
  contactArray: [
    {
      title: 'Location',
      text: 'London, UK',
      faIcon: ['far', 'compass'], //
    },
    {
      title: 'Phone',
      text: '+44 7957 450 010',
      faIcon: ['fas', 'phone'],
      href: 'tel:+44-7957-450-010',
      phone: true, //
    },
    {
      title: 'Email',
      text: 'joseph.fletcher100@gmail.com',
      faIcon: ['far', 'envelope'],
      classNameSpecific: 'text-small',
      href:
        'mailto:joseph.fletcher100@gmail.com?subject=Wed Developer Enquiry - Portfolio', //
    },
    {
      title: 'LinkedIn',
      text: 'Joseph Fletcher',
      faIcon: ['fab', 'linkedin'], // OR linkedin-in
      href: 'https://www.linkedin.com/in/joseph-fletcher-25a69818/',
    },
  ],
}

export default inputData
