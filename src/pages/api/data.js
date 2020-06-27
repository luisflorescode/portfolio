export default (req, res) => {
  res.statusCode = 200;
  res.json({
    hero: {
      background: '/static/hero.jpg',
    },
    about: {
      photo:
        'https://res.cloudinary.com/luisfloresdev/image/upload/v1592451444/luisfloresdev.com/profile_a0wlcc.webp',
    },
    skills: [
      {
        name: 'HTML 5',
        logo:
          'https://res.cloudinary.com/luisfloresdev/image/upload/v1592449604/luisfloresdev.com/html_q0aubh.webp',
      },
      {
        name: 'CSS 3',
        logo:
          'https://res.cloudinary.com/luisfloresdev/image/upload/v1592449710/luisfloresdev.com/css_t1p5xt.webp',
      },
      {
        name: 'SASS',
        logo:
          'https://res.cloudinary.com/luisfloresdev/image/upload/v1592449850/luisfloresdev.com/sass_nlr39d.webp',
      },
      {
        name: 'JavaScript',
        logo:
          'https://res.cloudinary.com/luisfloresdev/image/upload/v1592449970/luisfloresdev.com/javascript_tyb6gy.webp',
      },
      {
        name: 'React',
        logo:
          'https://res.cloudinary.com/luisfloresdev/image/upload/v1592450225/luisfloresdev.com/react_vtkmam.webp',
      },
      {
        name: 'Angular',
        logo:
          'https://res.cloudinary.com/luisfloresdev/image/upload/v1592450332/luisfloresdev.com/angular_c4lwst.webp',
      },
      {
        name: 'Redux',
        logo:
          'https://res.cloudinary.com/luisfloresdev/image/upload/v1592450434/luisfloresdev.com/redux_f2h1ip.webp',
      },
      {
        name: 'Git',
        logo:
          'https://res.cloudinary.com/luisfloresdev/image/upload/v1592450506/luisfloresdev.com/git_ycp2da.webp',
      },
    ],
    projects: [
      {
        name: 'Portafolio',
        screenshot: 'https://i.imgur.com/OBrxF3I.png',
        url: 'https://luisfloresdev.com',
      },
      {
        name: 'We Love Photos',
        screenshot: 'https://i.imgur.com/nhqhRTn.jpg',
        url: 'https://welovephotos-94b99.firebaseapp.com',
      },
      {
        name: 'Ride Me',
        screenshot: 'https://i.imgur.com/XB385SD.png',
        url: 'https://ridemeapp-a8380.web.app',
      },
      {
        name: "Rubik's Cube Game",
        screenshot: 'https://i.imgur.com/Idpizrp.png',
        url: 'https://rubikscubegame-b2b18.web.app',
      },
    ],
    communities: [
      {
        name: 'Nunca pares de...',
        rol: 'Organizador',
        photo: 'https://i.imgur.com/sjw7Mxz.jpg',
        url: 'https://nuncaparesde.eventbrite.com',
      },
      {
        name: 'Platzi Developer Group',
        rol: 'Asistente',
        photo: 'https://i.imgur.com/aWyPf3G.jpg',
        url: 'https://www.meetup.com/es/platzi-mexico-city',
      },
      {
        name: 'GDG Cloud MX',
        rol: 'Asistente',
        photo: 'https://i.imgur.com/eoQvyrP.png',
        url: 'https://www.meetup.com/es/cloudmx',
      },
    ],
  });
};
