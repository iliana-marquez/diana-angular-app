import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IProfile } from '../iprofile';
import { ActivatedRoute } from '@angular/router';
import { PROFILES } from '../profiles';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
// **** LOGIC FOR PRINTING SELECTED PROFILE DATA ****
  //
  profile: IProfile | undefined;
  
  constructor (private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.profile = PROFILES.find(p => p.id === id);
      window.scrollTo(0, 0); // optional: scroll to top on profile change
    });
  }



// **** LOGIC FOR AUDIO MEDIA PLAYER ****
  // to track the audio element
  @ViewChild('audioElement') audioElementRef!: ElementRef<HTMLAudioElement>;
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
