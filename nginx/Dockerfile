FROM nginx:1.19-alpine

ARG app_port

ENV APP_PORT=${app_port}

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default

RUN envsubst \${APP_PORT} < /etc/nginx/conf.d/default > /etc/nginx/conf.d/default.conf
