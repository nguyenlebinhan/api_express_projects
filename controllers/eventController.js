
const db= require('../models')


const Event = db.event;

// 1. Thêm sự kiện
const addEvent = async (req, res) => {
    try{
        let info = {
        id: req.body.id,
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        location:req.body.location,
        organizer_id: req.body.organizer_id
    }
    
        const event = await Event.create(info);
        res.status(200).send({message:'Successfully add a new event',event});
        console.log(event)
    }catch(error){
        res.status(500).send({ error: 'Error adding event' });
        console.error(error);
    }
    
   
}

// 2. Lấy tất cả sự kiện
const getAllEvents = async (req, res) => {
    try{
        let events = await Event.findAll({});
        res.status(200).send({message:'Successfully get all events',events});
    }catch(error){
        res.status(500).send({error:'Error falling to get all events'});
        console.log(error);
    }   
}
    

// 3. Cập nhật sự kiện
const updateEvent = async (req, res) => {
    try{
        let id = req.params.id;
        const event = await Event.update(req.body, { where: { id: id } });
        res.status(200).send(event);
    }catch(err){
        res.status(500).send({err:'Error falling to update events'});
        console.log(err);
    }
}

// 4. Xóa sự kiện
const deleteEvent = async (req, res) => {
    try{
        let id = req.params.id;
        const deleted = await Event.destroy({ where: { id: id } });
        res.status(204).send({ message: 'Event deleted successfully' });
    }catch(err){
        res.status(500).send({err:'Event failed to delete'});
        console.log(err);
    }

   
}

module.exports = {
    addEvent,
    getAllEvents,
    updateEvent,
    deleteEvent,
}
