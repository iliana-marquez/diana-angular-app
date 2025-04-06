import { AfterViewInit, Component, ElementRef, HostListener, OnInit, QueryList, ViewChildren} from '@angular/core';
import { quotes } from '../quotes';
import { IQuotes } from '../iquotes';

@Component({
  selector: 'app-reflections',
  standalone: false,
  templateUrl: './reflections.component.html',
  styleUrl: './reflections.component.css'
})
export class ReflectionsComponent implements OnInit, AfterViewInit {
  quotes:IQuotes[] = quotes;
  visibleStates: boolean[] = [];

  @ViewChildren('cardElem') cardElems!: QueryList<ElementRef>;

  constructor() {}

  ngOnInit(): void {} 

  ngAfterViewInit(): void {
    this.updateCardRotation();
  }

  @HostListener('window:scroll')
  onScroll() {
    this.updateCardRotation();
    window.addEventListener('scroll', this.updateCardRotation.bind(this));
  }

  private updateCardRotation(): void {
    this.cardElems.forEach((cardRef: ElementRef) => {
      const card = cardRef.nativeElement as HTMLElement;
      const rect = card.getBoundingClientRect();
      const topPercent = (rect.top / window.innerHeight) * 100;
      const bottomPercent = (rect.bottom / window.innerHeight) * 100;

      const isInMiddle = topPercent < 45 && bottomPercent > 40;

      if (isInMiddle) {
        card.classList.add('straight');
        card.classList.remove('x-rotate');
      } else {
        card.classList.remove('straight');
        card.classList.add('x-rotate');
      }
    });
  }
}
