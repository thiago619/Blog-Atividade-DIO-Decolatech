import { Component, Input, input } from '@angular/core';

@Component({
  selector: 'app-itemport',
  standalone: true,
  imports: [],
  templateUrl: './itemport.component.html',
  styleUrl: './itemport.component.css'
})
export class ItemportComponent {
  @Input({required: true}) name!: string;
  @Input({required: true}) description!: string;
  @Input({required: true}) image!: string;

}
