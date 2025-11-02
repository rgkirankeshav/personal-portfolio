import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Experience {
  role: string;
  company: string;
  period: string;
  location: string;
  achievements: string[];
}

@Component({
  selector: 'app-experience',
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      role: 'Software Development Engineer III – Frontend',
      company: 'Irish Taylor & Co',
      period: 'Jul 2023 – Present',
      location: 'Remote, India',
      achievements: [
        'Developed a fully responsive file management Web App using Angular 16, Bootstrap, and Angular Material, implementing WebSocket-based real-time notifications to enhance user engagement.',
        'Designed and implemented 10+ modular, reusable Angular components and services with state management, robust form validations, and advanced routing, reducing feature development time by 20%.',
        'Converted Figma designs into mobile-first, responsive UIs, ensuring cross-browser compatibility and WCAG-compliant accessibility for high-traffic applications.',
        'Integrated complex third-party libraries and SDKs (e.g., Stripe, Google Maps API) and RESTful APIs with JWT-based authentication, enforcing Angular security best practices.',
        'Optimized application performance using lazy loading, change detection, and code splitting, achieving a 25% reduction in page load times for client projects.',
        'Mentored junior developers, conducted code reviews, and established team coding standards in Agile sprints, improving code maintainability and team efficiency by 15%.'
      ]
    },
    {
      role: 'Software Engineer – Frontend',
      company: 'Apptivo',
      period: 'Dec 2020 – Jul 2023',
      location: 'Madurai, India',
      achievements: [
        'Built reusable UI components to improve scalability and maintainability across apps.',
        'Debugged and resolved UI issues, implemented validations, and enhanced user experience.',
        'Worked with third-party libraries including Underscore.js, MJML, Chart.js, and jQuery.',
        'Followed WCAG standards to deliver accessible UI for high-traffic platforms.',
        'Used GitLab for version control and Grunt.js for build processes.'
      ]
    }
  ];
}
