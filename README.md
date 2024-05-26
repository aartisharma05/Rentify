

# Rentify - Where Renting Meets Simplicity

# Overview
Rentify is a web application designed to streamline the rental process for both property owners and tenants. The platform allows property owners to list their properties, manage listings, and find suitable tenants. Tenants can browse available properties based on their requirements and contact property owners directly.

# Features
 - Property Listing: Property owners can add, edit, and delete property listings with details such as area, number of bedrooms, bathrooms, points of interest, and an image.
 - Property Browsing: Tenants can browse through available properties, view detailed information, and contact property owners.
 - User Roles: Supports different user roles (Seller and User) to provide a tailored experience for property owners and tenants.
 - Responsive Design: User-friendly interface that works on both desktop and mobile devices.
 - 
# Tech Stack
 - Frontend: React.js, Formik, Tailwind CSS
 - Backend: Node.js, Express.js, Mongoose
 - Database: MongoDB
 - Authentication: JWT (JSON Web Tokens)

   
# Getting Started
 - Prerequisites
  - Node.js
  - npm (Node Package Manager)
  - MongoDB (local or Atlas)
  - Installation
 - Clone the repository

bash
Copy code
git clone https://github.com/yourusername/rentify.git
cd rentify
Backend Setup

Navigate to the server directory:

bash
Copy code
cd server
Create a .env file and add your MongoDB URI:

makefile
Copy code
MONGO_URI=your_mongodb_uri
Install server dependencies:

bash
Copy code
npm install
Start the server:

bash
Copy code
npm run dev
Frontend Setup

Navigate to the client directory:

bash
Copy code
cd ../client
Install client dependencies:

bash
Copy code
npm install
Start the frontend development server:

bash
Copy code
npm start
Access the application

Open your web browser and navigate to http://localhost:3000.
Usage
Login as a Seller or User: On the landing page, select your user type (Seller or User) and log in.
Seller Dashboard: If logged in as a Seller, you can add new properties, view your listed properties, and delete them if needed.
User Dashboard: If logged in as a User, you can browse through the list of properties and view details for each property.
API Endpoints
Property Routes
List Property

POST /api/properties
Request Body: { propertyImg, area, bedrooms, bathrooms, poi }
Get Properties

GET /api/properties
Delete Property

DELETE /api/properties/:id
Screenshots



Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

License
This project is licensed under the MIT License.

Contact
For any questions or support, please contact:

Name: Aarti Sharma
Email: aartisharma.official1@gmail.com
GitHub: aartisharma05
