# litebox-test

> Movie's collections template

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
npm run dev

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
