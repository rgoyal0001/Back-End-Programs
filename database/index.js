const mongoose= require('mongoose')

async function connectDataBase(){
    const dbUri="mongodb://127.0.0.1:27017/movie_store"

    try {
        const res=await mongoose.connect(dbUri);
        console.log('database connection successful')
    } catch (error) {
        console.log('error',error.message)
        throw error;
    }
}  

module.exports=connectDataBase;