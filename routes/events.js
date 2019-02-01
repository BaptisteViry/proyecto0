const bodyParser = require('body-parser');
const Events = require('../models/index');
const router = require('express').Router();

const eventController = require('./../controllers/events'); 
router.get('/', eventController.getAllEvents);
router.post('/create', eventController.createEvent);
router.get('/:id(\\d+)', eventController.getEventById);
router.post('/:id(\\d+)/delete',eventController.deleteEvent);
router.put('/:id(\\d+)', eventController.updateEvent);

module.exports = router;
