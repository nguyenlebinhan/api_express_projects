const eventController=require('../controllers/eventController.js')

const router=require('express').Router()

router.post('/addEvent',eventController.addEvent)

router.get('/getAllEvent',eventController.getAllEvents)

router.put('/:id',eventController.updateEvent)

router.delete('/:id',eventController.deleteEvent)

module.exports=router