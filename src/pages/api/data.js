export default (req, res) => {
  res.statusCode = 200;
  res.json({
    hero: {
      background: 'https://i.imgur.com/fZHMjHe.jpg',
    },
    about: {
      photo: 'https://i.imgur.com/BalVIvh.jpg',
    },
    skills: [
      { name: 'HTML 5', logo: 'https://i.imgur.com/v3GvsuD.png' },
      { name: 'CSS 3', logo: 'https://i.imgur.com/lo8jpSM.png' },
      {
        name: 'SASS',
        logo: 'https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg',
      },
      { name: 'JavaScript', logo: 'https://i.imgur.com/BqJjbcu.jpg' },
      {
        name: 'React',
        logo:
          'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K',
      },
      {
        name: 'Angular',
        logo: 'https://angular.io/assets/images/logos/angular/angular.svg',
      },
      {
        name: 'Git',
        logo: 'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png',
      },
      { name: 'Redux', logo: 'https://i.imgur.com/UW122uR.png' },
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
