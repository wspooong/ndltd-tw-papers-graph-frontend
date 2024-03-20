# Base image
FROM node:20.11.1 as build-stage

# Set working directory
WORKDIR /app

# Copy package.json and yarn.lock
COPY package*.json ./

# Install dependencies
RUN yarn install

# Copy project files
COPY . .

# Build the Vue.js project
RUN yarn build

# Production stage
FROM nginx:1.21-alpine as production-stage

# Copy nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy built files from build-stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]