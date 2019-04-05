const router = require('express').Router()
const HomeServiceController = require ('../controllers/HomeServiceController');

const homeServiceController = new HomeServiceController();

router.get('/movies/now_playing', (req, res, next) => homeServiceController.getNowPlayingMovies(req, res, next));
router.get('/movies/upcoming', (req, res, next) => homeServiceController.getUpcomingMovies(req, res, next));
router.get('/movies/top_rated', (req, res, next) => homeServiceController.getTopRatedMovies(req, res, next));
router.get('/movies/popular', (req, res, next) => homeServiceController.getPopularMovies(req, res, next));
router.get('/movies/drama', (req, res, next) => homeServiceController.getDramaMovies(req, res, next));

router.get('/movies/:id/images', (req, res, next) => homeServiceController.getHeroImage(req, res, next));

module.exports = router