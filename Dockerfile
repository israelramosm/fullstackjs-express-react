FROM node:14-alpine3.15
# Adding build tools to make yarn install work on Apple silicon / arm64 machines
# RUN apk add --no-cache python2 g++ make
WORKDIR /app
# This means that it copies all the files from this repo to the container
COPY . .
RUN npm install
RUN npm run project:build

EXPOSE 5001
CMD ["node", "dist/server.js"]