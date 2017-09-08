# docker-load-balanced-app

This repository is following the tutorial : [Load Balancing Node.js Applications with NGINX and Docker](https://auth0.com/blog/load-balancing-nodejs-applications-with-nginx-and-docker/)

## get started

  `clone this repository`
  `$ cd /path/to/cloned/repository`

### create an `.env` file

create or edit .env file to specify ports used:
  ```
  NGINX_EXTERNAL_PORT=88
  APP_PORT=3000
  ```

### docker-compose

Addition to the tutorial, this repo contains a docker-compose.yml file to easy replace all command line to build and run the app and nginx.

`$ docker-compose up --build`

use your browser or `$ curl "http://localhost:88"`


then use `$ docker-compose down` to stop the containers


## License

[MIT](LICENSE.md)
