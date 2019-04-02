const router = require('express').Router()
const HomeServiceController = require ('../controllers/HomeServiceController');

const homeServiceController = new HomeServiceController();

// router.get('/movies/now_playing', (req, res, next) => homeServiceController.getNowPlayingMovies(req, res, next));

module.exports = router