const inputData = {
  projectArray: [
    {
      number: 0,
      title: 'Essential Coaching',
      lead: 'Responsive website created for a local business.',
      text: [
        'A business website designed to provide information, contact details and booking options for Essential Coaching, a coaching business.',
        'Currently in development as a redesign of the original project.  The main aim is to deliver a faster user experience and reduce monthly running costs.',
      ],
      bullets: [
        'Built with Gatsby 3.0 for React',
        'Built using Component-Oriented Programming',
        'Styled using Bootstrap, Emotion and SASS',
        'Mailchimp and Calendly integration',
        'Continuous integration with Github Actions',
        'Storybook is used for visual testing',
        'Hosted on Amazon S3 with CloudFront CDN',
      ],
      links: [
        {
          title: 'Live site (development)',
          link: 'https://jwpf100-test-domain.com/',
        },
        {
          title: 'github repository',
          link: 'https://github.com/jwpf100/essential-coaching-gatsby',
        },
      ],
    },
    {
      number: 1,
      title: 'Essential Coaching - Prototype',
      lead: 'Responsive site created with Bootstrap and Express',
      text: [
        'The first release of Essential Coaching. Originally designed using Node/Express to handle routing and hosted on Heroku.  Has received extremely positive feedback from the business owner and continues to drive new customers.',
      ],
      bullets: [
        'Templated with Ejs',
        'Node/Express backend',
        'Styled using Bootstrap and SASS',
        'Integrated with Google Analytics, MailChimp and Calendly',
        'Custom webpack build',
        'Hosted on Heroku',
      ],
      links: [
        { title: 'Live Site', link: 'https://www.essentialcoaching.co.uk/' },
        {
          title: 'github Repository',
          link: 'https://github.com/jwpf100/essential-coaching-app',
        },
      ],
    },
    {
      number: 2,
      title: 'React Weather App',
      lead: 'React App allowing users to search weather forecasts',
      text: [
        'Users can search for current weather and 7 day forecast by city, country, postcode and lat/lon.  Searches can be saved to allow easy access upon returning to the app.',
      ],
      bullets: [
        'Built with React',
        'Styled with Bootstrap, SCSS and Styled Components',
        'Hosted on AWS EC2 server',
        'Consumes weatherbit.io API',
        'Browser localstorage used to store saved searches',
      ],
      links: [
        {
          title: 'Live Site',
          link: 'https://josephfletcher.co.uk/weather-app/',
        },
        {
          title: 'github Repository',
          link: 'https://github.com/jwpf100/react-weather-app',
        },
      ],
    },
    {
      number: 3,
      title: 'React Daily Question',
      lead: 'React site displaying a random React interview question',
      text: [
        'Fetches a MD document from a github repository containing an unspecified number of React questions.  Then parses the data to return a random question when the page is launched.',
      ],
      bullets: [
        'Built with React',
        'Styled with Styled Components',
        'Hosted on AWS EC2 server',
      ],
      links: [
        {
          title: 'Live Site',
          link: 'https://josephfletcher.co.uk/react-daily-question/',
        },
        {
          title: 'github Repository',
          link: 'https://github.com/jwpf100/react-daily-question',
        },
      ],
    },
    {
      number: 4,
      title: 'React Blog Front End',
      lead: 'Blogging app front end created with React',
      text: [
        'Designed as an addition to the Essential Coaching App.',
        'The React app consumes data from my node API containing an unspecified number of blog posts.  The main page is a summary of all blog posts, each can be clicked through to see the individual blog post in detail.',
        'Note the navbar is not functional and is included as decoration.',
      ],
      bullets: [
        'Built with React',
        'Styled with Bootstrap and SCSS',
        'Fetches data from API using React hook',
        'Hosted on AWS EC2 server',
      ],
      links: [
        {
          title: 'Live Site',
          link: 'https://josephfletcher.co.uk/blog/',
        },
        {
          title: 'github Repository',
          link: 'https://github.com/jwpf100/node-blog-frontend',
        },
      ],
    },
    {
      number: 5,
      title: 'Blog Back End',
      lead: 'Blogging app back end created with Node, Express and MongoDB',
      text: [
        'The back end allows users to Create, Read, Update and Destroy rich text blogposts.  It also serves as an API, outputting all data in json format for the front end to consume.  A rich text editor has been integrated to allow styling of body text.',
      ],
      bullets: [
        'Built with Node/Express',
        'Templated with Pug',
        'Storage with MongoDB',
        'Styled with Bootstrap',
        'Quill.js RTE integration to allow rich text editing',
        'Acts as API for front end',
        'Hosted on AWS EC2 server',
      ],
      links: [
        {
          title: 'github Repository',
          link: 'https://github.com/jwpf100/node-blog',
        },
      ],
    },
    {
      number: 6,
      title: 'Blackjack',
      lead: 'Blackjack game created using vanilla CSS, HTML and JS.',
      text: [
        'Play Blackjack against the computer.  Game keeps track of score and number of games won.  Responsive design.',
      ],
      bullets: [],
      links: [
        {
          title: 'Live Site',
          link: 'https://josephfletcher.co.uk/blackjack/',
        },
        {
          title: 'github Repository',
          link: 'https://github.com/jwpf100/blackjack',
        },
      ],
    },
    {
      number: 7,
      title: 'Portfolio v1',
      lead: 'Original single page portfolio.',
      text: ['Made in vanilla HTML, CSS and JS.'],
      bullets: [],
      links: [
        {
          title: 'Live Site',
          link: 'https://josephfletcher.co.uk/portfolio-v1',
        },
        {
          title: 'github Repository',
          link: 'https://github.com/jwpf100/ga-portfolio',
        },
      ],
    },
  ],
}

export default inputData
