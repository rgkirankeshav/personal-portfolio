import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface SkillCategory {
  category: string;
  skills: string[];
}

@Component({
  selector: 'app-skills',
  imports: [CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss',
})
export class SkillsComponent {
  skillCategories: SkillCategory[] = [
    {
      category: 'Frontend Development',
      skills: [
        'Angular (2-21)',
        'AngularJS',
        'TypeScript',
        'JavaScript (ES6+)',
        'HTML5',
        'CSS3',
        'SCSS',
        'RxJS',
        'NgRx',
        'Reactive & Template-Driven Forms',
        'Responsive Design',
      ],
    },
    {
      category: 'Backend Development',
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'GraphQL', 'Firebase'],
    },
    {
      category: 'Databases',
      skills: ['SQL', 'MongoDB'],
    },
    {
      category: 'Frameworks & Libraries',
      skills: ['Angular Material', 'Bootstrap', 'Tailwind CSS', 'Chart.js'],
    },
    {
      category: 'Testing',
      skills: ['Jest', 'Karma', 'Jasmine'],
    },
    {
      category: 'DevOps',
      skills: ['Git', 'GitLab', 'GitHub', 'CI/CD Pipelines', 'DigitalOcean'],
    },
    {
      category: 'Design & UX',
      skills: [
        'Figma to Angular',
        'Accessibility (WCAG)',
        'Cross-Browser Compatibility',
        'Mobile-First Design',
      ],
    },
  ];
}
