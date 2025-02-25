# Use node18
FROM node:18

# Create work directory
WORKDIR /app

# Copy files
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Expose port
EXPOSE 3500

# Start aplication
CMD ["node", "app.js"]
