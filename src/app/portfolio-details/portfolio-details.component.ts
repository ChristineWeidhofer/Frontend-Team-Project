import { Component, OnInit } from '@angular/core';
import { portfolio } from '../portfolio';
import { IPortfolio } from '../IPortfolio';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent implements OnInit {
  portfolio: IPortfolio = {} as IPortfolio;
  portfolioId: number = 0;

  constructor(
    private route: ActivatedRoute
      ) {}

      ngOnInit(): void {
        this.route.params.subscribe((params: Params) => {
          this.portfolioId = +params['portfolioId'];
          this.portfolio = portfolio[this.portfolioId];
        });
      }

}
