export default (req, res) => {
  res.statusCode = 200;
  res.json({
    hero: {
      background: '/static/hero.jpg',
    },
    about: {
      photo: '/static/about.jpg',
    },
    skills: [
      {
        name: 'HTML 5',
        logo: '/static/html5.png',
      },
      {
        name: 'CSS 3',
        logo: '/static/css3.png',
      },
      {
        name: 'SASS',
        logo: '/static/sass.png',
      },
      {
        name: 'JavaScript',
        logo: '/static/javascript.png',
      },
      {
        name: 'React',
        logo: '/static/react.png',
      },
      {
        name: 'Angular',
        logo: '/static/angular.png',
      },
      {
        name: 'Redux',
        logo: '/static/redux.png',
      },
      {
        name: 'Git',
        logo: '/static/git.png',
      },
    ],
    projects: [
      {
        name: 'Portafolio',
        screenshot: '/static/portfolio.jpg',
        url: 'https://luisfloresdev.com',
      },
      {
        name: 'We Love Photos',
        screenshot: '/static/we-love-photos.jpg',
        url: 'https://welovephotos-94b99.firebaseapp.com',
      },
      {
        name: 'Ride Me',
        screenshot: '/static/ride-me.jpg',
        url: 'https://ridemeapp-a8380.web.app',
      },
      {
        name: "Rubik's Cube Game",
        screenshot: '/static/rubik-cube.jpg',
        url: 'https://rubikscubegame-b2b18.web.app',
      },
    ],
    communities: [
      {
        name: 'Nunca pares de...',
        rol: 'Organizador',
        photo: '/static/nunca-pares-de.jpg',
        url: 'https://nuncaparesde.eventbrite.com',
      },
      {
        name: 'Platzi Developer Group',
        rol: 'Asistente',
        photo: '/static/platzi-developer-group.jpg',
        url: 'https://www.meetup.com/es/platzi-mexico-city',
      },
      {
        name: 'GDG Cloud MX',
        rol: 'Asistente',
        photo: '/static/gdg-cloud-mx.jpg',
        url: 'https://www.meetup.com/es/cloudmx',
      },
    ],
  });
};
