import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  percentage: string;
}

interface Certification {
  name: string;
  issuer: string;
}

interface Achievement {
  title: string;
  description: string;
}

@Component({
  selector: 'app-education',
  imports: [CommonModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  education: Education = {
    degree: 'B.E - ECE',
    institution: 'Anna University',
    period: 'Jan 2016 – Dec 2020',
    location: 'Tamil Nadu, India',
    percentage: '84%'
  };

  certifications: Certification[] = [
    {
      name: 'JavaScript Algorithms and Data Structures',
      issuer: 'Freecodecamp'
    },
    {
      name: 'Angular Complete Guide',
      issuer: 'Udemy'
    },
    {
      name: 'NodeJS - The Complete Guide (Express, MVC, Rest API, GraphQL)',
      issuer: 'Udemy'
    },
    {
      name: 'Google AI Essentials',
      issuer: 'Google'
    }
  ];

  achievements: Achievement[] = [
    {
      title: 'Winner - X-Machina AI Software Development Hackathon',
      description: 'Developed a rapid ATS Resume Scanner application using the MERN stack, leveraging AI-powered tools to streamline functionality and significantly accelerate development.'
    }
  ];
}
