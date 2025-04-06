import { Component, OnInit} from '@angular/core';
import { quotes } from '../quotes';
import { IQuotes } from '../iquotes';

@Component({
  selector: 'app-reflections',
  standalone: false,
  templateUrl: './reflections.component.html',
  styleUrl: './reflections.component.css'
})
export class ReflectionsComponent implements OnInit {
  quotes:IQuotes[] = quotes;


 constructor() { }

 ngOnInit(): void {
 }
 
}
