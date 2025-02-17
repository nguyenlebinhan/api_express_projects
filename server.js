const express= require('express')
const cors=require('cors')

const app=express()

var corOptions={
    origin:'https://localhost:8081'
};

//middleware
 
app.use(cors(corOptions))

app.use(express.json())

app.use(express.urlencoded({extended:true}))

//routers
const router=require('./routers/eventRouters.js')
app.use('/api/events',router)
const routers=require('./routers/userRouters.js')
app.use('/api/users',routers)
const routerss=require('./routers/registrationRouters.js')
app.use('/api/register',routerss)
//testing api
app.get('/', (req,res) =>{
    res.json({message:'hello from api'})
})
//port
const port=process.env.PORT||8080
//server

app.listen(port,()=>{
    console.log('server is running on ${port}')
})