# Use the official Node.js image
FROM node:16

# Create and change to the app directory
WORKDIR /app

# Copy application dependency manifests to the container image
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy local code to the container image
COPY . .

# Set the PORT environment variable
ENV PORT=5000

# Open the port on which your app will run
EXPOSE 5000

# Run the web service on container startup
CMD [ "npm", "start" ]
