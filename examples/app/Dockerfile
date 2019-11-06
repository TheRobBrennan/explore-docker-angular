FROM mhart/alpine-node:10

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

# Expose our application and node debugger ports
EXPOSE 4200
