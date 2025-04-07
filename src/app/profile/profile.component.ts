import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

  // to track the audio element
  @ViewChild('audio1') audioElementRef!: ElementRef<HTMLAudioElement>;
  isPlaying = false;

toggleAudio(audioElement: HTMLAudioElement, event: Event): void {
  event.stopPropagation();

  if (audioElement.paused) {
    audioElement.play();
    this.isPlaying = true;

    audioElement.onended = () => {
      this.isPlaying = false;
    };
  } else {
    audioElement.pause();
    this.isPlaying = false;
  }
}

ngAfterViewInit(): void {
  const carousel = document.getElementById('audioCarousel');

  if (carousel) {
    carousel.addEventListener('slide.bs.carousel', () => {
      if (this.audioElementRef?.nativeElement && !this.audioElementRef.nativeElement.paused) {
        this.audioElementRef.nativeElement.pause();
        this.isPlaying = false;
      }
    });
  }
}

}
