# Kiran R G - Personal Portfolio

A modern, animated, and fully responsive personal portfolio website built with Angular 19. This portfolio showcases professional experience, skills, education, and achievements with smooth animations and an elegant dark theme design.

## Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, and desktop)
- **Smooth Animations**: Engaging animations using Angular's built-in animation system
- **Modern UI/UX**: Clean and professional dark theme with teal accent colors
- **Interactive Navigation**: Sticky navbar with smooth scroll functionality
- **Type Writer Effect**: Dynamic text animation on the hero section
- **Timeline Layout**: Beautiful timeline visualization for work experience
- **Organized Sections**:
  - Hero section with animated typewriter effect
  - About section with professional summary
  - Experience timeline with detailed work history
  - Skills categorized by technology domains
  - Education, certifications, and achievements
  - Contact section with social links

## Technologies Used

- **Framework**: Angular 19
- **Language**: TypeScript
- **Styling**: SCSS with custom animations
- **Fonts**: Google Fonts (Poppins)
- **Build Tool**: Angular CLI

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navbar/          # Navigation bar component
│   │   ├── hero/            # Hero section with typewriter
│   │   ├── about/           # About section
│   │   ├── experience/      # Experience timeline
│   │   ├── skills/          # Skills grid
│   │   ├── education/       # Education & certifications
│   │   └── contact/         # Contact section
│   ├── app.ts               # Main app component
│   ├── app.html             # App template
│   ├── app.scss             # App styles
│   └── app.config.ts        # App configuration
├── styles.scss              # Global styles
└── index.html               # Main HTML file
```

## Installation & Setup

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd personal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:4200
```

## Build & Deployment

### Development Build
```bash
npm run build
```

### Production Build
```bash
npm run build -- --configuration production
```

The build artifacts will be stored in the `dist/` directory.

## Customization

### Update Personal Information

1. **Hero Section**: Edit `src/app/components/hero/hero.component.ts`
2. **About**: Edit `src/app/components/about/about.component.ts`
3. **Experience**: Edit `src/app/components/experience/experience.component.ts`
4. **Skills**: Edit `src/app/components/skills/skills.component.ts`
5. **Education**: Edit `src/app/components/education/education.component.ts`
6. **Contact**: Edit `src/app/components/contact/contact.component.ts`

### Update Color Theme

Colors are defined in `src/styles.scss`. Main colors used:
- Primary Background: `#0a192f` (Navy Blue)
- Accent Color: `#64ffda` (Teal)
- Text Primary: `#ccd6f6` (Light Gray)
- Text Secondary: `#8892b0` (Gray)

## Features in Detail

### Animations
- Fade-in animations on scroll
- Typewriter effect on hero section
- Hover effects on cards and links
- Smooth page transitions
- Responsive navigation menu animation

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading for optimal performance
- Optimized bundle size
- Fast page load times
- Smooth 60fps animations

## Contact

- **Email**: rgkiran.ramia@gmail.com
- **LinkedIn**: [linkedin.com/in/rgkiran](https://www.linkedin.com/in/rgkiran/)
- **GitHub**: [github.com/rgkiran](https://github.com/rgkiran)
- **Phone**: +91 8667453887

## License

This project is open source and available for personal and commercial use.

---

Built with Angular by Kiran R G
