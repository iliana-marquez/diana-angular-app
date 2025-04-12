import { Component, OnInit, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: false,
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isMenuOpen = false;
  isHomePage: boolean = false;
  isOnProfilePage = false;
  hasScrolled: boolean = false; // To track whether user has scrolled on home page

  constructor(private router: Router) { }

  goHome(): void {
    this.router.navigate(['/home']).then(() => {
      window.location.reload(); // Reload the page after navigating
    });
  }

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

    // Listen to see if on profile page
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.isOnProfilePage = event.urlAfterRedirects.startsWith('/profile/');
    });

  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    if (window.innerWidth < 992) { 
      this.isMenuOpen = false;
    }
  }

  // Check if the current route is home
  private setHomePageStatus() {
    this.isHomePage = this.router.url === '/' || this.router.url === '/home';
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const navLogo = document.getElementById('logo');
    const homeLogo = document.getElementById('home-logo');

    // On the home page, manage the scroll effect for both logos
    if (this.isHomePage) {
      // If scrolled down more than 25px, add 'scrolled' class to both logos
      if (window.scrollY > 25) {
        navLogo?.classList.add('scrolled');
        homeLogo?.classList.add('scrolled');
        this.hasScrolled = true; // Mark that the user has scrolled
      } else {
        navLogo?.classList.remove('scrolled');
        homeLogo?.classList.remove('scrolled');
        this.hasScrolled = false; // Reset scroll tracking
      }
    } else {
      // On other pages, ensure both logos are always in the "scrolled" state
      navLogo?.classList.add('scrolled');
      homeLogo?.classList.add('scrolled');
    }
  }
}
