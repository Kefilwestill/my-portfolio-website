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
      title: 'Personal Portfolio Website',
      description: 'A modern, responsive portfolio built with Angular 18 and Bootstrap 5. Features standalone components, TypeScript data binding, and Firebase hosting.',
      technologies: ['Angular', 'TypeScript', 'Bootstrap', 'Firebase'],
      image: 'https://via.placeholder.com/400x300/667eea/ffffff?text=Portfolio+Website',
      githubUrl: 'https://github.com/Kefilwestill/my-portfolio',
      liveUrl: 'https://my-portfolio-9d352.web.app',
      featured: true
    }
  ];
}
