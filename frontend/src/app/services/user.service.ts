import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // Store variables here so other components can fetch them
  private userDetails?: {
    name: string
    email: string
    userId: string
    favouriteColour?: string; // Edit: Added favourite colour
  };

  constructor(
    private http: HttpClient
  ) { }

  /* Functions to fetch saved data */

  getUserDetails() {
    return this.userDetails;
  }

  /* Functions to send HTTP requests */

  postRegister(name: string, email: string, favouriteColour: string) { //Edit
    const url = `${environment.apiUrl}/register`;

    const body = {
      name,
      email,
      favouriteColour, // Edit: Send favourite colour
    };

    return this.http.post<{ user_id: string }>(url, JSON.stringify(body))
      // read and forward the response to the function caller
      .pipe(tap((data) => {
        // Save the user details into this service so we can retrieve it later
        this.userDetails = {
          name,
          email,
          userId: data.user_id,
          favouriteColour, // Edit: Store favourite colour
        };
      }));
  }
}
