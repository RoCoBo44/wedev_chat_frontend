FROM node:12

WORKDIR /usr/src/front

COPY package*.json ./

COPY . .

# COPY ./src/config/config-docker.json ./src/config/config.json #seguro hay que psar una config para la comunicacion del puerto

#ENTRYPOINT ["./entrypoint.sh"]

RUN npm install

#EXPOSE 3001

CMD [ "npm", "start" ]