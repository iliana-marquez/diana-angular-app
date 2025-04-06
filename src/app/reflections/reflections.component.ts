import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-reflections',
  standalone: false,
  templateUrl: './reflections.component.html',
  styleUrl: './reflections.component.css'
})
export class ReflectionsComponent {
  isRotated = false; // Flag to track the rotation state

  @HostListener('window:scroll', [])
  onScroll() {
    const cardElement = document.querySelector('.my-card') as HTMLElement;
    const rect = cardElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Check if the card is outside the 70% of the viewport height
    if (rect.top <= windowHeight * 0.7 && rect.top >= 0) {
      this.isRotated = false; // Card is within the 70% of the viewport
    } else {
      this.isRotated = true; // Card is outside the 70% of the viewport
    }
  }
}
