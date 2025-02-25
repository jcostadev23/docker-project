FROM node:18

# Create directory
WORKDIR /app

# Copy files and install dependencys
COPY package.json package-lock.json ./
RUN npm install

COPY . .

# Expose port
EXPOSE 5173

# Build and run
CMD ["npm", "start"]
