# Use Node.js
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files first
COPY package*.json ./

# Install only production dependencies
RUN npm install --production

# Copy all files
COPY . .

# Create uploads folder (for multer)
RUN mkdir -p uploads

# Expose port 5000
EXPOSE 5000

# Start server
CMD ["npm", "start"]