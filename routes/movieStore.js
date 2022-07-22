const express = require('express');
const {addMovie,getAllMovies,getMoviesByRating,getMoviesByTitle,searchMovies}=require('../handler/movieStore')

const movieStoreRouter=express.Router();

movieStoreRouter.get('/all',getAllMovies);
movieStoreRouter.post('/movie',addMovie);
movieStoreRouter.get('/movies/:title',getMoviesByTitle);
movieStoreRouter.get('/movies/:rating',getMoviesByRating);
movieStoreRouter.get('/movies',searchMovies);

module.exports=movieStoreRouter;