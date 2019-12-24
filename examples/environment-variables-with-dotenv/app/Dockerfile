FROM node:12-alpine

# Create the app directory
WORKDIR /app

# Add the Angular CLI
RUN npm install -g @angular/cli

# Install dependencies
COPY package.json ./
RUN npm install --silent

# Copy application code
COPY . ./
