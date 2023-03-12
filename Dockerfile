# Use an official Node.js runtime as a parent image
FROM node:16.16.0

# Set the working directory to /app
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 for the container
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start:dev"]