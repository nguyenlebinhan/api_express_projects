const express= require('express')
const cors=require('cors')
const path =require('path')
const app=express()

var corOptions={
    origin:'http://localhost:8080'
};

//middleware
 
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname, 'public','index.html')));
//routers
const router=require('./routers/eventRouters.js')
app.use('/api/events',router)
const routers=require('./routers/userRouters.js')
app.use('/api/users',routers)
const routerss=require('./routers/registrationRouters.js')
app.use('/api/register',routerss)
// Testing API
app.get('/api/test', (req, res) => {
    res.json({ message: 'hello from api' });
});
//port
const port=process.env.PORT||8080
//server

app.listen(port,()=>{
    console.log('server is running on ${port}')
})