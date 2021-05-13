# docker-load-balanced-app

This repository demonstrate how to load balance a Node.js Application with NGINX and Docker, using docker-compose.

## prerequistes

Docker 19.03+, docker-compose ?

## get started

1. clone this repository
1. `$ cd /path/to/cloned/repository`

### test node app

run the command

```bash
$ node app/server.js
```

test the server with

```bash
$ curl http://localhost:3000
```

the default response is

```
hello buddy!
```

### create an `.env` file

edit `.env` file to specify ports used:

```
NGINX_EXTERNAL_PORT=88
APP_PORT=3000
```

### docker-compose

`$ docker-compose up --build`

use your browser or `$ curl "http://localhost:88"`

then use `$ docker-compose down` to stop the containers:

```
docker-load-balanced-app_web_1 exited with code 0
docker-load-balanced-app_app1_1 exited with code 137
docker-load-balanced-app_app2_1 exited with code 137
```

## Resources

- [Load Balancing Node.js Applications with NGINX and Docker](https://auth0.com/blog/load-balancing-nodejs-applications-with-nginx-and-docker/)

## License

[MIT](LICENSE.md)
