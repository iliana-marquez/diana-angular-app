import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {

// **** LOGIC FOR AUDIO MEDIA PLAYER ****
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

  // to track the audio element
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

// **** LOGIC FOR VIDEO PLAYER 
  // To handle modal state and video url
  selectedVideoUrl: string | null = null;
  showVideoModal = false;

  // Opens the video modal with the selected video URL
  openVideoModal(videoUrl: string): void {
    this.selectedVideoUrl = videoUrl;
    this.showVideoModal = true;
  }

  // Closes the video modal
  closeVideoModal(): void {
    this.selectedVideoUrl = null;
    this.showVideoModal = false;
  }

}
