// Modified: Track whether the current page is the home page

import { Component } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isHomePage = false;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.isHomePage = this.router.url === '/home'; 
    });
  }
}
