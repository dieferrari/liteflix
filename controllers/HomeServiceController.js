const HomeService = require('../services/HomeService');

class HomeServiceController {

    getNowPlayingMovies(req, res, next){
        const homeService = new HomeService()
        return homeService.getNowPlayingMovies()
        .then( response => {
            res.json(response.data)
        }).catch( error => console.log(error))
    }

    getUpcomingMovies(req, res, next){
        const homeService = new HomeService()
        return homeService.getUpcomingMovies()
        .then( response => {
            res.json(response.data)
        }).catch( error => console.log(error))
    }

    getTopRatedMovies(req, res, next){
        const homeService = new HomeService()
        return homeService.getTopRatedMovies()
        .then( response => {
            res.json(response.data)
        }).catch( error => console.log(error))
    }

    getPopularMovies(req, res, next){
        const homeService = new HomeService()
        return homeService.getPopularMovies()
        .then( response => {
            res.json(response.data)
        }).catch( error => console.log(error))
    }

    getDramaMovies(req, res, next){
        const homeService = new HomeService()
        return homeService.getDramaMovies()
        .then( response => {
            res.json(response.data)
        }).catch( error => console.log(error))
    }

    getHeroImage(req, res, next){
        const homeService = new HomeService()
        return homeService.getHeroImage(req.params.id)
        .then( response => {
            res.json(response.data)
        }).catch( error => console.log(error))
    }
}

module.exports = HomeServiceController