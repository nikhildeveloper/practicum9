FROM node:20.11.0-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci --omit=dev

# Copy the application source
COPY src ./src

# Copy the public directory
COPY public ./public

CMD ["npm", "start"]
