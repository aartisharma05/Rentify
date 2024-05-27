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

# Build the app
RUN npm run build

# Use a web server to serve the built app
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

# Open the port on which your app will run
EXPOSE 80

# Run the web server on container startup
CMD ["nginx", "-g", "daemon off;"]
