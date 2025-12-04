import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class ContactComponent {
  contactInfo = [
    {
      icon: 'fas fa-envelope',
      title: 'Email',
      value: 'kefilwem23@outlook.com',
      link: 'mailto:kefilwem23@outlook.com'
    },
    {
      icon: 'fab fa-github',
      title: 'GitHub',
      value: '@Kefilwestill',
      link: 'https://github.com/Kefilwestill'
    },
    {
      icon: 'fab fa-linkedin',
      title: 'LinkedIn',
      value: 'Kefilwe Makoro',
      link: 'https://linkedin.com/in/kefilwe-makoro'
    },
    {
      icon: 'fas fa-map-marker-alt',
      title: 'Location',
      value: 'South Africa',
      link: null
    }
  ];
}
