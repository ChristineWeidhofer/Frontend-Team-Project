import { Component, OnInit } from '@angular/core';
import { IPortfolio } from '../IPortfolio';
import { portfolio } from '../portfolio';
import { ActivatedRoute, Params } from '@angular/router';



@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
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