FROM nginx:alpine

ARG app_port

ENV APP_PORT=${app_port}

RUN rm /etc/nginx/conf.d/default.conf

COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN envsubst \${APP_PORT} < /etc/nginx/conf.d/default.conf > /etc/nginx/conf.d/default.conf
