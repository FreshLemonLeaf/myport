// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

function setTheme(theme) {
  if (theme === 'dark') document.documentElement.setAttribute('data-theme','dark');
  else document.documentElement.setAttribute('data-theme','light');
  localStorage.setItem('theme', theme);
}

function getTheme() {
  return localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');
}

themeToggle.addEventListener('click', () => {
  const currentTheme = getTheme();
  setTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

setTheme(getTheme());

// Projects
const projects = [
  {
    title: "Lemonwave Music Player",
    desc: "A playful, web-based music player with unique visualizations and Spotify API integration. Supports playlists, themes, and cool animations.",
    links: [
      {name: "Live Demo", url: "#"},
      {name: "GitHub", url: "#"}
    ]
  },
  {
    title: "Game Stat Tracker",
    desc: "Track your Epic Games stats with a modern dashboard. Includes Steam/Epic login, charts, and achievements. Built with React & API integrations.",
    links: [
      {name: "GitHub", url: "#"}
    ]
  },
  {
    title: "Lemon's Portfolio Template",
    desc: "A free, open source portfolio template designed for creatives and devs. Responsive, customizable, and lightweight.",
    links: [
      {name: "Live", url: "#"},
      {name: "GitHub", url: "#"}
    ]
  },
  {
    title: "YouTube Mini Studio",
    desc: "A minimal YouTube video organizer and analytics dashboard. Sort, tag, and analyze your content. OAuth login, dark mode.",
    links: [
      {name: "GitHub", url: "#"}
    ]
  },
  {
    title: "Melody Mixer",
    desc: "Web toy to remix your favorite tracks or sounds, export as mp3. Drag & drop interface, beat sync, and shareable mixes.",
    links: [
      {name: "Demo", url: "#"},
      {name: "GitHub", url: "#"}
    ]
  }
];

const grid = document.getElementById('projects-grid');
projects.forEach(proj => {
  const card = document.createElement('div');
  card.className = 'project-card';
  card.innerHTML = `
    <div class="project-title">${proj.title}</div>
    <div class="project-desc">${proj.desc}</div>
    <div class="project-links">
      ${proj.links.map(link => `<a href="${link.url}" target="_blank">${link.name}</a>`).join('')}
    </div>
  `;
  grid.appendChild(card);
});
