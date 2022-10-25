const express = require('express');

const {
    // createMovie,
    getUserData,
    // deleteMovie,
    updateUserAddress} = require('../controllers');

    const router = express.Router();

    // router.post('/create-movie', createMovie);
    router.get('/get-user-data/:id', getUserData);
    // router.delete('/delete-movie/:id', deleteMovie);
    router.put('/update-user-address/:id', updateUserAddress);
    // router.get('/get-movies', getMovies);

    module.exports = {
        router
    }