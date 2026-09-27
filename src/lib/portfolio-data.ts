export const profile = {
  fullName: 'Muhammad Aqib Subhani',
  displayName: 'Muhammad Aqib',
  shortName: 'aqib',
  role: 'Full-stack developer & software engineering student',
  email: 'muhammadaqib.3641@gmail.com',
  github: 'https://github.com/muhammad-aqib-621',
  linkedin: 'https://www.linkedin.com/in/muhammad-aqib-94aa33301/',
  photo: '/profile.png',
} as const;

export const projects = [
  {
    slug: 'weathernow', number: '01', name: 'WeatherNow', category: 'Weather app',
    description: 'A weather app for checking local conditions at a glance.',
    visual: 'weather', href: 'https://github.com/muhammad-aqib-621/WeatherNow',
  },
  {
    slug: 'notes-application', number: '02', name: 'Notes Application', category: 'Productivity app',
    description: 'A simple notes app for writing down and keeping track of ideas.',
    visual: 'notes', href: 'https://github.com/muhammad-aqib-621/Notes-Application',
  },
  {
    slug: 'random-password-generator', number: '03', name: 'Random Password Generator', category: 'Browser utility',
    description: 'A focused utility for generating random passwords.',
    visual: 'password', href: 'https://github.com/muhammad-aqib-621/Random-Password-Generator',
  },
  {
    slug: 'digital-clock', number: '04', name: 'Digital Clock', category: 'Time utility',
    description: 'A digital clock that keeps the current time clear and easy to read.',
    visual: 'clock', href: 'https://github.com/muhammad-aqib-621/Digital-Clock',
  },
  {
    slug: 'quiz-app', number: '05', name: 'Quiz App', category: 'Interactive app',
    description: 'A quiz app project for practicing knowledge through questions.',
    visual: 'quiz', href: null,
  },
] as const;

export const skills = [
  { group: 'Frontend', items: ['JavaScript', 'React', 'HTML', 'CSS', 'Responsive design'] },
  { group: 'Development', items: ['Web applications', 'API integration', 'UI development', 'Accessibility'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'Node.js', 'TypeScript'] },
];
