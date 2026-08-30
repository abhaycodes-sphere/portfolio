# Abhay Gond — Portfolio Website

A personal portfolio website built with plain HTML, CSS, and JavaScript — no frameworks.
The design follows a "developer workspace" theme: the navigation looks like editor
tabs (`index.html`, `about.md`, `skills.json`...), the hero types out a code-style
intro, and the certificates are laid out like a git commit log.

🔗 **Live site:** [https://abhaycodes-sphere.github.io/portfolio/ ]

## Sections

- **Home** — intro, status, quick links
- **About** — who I am
- **Education** — B.Tech CSE @ Lovely Professional University
- **Skills** — Languages & Web Technologies
- **Projects** — Car Rental Website, TikiTopple, Environmental Awareness
  Registration Portal, Flashcard AI, Automatic Hand Sanitizer
- **Certificates** — 8 certificates, commit-log style
- **Experience** — Times Foundation × LPU Community Development Project
- **Contact** — email, phone, socials, résumé download

## Tech Stack

- HTML5
- CSS3 (custom properties, Grid, Flexbox)
- Vanilla JavaScript (no frameworks/libraries beyond Font Awesome icons)

## Features

- Fully responsive (desktop / tablet / mobile with a hamburger menu)
- Active-section highlighting in the nav while scrolling
- Typing animation in the hero section
- Graceful image fallbacks — missing project/certificate images show a clean
  placeholder instead of a broken-image icon
- Certificate links check the file exists before opening, with a toast message
  if it's missing
