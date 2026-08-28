import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Small Business Website',
      description: 'A modern, responsive business website built with pure HTML, CSS & JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
      image: '/assets/kefilwe3.jpg',
      githubUrl: 'https://github.com/Kefilwestill/multi-page--business-website-assignment',
      liveUrl: 'https://buffet-restaurant.netlify.app/',
      featured: true
    }
  ];
}