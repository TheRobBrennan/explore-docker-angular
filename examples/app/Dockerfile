FROM mhart/alpine-node:12.13.0

# Add the bash shell
RUN apk add --update bash && rm -rf /var/cache/apk/*

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
