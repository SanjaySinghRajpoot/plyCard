FROM node:17-alpine

WORKDIR /app

#mapping environment path for node modules
ENV PATH="./node_modules/.bin:$PATH"

COPY package.json /app

RUN npm install

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]
