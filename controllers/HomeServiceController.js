const HomeService = require('../services/HomeService');

class HomeServiceController {

    getMovies(req, res, next){
        const homeService = new HomeService()
        return homeService.getMovies(req.params.category)
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