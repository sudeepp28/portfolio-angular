import { Component } from '@angular/core';
import { projects } from '../project';

@Component({
  selector: 'app-portfolio',
  standalone: false,
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  projects = projects;

  get imagePath() {
    return 'assets/portfolio/';
  }

  getAnimationClass(index: number): string {
    const animations = ['moveRight', 'moveDown', 'moveLeft'];
    return animations[index % animations.length];
  }
}
