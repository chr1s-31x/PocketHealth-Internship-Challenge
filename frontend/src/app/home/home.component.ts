import { Component, OnInit, Renderer2} from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private userService: UserService, private renderer: Renderer2, private router: Router) {} 

  name: string | undefined;
  userId: string | undefined;
  //Default value if the customer selects Custom from drop down without selecting a value
  favouriteColour: string = '#000000'; 

  ngOnInit(): void {
    const userDetails = this.userService.getUserDetails();

    if (userDetails) {
      this.name = userDetails.name;
      this.userId = userDetails.userId;
      this.favouriteColour = userDetails.favouriteColour || this.favouriteColour; 
    }

    //Apply background gradient with user's favourite colour
    this.setBackgroundStyle();
 
  }

  setBackgroundStyle(): void {
    this.renderer.setStyle(
      document.body,
      'background',
      //Corner colours taken from Register page
      `linear-gradient( 
        45deg,
        rgba(43, 57, 255, 0.8) 0%, 
        ${this.favouriteColour} 30% 70%,
        rgba(0, 199, 239, 0.8) 100%)`
    );
    this.renderer.setStyle(document.body, 'min-height', '100vh');
  }

  // Remove user favourite colour background 
  resetBackgroundStyle(): void {
    this.renderer.removeStyle(document.body, 'background');
    this.renderer.removeStyle(document.body, 'min-height');
  }

  // Reset background to default in style.css when navigating away
  ngOnDestroy(): void {
    this.resetBackgroundStyle();
  }

  navigateToRegister(): void {
    this.router.navigateByUrl('/register');
  }
  
}
