# PocketHealth Intern Challenge

## Setup
For this assignment, the backend is written in Golang. Please go [here](https://go.dev/), and follow the appropriate instructions to set up the environment on your machine.

The frontend is written in Angular. You can find instructions to set up your environment [here](https://angular.io/guide/setup-local).

Please unzip the starter code attached. You will find the source code for the server in "/backend", and the web app in "/frontend".

Please go ahead and build and run the server and web app, there are instructions below. The server is configured to run on your localhost, at port 8080, and the web app will run on port 4200. Once both the server and app are running, using any browser, you may wish to visit http://localhost:4200

## Run Project
To run the full project, you'll need to run the backend and frontend.

### Backend
Install dependencies using `go get ./...` and then build and run the project.

### Frontend
Install dependencies using `npm install` and then serve the Angular project.

## Changes
1.  We're considering allowing anyone to register for access to PocketHealth. This task will give you a flavour of the approach.

2. We'd like to modify the server to run on port 80. Please make the appropriate modification.

    - **Modification**: Updated the server's listening port from 8080 to 80 in main.go by setting LISTENING_PORT to '80'. Correspondingly, adjusted the apiUrl in both environment.prod.ts and environment.ts accordingly.

3. There is a bug where the POST "/register" isn’t returning the User ID. Instead it returns an empty string. Find and fix this bug.

    - **Modification**: Resolved an issue in the PostRegister function (service.go) where it returned an empty string upon successful user creation. The function now correctly returns userId and err (nil).

4. The registration page attempts to redirect the user to "/home" but it fails since this page isn’t implemented yet. Please add a page to the web app on the "/home" path that displays the message: "Welcome to PocketHealth {Name}. Your User ID is: {User ID}". You can use the "/register" page as a template, please keep the PocketHealth logo on the page.

    - **Modification**: Developed the "/home" page by creating home.component.html, home.component.css, home.component.ts, using the "/register" page as a template. The logo ph-logo.svg was deliberately chosen rather than favicon.png as per the "logo" wording of the instructions.

    - Set up home.component.ts to retrieve user details (name, usedId, and favouriteColour) from UserService and display the info via home.component.html.

    - Configured router (app-routing.module.ts) to include the path to "/home" and import HomeComponent to app.module.ts.

5. After some time, we decide that we also want to capture the user's favourite colour. Please extend the form to collect the user's favourite colour and update the backend to store this with the user's other details.

    - **Modification**: Implemented a dropdown menu on the '/register' page offering seven predefined colour options and an additional 'Custom' option, allowing selection via a colour picker. This hybrid approach minimizes decision fatigue while enabling full-personalization.

    - Implemented the colour picker using the Angular color picker widget. This appears only if the user selects 'Custom' from the drop down menu to prevent visual clutter. 

    - The selected colour value is stored and passed to PostRegister (register.component.ts, service.go) and favouriteColour was added as a field in the database schema (users.go, controller.go, service.go, user.service.ts).

6. Modify the home page to display the user's favourite colour.

   - **Modification**: The user's favourite colour is retrieved by the "/home" page and applied as the center in a 3 part linear gradient to the background. The corner colours of the gradient are the "/register" page background colours to maintain visual continuity. If no favourite colour is selected, the background will mimic the colouring of the "/register" page. 

7. You may wish to perform some basic input sanitization and form validation in the front end. If you wish, go ahead and do so.

    - **Modification**: Implemented form validation to ensure the 'Name' and 'Email' fields are completed with valid inputs before enabling the 'Register' button. Red asterisks denote required fields.
    - If the user touches the Name or Email fields and leaves an invalid input (blank or misformatted), an error message appears below the field.
    - A form.invalid check (register.component.ts) prevents invalid submissions.

**Additional modification**:
- A "Return to Registration Page" button was added on the "/home" page to enhance user control, creating a more intuitive and user-friendly interface.    

## Submission
Please provide a link to your solution (Google Drive, Dropbox, GitHub, etc), and email it back within the next 24 hours. 
- Note: In the instruction email sent by Mr. Gareth Pennington, the final instruction is phrased as "and email it back  prior to the interview." As such, I believe Wednesday is the actual deadline for this assignment. 