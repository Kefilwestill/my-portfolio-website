import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent {
  skillCategories = [
    {
      title: 'Frontend Technologies',
      icon: 'fas fa-laptop-code',
      color: '#667eea',
      skills: [
        { name: 'HTML5', level: 90 },
        { name: 'CSS3', level: 85 },
        { name: 'Bootstrap', level: 75 },
        { name: 'JavaScript', level: 80 },
        { name: 'TypeScript', level: 75 },
        { name: 'Angular', level: 70 }
      ]
    },
    {
      title: 'Backend & Database',
      icon: 'fas fa-server',
      color: '#f093fb',
      skills: [
        { name: 'Firebase', level: 70 }
      ]
    },
    {
      title: 'Tools & Workflow',
      icon: 'fas fa-tools',
      color: '#4facfe',
      skills: [
        { name: 'Git & GitHub', level: 80 },
        { name: 'VS Code', level: 90 },
        { name: 'Chrome DevTools', level: 75 },
        { name: 'Responsive Design', level: 85 }
      ]
    }
  ];
}
