const express = require('express');
const userRoute = express.Router();
const User = require('../models/userModel.js');

userRoute.route('/')

        .get((req, res) => {
            User.find((err, users) => {
                if(err) return res.status(500).send(err)
                return res.status(200).send(users)
            })
        })

        .post((req, res) => {
            if(Object.keys(req.body).length > 0){
                const newUser = new User(req.body);
                newUser.save(err => {
                    if(err) return res.status(500).send(err)
                    return res.status(200).send(newUser);
                })
            }else{
                res.send('Not a valid user.')
            }
        })

userRoute.route('/:_id')

        .get((req,res) => {
            const {_id}= req.params;
            User.findById(
                {_id},
                (err, user) => {
                    if(err) return res.status(500).send(err)
                    return res.status(200).send(user)
                }
            )
        })

        .delete((req, res) => {
            const {_id} = req.params;
            User.findByIdAndDelete(
                {_id},
                req.body,
                (err, user) => {
                    if(err) return res.status(500).send(err)
                    return res.status(200).send('Item successfully deleted.')
                }
            )
        })

        .put((req, res) => {
            const {_id} = req.params;
            User.findByIdAndUpdate(
                {_id},
                (err, user) => {
                    if(err) return res.status(500).send(err)
                    return res.status(200).send(user)
                }
            )
        })


module.exports = (userRoute)