import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, AfterViewInit {

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.adjustHeroHeight();
  }

  @HostListener ('window:resize', ['$event'])
  onResize(event: Event) {
    this.adjustHeroHeight();
  }

  adjustHeroHeight(): void {
    const footer = document.querySelector('footer');
    const hero = document.getElementById('hero-container');

    if (footer && hero) {
      const footerHeight = footer.getBoundingClientRect().height;
      hero.style.minHeight = `calc(100vh - ${footerHeight}px)`;
    }
  }


}
