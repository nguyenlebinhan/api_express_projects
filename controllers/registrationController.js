
const { time } = require('drizzle-orm/mysql-core');
const db= require('../models')
const Event = db.event;
const User=db.user;
const Registration=db.registration;
// first check the userId
const checkUserId=async(req,res,next)=>{
    try{
        const userId=await User.findOne({where:{id:req.body.user_id}});
        if(!userId){
            res.status(500).json({message:'Wrong user_id'});
        }
        req.userId=userId;
        next();
    }catch(error){
        res.status(500).json({error:'Unable to check Id'});
    }
}
// if the user id is valid them check the event id
const checkEventId=async(req,res,next)=>{
    try{
        const eventId=await Event.findOne({where:{id:req.body.event_id}});
        if(!eventId){
            res.status(500).json({message:'Wrong user_id'});
        }
        req.eventId=eventId;
        next();
    }catch(error){
        res.status(500).json({message:'Unable to check event id'});
    }
}
//check whether it is valid
const handleRequest = (req, res,next) => {
    res.status(200).json({ message: 'User and Event are valid', userId: req.userId, eventId: req.eventId });
    next();
};
//after check have user_id and event_id we will allow them to insert remain information
const timeRegistration=async(req,res,next)=>{
    try{
        let info={
            id:req.body.id,
            status:req.body.status,
            event_id:req.body.event_id,
            user_id:req.body.user_id,
            registered_at:req.body.registered_at,
        }
        const timeRegister=await Registration.create(info);
        res.status(200).send({message:'Successfully set time and other informations',timeRegister});
        console.log(timeRegister)
    }catch(err){
        res.status(500).json({message:'Unable to set time'});    
    }
}
module.exports={
    checkUserId,
    checkEventId,
    handleRequest,
    timeRegistration
};