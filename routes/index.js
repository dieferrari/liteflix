const router = require('express').Router()
const HomeServiceController = require ('../controllers/HomeServiceController');

const homeServiceController = new HomeServiceController();

router.get('/movies/:category', (req, res, next) => homeServiceController.getMovies(req, res, next));
router.get('/movies/:id/images', (req, res, next) => homeServiceController.getHeroImage(req, res, next));

module.exports = router