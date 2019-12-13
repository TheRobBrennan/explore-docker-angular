FROM node:12-alpine

# Install Chrome for Protractor tests (increases alpine image size from ~748 MB to ~1.09 GB)
RUN apk add chromium chromium-chromedriver
ENV CHROME_BIN=/usr/bin/chromium-browser
ENV CHROME_DRIVER=/usr/bin/chromedriver

# Create the app directory
WORKDIR /app

# Add the Angular CLI
RUN npm install -g @angular/cli

# Install dependencies
COPY package.json ./
RUN npm install

# Copy application code
COPY . ./

# Expose our application port
EXPOSE 4200
EXPOSE 9876
