import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
  name = 'Kefilwe Makoro';

  quickLinks = [
    { label: 'Home', path: '#home' },
    { label: 'About', path: '#about' },
    { label: 'Skills', path: '#skills' },
    { label: 'Projects', path: '#portfolio' },
    { label: 'Contact', path: '#contact' }
  ];

  socialLinks = [
    { platform: 'GitHub', url: 'https://github.com/Kefilwestill', icon: 'fab fa-github' },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/kefilwe-makoro', icon: 'fab fa-linkedin' },
    { platform: 'Email', url: 'mailto:kefilwem23@outlook.com', icon: 'fas fa-envelope' }
  ]; 
}
