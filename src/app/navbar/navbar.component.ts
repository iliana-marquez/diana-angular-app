import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  isHomePage: boolean = false;
  hasScrolled: boolean = false; // To track whether user has scrolled on home page

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Check route on initialization
    this.setHomePageStatus();

    // Listen for route changes
    this.router.events.subscribe(() => {
      this.setHomePageStatus();
      // Reset scroll tracking when navigating away from home page
      if (!this.isHomePage) {
        this.hasScrolled = true;  // Keep the scrolled class on other pages
      }
    });
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  // Check if the current route is home
  private setHomePageStatus() {
    this.isHomePage = this.router.url === '/' || this.router.url === '/home';
  }

  @HostListener('window:scroll', [])
  onScroll() {
    if (this.isHomePage) {
      const navLogo = document.getElementById('logo');
      if (window.scrollY > 25) {
        if (!this.hasScrolled) {
          this.hasScrolled = true; // Mark as scrolled
          navLogo?.classList.add('scrolled');
        }
      } else {
        this.hasScrolled = false; // Reset if not scrolled
        navLogo?.classList.remove('scrolled');
      }
    }
  }
}
