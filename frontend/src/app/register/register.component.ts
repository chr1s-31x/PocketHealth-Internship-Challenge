import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  //Leave field empty if no favourite colour is selected 
  favouriteColour: string = ''; 

  //The default custom colour if none is selected after clicked custom is black
  //This is because that is the colour displayed for the colour picker
  customColour: string = '#000000';  

  // Modified: Favourite Colour Drop Down Menu Options
  predefinedColours = [
    { label: 'Red', value: '#ff0000' },
    { label: 'Orange', value: '#ffa500' },
    { label: 'Yellow', value: '#fff700' },
    { label: 'Green', value: '#008000' },
    { label: 'Blue', value: '#0000ff' },
    { label: 'Purple', value: '#800080' },
    { label: 'Black', value: '#000000' },
    { label: 'Choose a Custom Colour', value: 'custom' }
  ];

  // Modified: If user selected Custom, return custom colour; otherwise, return predefined
  getSelectedColour(): string {
    return this.favouriteColour === 'custom' ? this.customColour : this.favouriteColour;
  }

  onFormSubmit(form: NgForm) {
    // Modified: Prevent submission if the form is invalid
    if (form.invalid) {
      return;  
    }
    
    const name = form.value.name;
    const email = form.value.email;
    const favouriteColour = this.getSelectedColour();

    this.userService.postRegister(name, email, favouriteColour).subscribe(() => {
      // Once we've received a response, take the user to the home page
      this.router.navigateByUrl('/home');
    })
  }

}
