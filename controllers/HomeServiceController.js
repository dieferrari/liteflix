const HomeService = require('../services/HomeService');

class HomeServiceController {

    getNowPlayingMovies(req, res, next){
        const homeService = new HomeService()
        return homeService.getNowPlayingMovies()
        .then( response => {
            console.log(response)
            console.log("////////// getting all NOW PLAYING movies")
            res.json(response)
        }).catch( error => console.log(error))
    }
}

module.exports = HomeServiceController