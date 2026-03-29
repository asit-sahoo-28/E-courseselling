# Step 1: Build the app
FROM node:20 AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all files
COPY . .

# Build the app
RUN npm run build


# Step 2: Serve the app
FROM node:20

WORKDIR /app

# Install serve
RUN npm install -g serve

# Copy build files
COPY --from=build /app/dist /app/dist

# Expose port 4000
EXPOSE 4000

# Run app on port 4000
CMD ["serve", "-s", "dist", "-l", "4000"]