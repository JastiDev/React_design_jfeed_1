# stage 1 - build environment
FROM node:12.13.0-alpine as build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

RUN npm run build

# stage 2 - production environment
FROM nginx:1.17.5-alpine
RUN apk add --update nodejs
EXPOSE 80

COPY --from=build /app/build /usr/share/nginx/html
COPY ./run.js /usr/share/nginx/html
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf.template
COPY ./bash.sh /

ENV LISTEN_PORT 80

CMD ["/bin/sh", "/bash.sh"]
