import { Component, OnInit } from '@angular/core';
import { IPortfolio } from '../IPortfolio';
import { portfolio } from '../portfolio';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  portfolio:Array<IPortfolio> = portfolio;

  constructor() { }

 ngOnInit(): void {
 }
}
