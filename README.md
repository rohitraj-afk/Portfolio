# Rohit Raj Singh - Portfolio Website

A modern, futuristic portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

✨ **Modern Design**
- Dark theme with subtle futuristic touches
- Glassmorphism & gradient accents
- Smooth animations and transitions
- Fully responsive (mobile-first)

🎨 **Interactive Components**
- Dark/Light mode toggle with system preference detection
- Responsive navbar with smooth scroll
- Animated sections with staggered animations
- Project filtering system
- Contact form with EmailJS integration
- Resume download functionality

⚡ **Performance**
- Vite for fast development & build
- Optimized animations with Framer Motion
- Lazy-loaded sections
- SEO-friendly structure

## Tech Stack

- **Frontend**: React 18
- **Build**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Email**: EmailJS

## Folder Structure

```
portfolio-site/
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── context/             # React Context (Theme)
│   │   └── ThemeContext.jsx
│   ├── utils/               # Helper functions
│   │   └── helpers.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
└── vite.config.js
```

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure EmailJS (Optional)
1. Create a `.env` file in the project root.
2. Copy values from `.env.example` and replace with your EmailJS credentials:

```bash
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

3. Restart the dev server after updating env values.

### 3. Customize Your Content
- Update component content with your information
- Replace social links with your profiles
- Add your projects to Projects.jsx

## Running the Project

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Build
```bash
npm run preview
```

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Go to Vercel.com
3. Import repository & deploy

### Netlify
```bash
npm run build
# Upload dist folder to Netlify
```

## License

Open source - feel free to customize for your portfolio!
