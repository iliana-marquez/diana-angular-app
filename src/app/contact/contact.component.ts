import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent  implements OnInit, AfterViewInit {

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
    const hero = document.querySelector('main');

    if (footer && hero) {
      const footerHeight = footer.getBoundingClientRect().height;
      hero.style.minHeight = `calc(100vh - ${footerHeight}px)`;
    }
  }


}