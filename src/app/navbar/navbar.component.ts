import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  lightMode() {
    var element = document.body;
    element.classList.toggle("light-mode");
  }

}
