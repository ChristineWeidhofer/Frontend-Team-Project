import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AwardsComponent } from './awards/awards.component';
import { ContactComponent } from './contact/contact.component';
import { CustomersComponent } from './customers/customers.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MediaComponent } from './media/media.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  declarations: [
    AppComponent,
    AwardsComponent,
    ContactComponent,
    CustomersComponent,
    LandingPageComponent,
    MediaComponent,
    NavbarComponent,
    PortfolioComponent,
    TestimonialsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
