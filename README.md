# Chatbot case

The project consists of an Angular frontend and a node.js backend.

Make sure to have node.js installed.

Check your version by running `node -v`
I used version 14.17.6, so if it is not working try updating node.

### Backend setup
Open a terminal in the `chatbot/backend` folder and run

`npm install`

When that is done run

`node backend.js`

The console should log that it is listening to port 3000.

### Frontend setup
Make sure you have the Angular CLI installed globally, you can install it by running

`npm install -g @angular/cli`

Open a terminal in the `chatbot/chatbot` folder and run

`npm install`

When that is done compile the code by running

`ng serve`

When the project is compiled the console should log that it is running on http://localhost:4200/
