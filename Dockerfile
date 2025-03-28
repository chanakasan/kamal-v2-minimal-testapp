FROM node:slim

WORKDIR /html

# install curl for kamal proxy
RUN apt-get update && apt-get install -y curl

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
