import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class AboutComponent {
  name = 'Kefilwe Makoro';
  role = 'Angular Developer';
  profileImage ='/assets/kefilwe2.jpg';
  
  bio = [
    'I am a passionate Front-End Developer with a keen eye for creating beautiful, responsive, and user-friendly web applications.',
    'Currently advancing my skills as a QA Software Tester, I am committed to building modern web solutions that make a difference.',
    'I believe in writing clean, maintainable code and creating seamless user experiences that delight users.'
  ];

  highlights = [
    { icon: 'fas fa-code', label: 'Clean Code', description:'Writing maintanable and scalable code' },
    { icon: 'fas fa-palette', label:'UI/UX Focus', description: 'Creating beautiful user experiences' },
    { icon: 'fas fa-brain', label:'Fast Learner', description: 'Quick to adapt to new technologies' },
    { icon: 'fas fa-users', label:'Team Player', description: 'Collaborative and communicative' }
  ];
}
