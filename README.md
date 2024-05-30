

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
   - bash
   - Copy code
     - git clone https://github.com/yourusername/rentify.git
     - cd rentify
   - Backend Setup
     - Navigate to the server directory:
       - bash
         - Copy code
         - cd server
         - Create a .env file and add your MongoDB URI:

- makefile
  - Copy code
  - MONGO_URI=your_mongodb_uri
    
# Install server dependencies:

- bash
  - Copy code
  - npm install
  - Start the server:

- bash
  - Copy code
  - npm run dev
  - Frontend Setup

- Navigate to the client directory:

    - bash
    - Copy code
    - cd ../client
    - Install client dependencies:

  - bash
    - Copy code
    - npm install
    - Start the frontend development server:

- bash
  - Copy code
  - npm start
  - Access the application

Open your web browser and navigate to http://localhost:3000.
- Usage
  - Login as a Seller or User: On the landing page, select your user type (Seller or User) and log in.
  - Seller Dashboard: If logged in as a Seller, you can add new properties, view your listed properties, and delete them if needed.
  - User Dashboard: If logged in as a User, you can browse through the list of properties and view details for each property.
  - API Endpoints
    - Property Routes
    - List Property
 
  - POST /api/properties
    - Request Body: { propertyImg, area, bedrooms, bathrooms, poi }
  - Get Properties
      - GET /api/properties
  - Delete Property
    - DELETE /api/properties/:id



# ScreenShots
![image](https://github.com/aartisharma05/Rentify/assets/120464099/fa78be77-2b6b-43fe-958f-d64227280c10)
![image](https://github.com/aartisharma05/Rentify/assets/120464099/915254c5-3271-4658-9b48-61aea06497f8)
![image](https://github.com/aartisharma05/Rentify/assets/120464099/b3e4d9dc-6920-43b1-b630-789b8f6b8247)
![image](https://github.com/aartisharma05/Rentify/assets/120464099/43c5fd2f-8b30-47b1-b5ad-6f61a068f11a)
![image](https://github.com/aartisharma05/Rentify/assets/120464099/91a8307e-00fd-4c33-a6c6-4fa0ea4df2d2)
![image](https://github.com/aartisharma05/Rentify/assets/120464099/346e07b8-a2c3-441b-aceb-c67d8aa2c310)
![image](https://github.com/aartisharma05/Rentify/assets/120464099/02e30382-f278-41e9-878f-e47b1a48718a)
![image](https://github.com/aartisharma05/Rentify/assets/120464099/375b34a3-8134-4606-b0c7-06029905fbf3)
![image](https://github.com/aartisharma05/Rentify/assets/120464099/0bc699a0-f713-4611-98da-77b0c54b3b3e)
![image](https://github.com/aartisharma05/Rentify/assets/120464099/1d9c2413-4c86-40a9-b998-ceb823d9e668)
![image](https://github.com/aartisharma05/Rentify/assets/120464099/47399d18-d1fe-4d8e-8933-0d29b01f25fa)








Contact
For any questions or support, please contact:

 - Name: Aarti Sharma
 - Email: aartisharma.official1@gmail.com
 - GitHub: aartisharma05
