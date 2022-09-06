FROM node:16-alpine

WORKDIR /app

COPY . .

EXPOSE $PORT

CMD ["npm", "start"]