import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
isMenuOpen = false;

constructor(private router:Router) {}

ngOnInit(): void {}

toggleMenu () {
  this.isMenuOpen = !this.isMenuOpen;
}

@HostListener('window:scroll', [])
onScroll() {
  const navLogo = document.getElementById('logo');
  const homeLogo = document.getElementById('home-logo');

  if (window.scrollY > 25) {
    navLogo?.classList.add('scrolled');
    homeLogo?.classList.add('scrolled');
  } else {
    navLogo?.classList.remove('scrolled');
    homeLogo?.classList.remove('scrolled');
  }
}


}
