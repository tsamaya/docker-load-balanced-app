FROM node:16-alpine

ARG app_port

RUN mkdir -p /srv/app
COPY server.js /srv/app
EXPOSE ${app_port}
CMD [ "node", "/srv/app/server" ]
