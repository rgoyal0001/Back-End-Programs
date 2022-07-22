const movieStoreModel=require('../database/movieStore');

async function addMovie(req,res,next){
    const {movie : movieData}= req.body;

    let movie=new movieStoreModel(movieData)

    await movie.save();

    return res.send({
        message:'movie has been added',
        data:movie
    })
}

async function getAllMovies(req,res){
    try {
        let {field,sortBy,skip,limit}=req.query;
        let movie=await movieStoreModel.find().sort({[field]:sortBy}).skip(skip).limit(limit);
        res.send({
            data:movie
        })
    } catch (error) {
        return res.status(400).send(error)
    }
}

async function getMoviesByTitle(req,res){
    try {
        let {title}=req.params;
        let movie=await movieStoreModel.find({title:title});
        res.send({
            data:movie
        })
    } catch (error) {
        return res.status(400).send(error)
    }
}

async function getMoviesByRating(req,res){
    try {
        let {rating}=req.params;
        let movie=await movieStoreModel.find({rating:rating})
        res.send({
            data:movie
        })
    } catch (error) {
        return res.status(400).send(error)
    }
}

async function searchMovies(req,res){
    try {
        let {q}=req.query;
        let movie=await movieStoreModel.find({title:{$reqex:q}})
        res.send({
            data:movie
        })
    } catch (error) {
        return res.status(400).send(error)
    }
}

module.exports={
    addMovie,
    getAllMovies,
    getMoviesByTitle,
    getMoviesByRating,
    searchMovies,
}