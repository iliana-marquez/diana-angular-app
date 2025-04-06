import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { environment } from '../../environments/environment';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';

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

  public sendEmail(e: Event): void {
    e.preventDefault(); // Prevent default form submission

    // Send email using EmailJS
    emailjs
      .sendForm(
        environment.emailjs.serviceId, // Use the service ID from environment
        environment.emailjs.templateId, // Use the template ID from environment
        e.target as HTMLFormElement, // The form element
        {
          publicKey: environment.emailjs.publicKey,
        }
        
      )
      .then(
        () => {
           // Trigger Bootstrap modal using JS
  const modalElement = document.getElementById('successModal');
  if (modalElement) {
    const modal = new (window as any).bootstrap.Modal(modalElement);
    modal.show();

    // Optional: Redirect after a short delay (e.g., 3s)
    setTimeout(() => {
      modal.hide();
      window.location.href = '/';
    }, 3000); }
        },
        (error) => {
          alert('Ein Fehler ist passiert, bitte versuche es später.');
          (e.target as HTMLFormElement).reset(); // Optional: reset the form
          window.location.href = '/';
          console.log('FAILED...', (error as EmailJSResponseStatus).text);
        },
      );
  }
}