import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class HeroComponent {
  name = 'Hi, I\'m Kefilwe Makoro';
  role = 'Front-End Developer';
  tagline = 'Building beautiful, clean, responsive and user-friendly web experiences with modern technologies';
  profileImage = '/assets/kefilwe.jpg'; 

  socialLinks = [
    { platform: 'GitHub', url:'https://github.com/Kefilwestill', icon: 'fab fa-github' },
    { platform: 'LinkedIn', url:'https://linkedin.com/in/kefilwe-makoro', icon: 'fab fa-linkedin' },
    { platform: 'Email', url:'mailto:kefilwem23@outlook.com', icon: 'fas fa-envelope' }
  ];
}
