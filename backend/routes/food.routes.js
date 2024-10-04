const food = require('express').Router();
const db = require('../database/db_conection');
const bcrypt = require('bcrypt');
const { query } = require('express');
const jwt = require('jsonwebtoken');

// API to add a new food donation
food.post('/add', (req, res) => {
        const { user_id, food_name, quantity, description, expiration_date } = req.body;
        
        db.query(`select * from users where user_id = ${user_id}`,(err,data)=>{
            if(err)
            {
                res.json({message: 'Error'});
                console.log(err);
            }
            else
            {
                if(data[0].user_type == 'donor')
                {
                    db.query(`INSERT INTO foodlist (user_id, food_name, quantity, description, expiration_date, status) VALUES (${user_id},'${food_name}' , ${quantity}, '${description}', '${expiration_date}', 'available')`,(err,data)=>{
                        if(err)
                        {
                            res.json({message: 'Error'});
                        }
                        else
                        {
                            res.json({message: 'Food Added Successfully'});
                        }
                    });
                }
                else
                {
                    res.json({message: 'You are not a donor'});
                }
            }
        });
        
});

// API to get all available food items
food.get('/available',(req,res)=>{
    db.query(`select * from foodlist where status = 'available'` ,(err,data)=>{
        if(err)
        {
            res.json({message: 'Error'});
        }
        else
        {
            res.json(data);
        }
    });
});

// API to get all donations by a specific donor
food.get('/donor/:user_id',(req,res)=>{
    const user_id = req.params.user_id;
    db.query(`select * from foodlist where user_id = ${user_id}`,(err,data)=>{
        if(err)
            {
                res.json({message: 'Error'});
                console.log(err);
            }
            else
            {
                res.json(data);
            }
    });
});

food.delete('/deletefood/:food_id',(req,res)=>{
    const food_id = req.params.food_id;
    db.query(`delete from foodlist where food_id = ${food_id}` ,(err,data)=>{
        if(err)
            {
                res.json({message: 'Error'});
                console.log(err);
            }
            else
            {
                res.json({message: 'food deleted successfully'});
            }
    });
});







module.exports = food;