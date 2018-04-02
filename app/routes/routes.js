const express = require('express');
const routes = express.Router();

const userRoutes = require('./user.routes');

routes.use('/users', userRoutes);

routes.get('/', function(req, res){ 
    res.status(200);
    res.json({ 
        success:true,
        message: 'Welcome to the coolest API on the earth!' 
    });
    
});

module.exports = routes;