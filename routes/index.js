const express = require('express');

const {
    // createMovie,
    getUserData,
    createUser,
    deleteUser,
    updateUserAddress} = require('../controllers');

    const router = express.Router();

    
    router.get('/get-user-data/:id', getUserData);
    router.delete('/delete-user/:id', deleteUser);
    router.post('/create-user', createUser);
    router.put('/update-user-address/:id', updateUserAddress);
    

    module.exports = {
        router
    }