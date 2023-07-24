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

# Expose the desired port (e.g., 3000 for Express server)
EXPOSE 3002

# Set the command to start the Express server when the container starts
CMD [ "node", "worker.js" ]
