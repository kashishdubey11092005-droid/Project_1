🔗 URL Shortener

A simple and lightweight URL Shortener web application built using Node.js, Express.js, MongoDB, Mongoose, and EJS.

The application allows users to enter a long URL and generate a shorter URL. When the shortened URL is accessed, the user is automatically redirected to the original URL.

🚀 Features

- 🔗 Shorten long URLs into short URLs
- 🔄 Automatically redirect short URLs to the original URL
- 🗄️ Store URL mappings in MongoDB
- 🎨 Simple and clean EJS-based user interface
- ⚡ Built with Express.js
- 📱 Lightweight and easy to run locally
- 🧩 MVC-style project structure

🛠️ Technologies Used

- Node.js — JavaScript runtime
- Express.js — Web application framework
- MongoDB — Database
- Mongoose — MongoDB object modeling
- EJS — Template engine for frontend
- CSS — Styling
- JavaScript — Application logic
- Git & GitHub — Version control

📁 Project Structure

URL Shortner/
│
├── Controller/
│   └── Era.js
│
├── models/
│   └── Url.js
│
├── Views/
│   └── Rama.ejs
│
├── node_modules/
│
├── .gitignore
├── package.json
├── package-lock.json
└── server.js

📂 Folder Description

Controller/
Contains the application logic for handling URL shortening and retrieving the original URL.

models/
Contains the Mongoose model used to store URL information in MongoDB.

Views/
Contains the EJS frontend template used to display the URL shortener interface.

server.js
Main entry point of the application. It configures Express, connects to MongoDB, defines routes, and starts the server.

🔄 How It Works

User enters a long URL
        ↓
Express receives the request
        ↓
Controller processes the URL
        ↓
Short URL is generated
        ↓
URL mapping is stored in MongoDB
        ↓
Short URL is returned/displayed
        ↓
User opens the short URL
        ↓
Application finds the original URL
        ↓
User is redirected to the original website

🌐 Routes

Method| Route| Description
GET| "/"| Displays the URL Shortener page
POST| "/shorten"| Creates a shortened URL
GET| "/:shortcode"| Redirects to the original URL

⚙️ Installation & Setup

1. Clone the repository

git clone YOUR_GITHUB_REPOSITORY_URL

2. Navigate into the project

cd "URL Shortner"

3. Install dependencies

npm install

4. Make sure MongoDB is running

This project uses MongoDB locally.

The application connects to MongoDB using Mongoose.

Example:

mongodb://127.0.0.1:27017/nodeJsExpressApi

Make sure your MongoDB server/MongoDB Compass setup is running before starting the application.

5. Start the server

node server.js

If you use nodemon:

npx nodemon server.js

6. Open the application

Once the server starts, open:

http://localhost:4001

🧪 Example

Suppose the user enters:

https://www.example.com/very-long-url

The application generates a shortened URL such as:

http://localhost:4001/abc123

Opening the shortened URL redirects the user to the original URL.

🗄️ Database

MongoDB is used to store the relationship between the shortened URL and the original URL.

The Mongoose model is located at:

models/Url.js

It is responsible for defining the structure of the URL data stored in MongoDB.

🎨 Frontend

The frontend is created using EJS and styled using CSS.

The main view is located at:

Views/Rama.ejs

The interface provides a simple form where users can submit a URL to be shortened.

📌 Future Improvements

Some possible improvements for this project include:

- Add user authentication
- Add custom short URLs
- Add URL expiration
- Add click/visit analytics
- Add QR code generation
- Add better error handling
- Add API documentation
- Deploy the application online
- Improve responsive design

👩‍💻 Author

Kashish Dubey

BE Computer Engineering

⭐ Project

If you found this project useful, consider giving the repository a ⭐ on GitHub.
