# Portfolio | Atharva

## Overview

My personal developer portfolio built with React, Three.js, and Tailwind CSS.

## Tech Stack

- **React 19** - Modern UI library
- **Three.js** - 3D graphics and animations
- **React Three Fiber** - React renderer for Three.js
- **Drei** - Useful helpers for React Three Fiber
- **GSAP** - Professional-grade animation library
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **EmailJS** - Email service integration

## Getting Started

Follow these steps to run the project locally:

```bash
npm install
npm run dev
```

The application will be available at `http://localhost:5173`

### Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_APP_EMAILJS_SERVICE_ID=your_service_id
VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

Get your EmailJS credentials from [emailjs.com](https://www.emailjs.com/)

## Features

- ✅ Interactive 3D models and animations
- ✅ Smooth scroll-based interactions with GSAP
- ✅ Responsive design optimized for all devices
- ✅ Realistic lighting and shadows
- ✅ Multi-section layout (Hero, Work, Experience, Skills, Testimonials, Contact)
- ✅ Contact form with EmailJS integration
- ✅ Optimized performance and loading times
- ✅ Modern UI/UX with micro-interactions

## Project Structure

```
├── public/
│   ├── images/      # Image assets
│   └── models/      # 3D model files
├── src/
│   ├── components/  # Reusable components
│   ├── sections/    # Page sections
│   ├── constants/   # Configuration and data
│   └── main.jsx     # Application entry point
└── index.html       # HTML template
```

## License

© 2025 Atharva. All rights reserved.
