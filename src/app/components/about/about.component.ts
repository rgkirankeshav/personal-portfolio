import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  summary = `Senior Angular Developer with 4.9 years of experience building scalable, responsive, and
  enterprise-grade web applications using Angular (2–18), TypeScript, and modern UI frameworks.
  Proven expertise in developing reusable components, leading Angular migration projects,
  optimizing performance, and integrating APIs. Skilled in Agile development, CI/CD pipelines, and
  collaboration with cross-functional teams. Passionate about clean code, user experience, and
  continuous learning.`;

  highlights = [
    'Built responsive file management Web App with real-time notifications',
    'Designed 10+ modular, reusable Angular components reducing development time by 20%',
    'Optimized application performance achieving 25% reduction in page load times',
    'Mentored junior developers and established team coding standards',
    'Converted Figma designs into WCAG-compliant accessible UIs',
    'Integrated complex third-party libraries and RESTful APIs with JWT authentication'
  ];
}
