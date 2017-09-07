FROM node:8-alpine

RUN mkdir -p /srv/app
COPY server.js /srv/app

EXPOSE 3000

CMD [ "node", "/srv/app/server" ]
