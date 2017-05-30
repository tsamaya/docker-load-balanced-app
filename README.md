# docker-load-balanced-app

This repository is following the tutorial : [Load Balancing Node.js Applications with NGINX and Docker](https://auth0.com/blog/load-balancing-nodejs-applications-with-nginx-and-docker/)

# get started

`clone this repository`
`$ cd /path/to/cloned/repository`

## docker-compose

Addition to the tutorial, this repo contains a docker-compose.yml file to easy replace all command line to build and run the app and nginx.

`$ docker-compose up --build`

use your browser or `$ curl "http://localhost:88"`


## Step by Step

The simple [node](https://nodejs.org/) app

the simple node application :
```javascript
const http = require('http');

const message = process.env.MESSAGE || "hello buddy!";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end(`${message}\n`);
}).listen(3000);
```

```shell
$ export MESSAGE=Howdy!
$ node server
```

open `http://localhost:3000` in a web browser or from another terminal `$ curl "http://localhost:3000"`

create an image from the Dockerfile:
`$ docker build -t load-balanced-app .`

And then we can run both instances of our application with the following commands:
```shell
$ docker run -e "MESSAGE=First instance" -p 3001:3000 -d load-balanced-app
$ docker run -e "MESSAGE=Second instance" -p 3002:3000 -d load-balanced-app
```

Load Balancing with a Dockerized NGINX Instance

`nginx.conf` is

```
upstream my-app {
    server 172.17.0.1:3001 weight=1;
    server 172.17.0.1:3002 weight=1;
}

server {
    location / {
        proxy_pass http://my-app;
    }
}
```

`172.17.0.1` is the default gateway TODO find source

```
FROM nginx
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf
```


```
$ docker build -t load-balance-nginx .
$ docker run -p 88:80 -d load-balance-nginx
```

using `$ curl "http://localhost:88"`
