FROM node:13.12.0-alpine

RUN mkdir /app
WORKDIR /app

COPY package.json .
RUN npm install
RUN npm audit fix

COPY . .

EXPOSE 80

CMD ["npm", "start"]