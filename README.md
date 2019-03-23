# litebox-test

> Movie's collections template

## Build Setup

``` bash
# install dependencies
yarn

# serve with hot reload at localhost:3000
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit

# run e2e tests
yarn run e2e

# run all tests
yarn test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## API Connection

# Get Película Destacada (La más nueva en Now Playing)
[GET] https://api.themoviedb.org/3/movie/now_playing?api_key=6f26fd536dd6192ec8a57e94141f8b20

# Get Próximamente
[GET] https://api.themoviedb.org/3/movie/upcoming?api_key=6f26fd536dd6192ec8a57e94141f8b20

# Get Mejores Rankeadas
[GET] https://api.themoviedb.org/3/movie/top_rated?api_key=6f26fd536dd6192ec8a57e94141f8b20

# Get Populares
[GET] https://api.themoviedb.org/3/movie/popular?api_key=6f26fd536dd6192ec8a57e94141f8b20

# Get Drama
[GET] https://api.themoviedb.org/3/discover/movie?api_key=6f26fd536dd6192ec8a57e94141f8b20&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=18

- Información acerca del uso de imágenes:
https://developers.themoviedb.org/3/getting-started/images
