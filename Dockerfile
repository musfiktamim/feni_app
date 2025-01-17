FROM node:20.18.1
WORKDIR /feni_app
COPY . .
RUN npm install
CMD [ "npm","start" ]