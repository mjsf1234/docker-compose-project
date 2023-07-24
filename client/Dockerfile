# Use an official Node.js runtime as the base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire app directory (including node_modules) to the working directory
COPY . .

# Build the React app for production
RUN npm run build

# Expose the desired port (default is 3000 for Create React App)
EXPOSE 3000

# Set the command to run the app when the container starts
CMD [ "npm", "start" ]
