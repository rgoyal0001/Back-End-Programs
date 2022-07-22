const mongoose=require('mongoose')

const movieStoreSchema=new mongoose.Schema({
    id:String,
    title:String,
    year:String,
    image:String,
    rating:String,
})

const movieStoreModel=mongoose.model('movieStore',movieStoreSchema);

module.exports=movieStoreModel;