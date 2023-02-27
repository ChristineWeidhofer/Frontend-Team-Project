import { Component, OnInit } from '@angular/core';
import { IPortfolio } from '../IPortfolio';
import { portfolio } from '../portfolio';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolio:IPortfolio[] = portfolio;

  constructor() { }

 ngOnInit(): void {
 }
}
