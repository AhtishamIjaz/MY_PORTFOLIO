# Stage 1: Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Stage 2: Production stage
FROM nginx:stable-alpine

# Copy built assets from build stage to nginx public directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config for SPA support
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
