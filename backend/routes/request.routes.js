const request = require('express').Router();
const db = require('../database/db_conection');
const bcrypt = require('bcrypt');
const { query } = require('express');
const jwt = require('jsonwebtoken');

// Make a new request for food by a charity
request.post('/request', (req, res) => {
    const { food_id, charity_id } = req.body;
    db.query(`SELECT * FROM users WHERE user_id = ${charity_id}`, (err, data) => {
        if (err) {
            res.json({ message: 'Error' });
        } else {
            if (data[0].user_type == 'charity') {
                db.query(`select * from foodlist where food_id = ${food_id} `,(err,data)=>{
                    if(err)
                    {
                        res.json({message: 'Error'});
                    }
                    else if(data[0].status !== 'available')
                    {
                        res.json({message:'food is not available'});
                    }
                    else
                    {
                        db.query(`INSERT INTO requests (food_id, charity_id, status) VALUES (${food_id}, ${charity_id}, 'pending')`, (err, data) => {
                            if (err) {
                                res.json({ message: 'Error' });
                            } else {
                                db.query(`UPDATE foodlist SET status = 'claimed' WHERE food_id = ${food_id}`, (err, data) => {
                                    if (err) {
                                        res.json({ message: 'Error' });
                                    } else {
                                        res.json({ message: 'Request made successfully' });
                                    }
                                });
                            }
                        });
                    }
                });
                
            } else {
                res.json({ message: 'You are not a charity' });
            }
        }
    });
});

// Update the status of a request (e.g., 'fulfilled' or 'cancelled')
request.put('/updaterequest/:requestId', (req, res) => {
    
        const  requestId  = req.params.requestId;
        const { status } = req.body;

        
        db.query(`UPDATE requests SET status = '${status}' WHERE request_id = ${requestId}`,(err,data)=>{
            if(err) {
                res.json({ message: 'Request not found' });
            }
            else{
                res.json({ message: 'Request status updated successfully' });
            }
    
            res.json({ message: 'Request status updated successfully' });
        });

        
    
});

// Delete a request (e.g., charity cancels their request)
request.delete('/deleterequest/:requestId', (req, res) => {
    
        const  requestId  = req.params.requestId;
        db.query(`DELETE FROM requests WHERE request_id = ${requestId}`, (err,data)=>{
            if(err) {
                res.json({ message: 'Request not found' });
            }
            else{
                res.json({ message: 'Request deleted successfully' });
            }
    
        });

    
});

// Get all requests by a specific charity
request.get('/charity/:charityId',  (req, res) => {
        const  charityId  = req.params.charityId;
        db.query(`select * from requests where charity_id = ${charityId}`,(err,data)=>{
            if(err) {
                res.json({ message: 'Error' });
            }
            else{
                res.json(data);
            }
        });
    
});

// Get all requests for a specific food item (requested by different charities)
request.get('/foodrequest/:foodId',  (req, res) => {
        const  foodId  = req.params.foodId;
        db.query(`select * from requests where food_id = ${foodId}`,(err,data)=>{
            if(err) {
                res.json({ message: 'Error' });
            }
            else{
                res.json(data);
            }
        });
    
});

// Get all requests
request.get('/all',  (req, res) => {
    db.query(`select * from requests `,(err,data)=>{
        if(err) {
            res.json({ message: 'Error' });
        }
        else{
            res.json(data);
        }
    });

});

module.exports = request;
