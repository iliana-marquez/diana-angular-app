import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { IProfile } from '../iprofile';
import { ActivatedRoute } from '@angular/router';
import { PROFILES } from '../profiles';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit, AfterViewInit {
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
  @ViewChildren('audioElement') audioElements!: QueryList<ElementRef<HTMLAudioElement>>;

  isPlayingIndex: number | null = null;

  toggleAudio(index: number): void {
    const audio = this.audioElements.get(index)?.nativeElement;

    if (!audio) return;

    if (this.isPlayingIndex === index && !audio.paused) {
      audio.pause();
      this.isPlayingIndex = null;
    } else {
      this.audioElements.forEach((el, i) => {
        if (i !== index) el.nativeElement.pause();
      });

      audio.play();
      this.isPlayingIndex = index;
    }
  }

  ngAfterViewInit(): void {
    const carousel = document.getElementById('audioCarousel');

    if (carousel) {
      carousel.addEventListener('slide.bs.carousel', () => {
        if (this.isPlayingIndex !== null) {
          const playingAudio = this.audioElements.get(this.isPlayingIndex);
          playingAudio?.nativeElement.pause();
          this.isPlayingIndex = null;
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
