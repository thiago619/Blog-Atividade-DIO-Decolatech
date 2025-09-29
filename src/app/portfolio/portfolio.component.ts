import { Component } from '@angular/core';
import { ItemportComponent } from '../itemport/itemport.component';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [ItemportComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

}
