const express=require('express')
const cors=require('cors')
const connectDataBase=require('./database');
const movieStoreRouter=require('./routes/movieStore');

const app=express();

app.use(express.json())

app.use(cors())  

app.use(logger)

app.use(movieStoreRouter)

function logger(req,res,next){
    console.info(new Date(), req.method, req.path)
    next();
}


connectDataBase().then(()=>{
    app.listen(3001,()=>{
        console.log('server running at http://localhost:3002')
    })
})



