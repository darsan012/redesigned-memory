# Start with debian book worm slim
FROM debian:bookworm-slim

# Install dependencies
RUN apt-get update && apt-get install -y curl

# Install Node.js version 21.6.2
RUN curl -fsSL https://deb.nodesource.com/setup_21.x | bash - && \
    apt-get install -y nodejs && \
    node -v

# Set working directory
WORKDIR /app

# Copy and install dependencies
COPY package*.json ./
RUN npm install

# copy application files
COPY . .


# Expose the port and start the application
EXPOSE 3000
CMD ["npm", "run", "dev"]