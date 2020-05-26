import Mock from "../mock";

const database = {
  information: {
    name: 'Abdoul Ouakil Kanazoe',
    aboutContent: "I am a Full Stack developer. I can provide clean code and pixel perfect design. I also make website more & more interactive with web animations.",
    age: 26,
    phone: '9292176681',
    nationality: 'American',
    language: 'English, French',
    email: 'kaoua121@gmail.com',
    address: '1351 clay ave, Bronx, NY 10456',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/abd.kana.96',
      hackerranck: 'https://www.hackerrank.com/kaoua121',
      linkedin: 'https://www.linkedin.com/in/abdoul-ouakil-kanazoe-9b7037144/',
      leetcode: 'https://leetcode.com/aliensmart/',
      github: 'https://github.com/aliensmart',
      instagram:"https://www.instagram.com/letslearncodes/",
      youtube: "https://www.youtube.com/channel/UCx4LVXKa_wh_JOfIfEb5ogQ/featured?view_as=subscriber"
    },
    brandImage: '/images/logo.png',
    aboutImage: '/images/profile_2.jpg',
    aboutImageLg: '/images/profile_lg.jpg',
    cvfile: '/files/Junior_software_engeneer.pdf'
  },
  services: [
    {
      title: "Designer",
      icon: 'color-pallet',
      details: "With my skills in adobe Photoshop and adobe Illustrator I can provide you great and clean web design and graphic design"
    },
    {
      title: "Developer",
      icon: 'code',
      details: "Will provide you clean website after the design and depending of your budget I can provide you the best website for your business"
    },
    {
      title: "Photographer",
      icon: 'camera',
      details: "Photography was a hobby for me until I got into freelancing in 2018 until today, You can get custom photos for your website "
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "PYTHON",
      years: "< 1 year"
    },
    {
      title: "Django",
      years: "< 1 year"
    },
    {
      title: "FLASK",
      years: "< 1 year"
    },
    {
      title: "CSS3",
      years: "3 years"
    },
    {
      title: "JAVASCRIPT",
      years: "3 years"
    },
    {
      title: "JQUERY",
      years: "2 years"
    },
    {
      title: "ReactJS",
      years: "< 1 year"
    },
    {
      title: "ADOBE PHOTOSHOP",
      years: "3 years"
    },
    {
      title: "ADOBE ILLUSTRATOR",
      years: "3 years"
    },
    {
      title: "ADOBE LIGHTROOM",
      years: "3 years"
    },
    {
      title: "HTML5",
      years: "3 years"
    },
    {
      title: "SQLITE3",
      years: "< 1 year"
    },
    {
      title: "MYSQL",
      years: "1.5 year"
    },
    {
      title: "PHP",
      years: "1.5 year"
    },
    {
      title: "WORDPRESS",
      years: "2 years"
    },
    {
      title: "SASS",
      years: "2 years"
    },
    {
      title: "BOOTSTRAP",
      years: "< 1 year"
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Kid Photo",
      subtitle: "This picture was taken in summer 2019 at kids party",
      imageUrl: "/images/kid.png",
      largeImageUrl: ["/images/kid_lg.jpg"]
    },
    {
      id: 2,
      title: "End of Year Flyer",
      subtitle: "Gref-eclat end of year Diner Gala party.",
      imageUrl: "/images/end_of_year.png",
      largeImageUrl: [
        "/images/end_of_year_lg.png"
      ]
    },
    {
      id: 3,
      title: "Raasse website",
      subtitle: "This multivendor ecommerce website was built with Wordpress.",
      imageUrl: "/images/raasse.jpg",
      url: 'https://raasse.com/'
    },
    {
      id: 4,
      title: "A Summer Photo",
      subtitle: "This Photo was taken in a BBQ in Summer 2019",
      imageUrl: "/images/man.png",
      largeImageUrl: ["/images/man_lg.jpg"]
    },
    {
      id: 5,
      title: "Alienmoore website",
      subtitle: "This is a personal website for building wordpress websites service",
      imageUrl: "/images/alienmoore.png",
      url: "https://alienmoore.com/"
    },
    {
      id: 6,
      title: "Valentin's Day Flyer",
      subtitle: "This is a flyer for valentins day",
      imageUrl: "/images/valentin.png",
      largeImageUrl: ["/images/valentin_lg.png"]
    }
  ],
  certifications: [
    {
      id: 1,
      title: "Algoritm Trading Using Python",
      subtitle: "10 hours of Algorithmic Trading: Backtesting, Optimize & Automate in Python on Udemy",
      largeImageUrl: ["/images/certificates/algo_trading2.jpg"]
    },
    {
      id: 2,
      title: "2nd Algorithm Trading With Python",
      subtitle: "17 hours of Algorithmic Trading & Quantitative analysis using Python on Udemy",
      largeImageUrl: ["/images/certificates/Algorithm_trading.jpg"]
    },
    {
      id: 3,
      title: "Clickbank Facebook Ads",
      subtitle: "3.5 Hours of Clickbank Success With Facebook Ads Super Strategy On Udemy",
      largeImageUrl: ["/images/certificates/clickbank.jpg"]
    },
    {
      id: 4,
      title: "CSS & Sass",
      subtitle: "28 hours of  Advanced Css And Sass: Flexbox, Grid, Animations and More On Udemy",
      largeImageUrl: ["/images/certificates/css_sass.jpg"]
    },
    {
      id: 5,
      title: "Python & Django Fullstack",
      subtitle: "32 Hours of Python and Django Full Stack Web Developer Bootcamp On Udemy",
      largeImageUrl: ["/images/certificates/django.jpg"]

    },
    {
      id: 6,
      title: "Ebay Dropsipping",
      subtitle: "6.5 Hours of Ebay Drop Shipping Guide With No Inventory - Work From Home On Udemy",
      largeImageUrl: ["/images/certificates/ebay_dropship.jpg"]
    },
    {
      id: 7,
      title: "Ethical Hacking",
      subtitle: "14 Hours of Learn Ethical Hacking From Scratch On Udemy",
      largeImageUrl: ["/images/certificates/ethical_hacking.jpg"]

    },
    {
      id: 8,
      title: "Forex Trading",
      subtitle: "5.5 Hours Of Forex Trading A-Z On Udemy",
      largeImageUrl: ["/images/certificates/forex_trading.jpg"]

    },
    {
      id: 9,
      title: "Hackers Exposed",
      subtitle: "12 Hours Of The Complete Cyber Security Course: Hackers Exposed!",
      largeImageUrl: ["/images/certificates/hacker_exposed.jpg"]

    },
    {
      id: 10,
      title: "Javascript Weird Part",
      subtitle: "11.5 Hours of Javascript: Understanding The Weird Parts On Udemy",
      largeImageUrl: ["/images/certificates/javascript.jpg"]

    },
    {
      id: 11,
      title: "Javascript",
      subtitle: "28 Hours Of Complete Javascript Courses 2019 On Udemy",
      largeImageUrl: ["/images/certificates/javascript2.jpg"]

    },
    {
      id: 12,
      title: "Machine Learning",
      subtitle: "Machine Learning A-Z: Hands On Python & R In Data Science",
      largeImageUrl: ["/images/certificates/machin_learning.jpg"]

    },
    {
      id: 13,
      title: "Alienmoore website",
      subtitle: "This is a flyer for valentins day",
      largeImageUrl: ["/images/certificates/php_ecommerce.jpg"]

    },
    {
      id: 14,
      title: "Alienmoore website",
      subtitle: "This is a flyer for valentins day",
      largeImageUrl: ["/images/certificates/php_mysql.jpg"]

    },
    {
      id: 15,
      title: "Alienmoore website",
      subtitle: "This is a flyer for valentins day",
      largeImageUrl: ["/images/certificates/php.jpg"]

    },
    {
      id: 16,
      title: "Alienmoore website",
      subtitle: "This is a flyer for valentins day",
      largeImageUrl: ["/images/certificates/social_media_marketing.jpg"]

    },
    {
      id: 17,
      title: "Alienmoore website",
      subtitle: "This is a flyer for valentins day",
      largeImageUrl: ["/images/certificates/ui.jpg"]

    },
    {
      id: 18,
      title: "Alienmoore website",
      subtitle: "This is a flyer for valentins day",
      largeImageUrl: ["/images/certificates/wordpress_plugins_themes_dev.jpg"]

    },
    {
      id: 19,
      title: "Alienmoore website",
      subtitle: "This is a flyer for valentins day",
      largeImageUrl: ["/images/certificates/wordpress_theme.jpg"]

    },
    {
      id: 20,
      title: "Alienmoore website",
      subtitle: "This is a flyer for valentins day",
      largeImageUrl: ["/images/certificates/wordpress_website.jpg"]

    }
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "10/17/2019 - 11/06/2019",
        position: "Software Engineer",
        company: "Kpass",
        details: "A password manager like lastpass built using Python for the backend with libraries like Flask, Cryptography, Bcrypt, re, Sqlite3, os, for the back-end and React.js for the front-end; I've also built a chrome extension with HTML5, CSS3, and Javascript for user to easily save theire password without going to the main website.",
        link:"#"
      },
      {
        id: 2,
        year: "11/07/2019 - 11/19/2019",
        position: "Software Engineer",
        company: "ChainMd",
        details: "This is part of my project on Byte which is a web-app that help patients and hospital providers to share file securely using Blochain Technology. This app has been built with Python and its libraries(Flask, Sqlite3, Os, Savoir) for the back-end and the front-end Has been done with React.js.",
        link:"#"
      },
      {
        id: 3,
        year: "2014 - 1016",
        position: "Wordpress Developer",
        company: "Raasse",
        details: "A multivendor E-commerce built with Wordpress and customized using my skills in PHP, CSS3, and Javascript.",
        link:"https://raasse.com/"
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "09/2019 - 11/2019",
        graduation: "Python Fullstack Software Engineer(Python & React.js)",
        university: "Byte Academy",
        details: "After couple month of hard work and learning I've been graduated in byte academy(USA - New York) and I was able to build two(2) fullstack app "
      },
      {
        id: 2,
        year: "2016 - Present",
        graduation: "Certifications",
        university: "Udemy",
        details: "Everyday Is a new day to learn new things so udemy has been one of my best mentor in my online training journey"
      },
      {
        id: 3,
        year: "2012 - 2015",
        graduation: "High School Diploma",
        university: "Lycee Professional Regional du Centre (LPRC)",
        details: "I did My high school in a country call Burkina Faso, And graduated from my High school Diploma on Electronic Automobile in my home Town call Ouagadougou "
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: "React new version is coming!",
      imageUrl: "/images/blog-image-1.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 2,
      title: "More about react hooks",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "04 December 2019"
    },
    {
      id: 3,
      title: "Next generation javascript learning source",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "05 December 2019"
    },
    {
      id: 4,
      title: "Free tutorial downloading link.",
      imageUrl: "/images/blog-image-2.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "06 December 2019"
    },
    {
      id: 5,
      title: "Get 2500 free mockup for design.",
      youtubeUrl: "TKnufs85hXk",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "08 December 2019"
    },
    {
      id: 6,
      title: "React vs Vue vs Angular, what is best?",
      vimeoUrl: "23534361",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "10 December 2019"
    },
    {
      id: 7,
      title: "Web design typography & spacing.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },
    {
      id: 8,
      title: "React new version is coming with a great features.",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    }
  ],
  contactInfo: {
    phoneNumbers: ['+1-929-217-6681'],
    emailAddress: ['kaoua121@gmail.com'],
    address: "1351 clay ave, Bronx, NY 10456"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/certifications").reply(config => {
  const response = database.certifications;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});