const router = require('express').Router()
const HomeServiceController = require ('../controllers/HomeServiceController');

const homeServiceController = new HomeServiceController();

router.get('/movies/now_playing', (req, res, next) => homeServiceController.getNowPlayingMovies(req, res, next));
router.get('/movies/upcoming', (req, res, next) => homeServiceController.getUpcomingMovies(req, res, next));

router.get('/movies/:id/images', (req, res, next) => homeServiceController.getHeroImage(req, res, next));

module.exports = router