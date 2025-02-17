const registrationController=require("../controllers/registrationController");
const routerss=require("express").Router();

routerss.post('/validate',registrationController.checkUserId,registrationController.checkEventId,registrationController.handleRequest,registrationController.timeRegistration);
module.exports=routerss