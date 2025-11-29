import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ContactInfo {
  icon: string;
  label: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-contact',
  imports: [CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactInfo: ContactInfo[] = [
    {
      icon: 'email',
      label: 'Email',
      value: 'rgkiran.ramia@gmail.com',
      link: 'mailto:rgkiran.ramia@gmail.com',
    },
    {
      icon: 'phone',
      label: 'Phone',
      value: '+91 8667453887',
      link: 'tel:+918667453887',
    },
    {
      icon: 'linkedin',
      label: 'LinkedIn',
      value: 'https://www.linkedin.com/in/kiran-r-g-700684146',
      link: 'https://www.linkedin.com/in/kiran-r-g-700684146',
    },
    {
      icon: 'github',
      label: 'GitHub',
      value: 'https://github.com/rgkirankeshav',
      link: 'https://github.com/rgkirankeshav',
    },
  ];

  currentYear = new Date().getFullYear();
}
