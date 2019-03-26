const express = require('express')
const userRoute = express.Router()
const User = require('../models/userModel')

userRoute.route('/')

        .get((req, res) => {
            User.find((err, users) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(users)
            })
        })




userRoute.route('/:_id')

            .get((req, res) => {
                const {_id} = req.params;
                User.findById(
                    {_id},
                    (err, service) => {
                        if(err) return res.status(500).send(err)
                        return res.status(200).send(service)
                    }
                )
            })

            .put((req, res) => {
                try{
            
                    let user = User.findOneAndUpdate({_id: req.params._id}, req.body)
                    if(user) res.status(200).send(user)
                }
                catch (err){
                    return next(err)
                }
            })


// Need to find all Users that have a specific service
// /services/user/:serviceName

// serviceRoute.get("/user/:servicename", (req, res, next) => {
//     User.find({serviceName: req.param.serviceName.toLowerCase()}, (err, usersWithService) => {
        
//     })
// })


            // serviceRoute('/service/:userID', async(req, res, next) => {
            //     try{
            //         const userResponse = await User.find({_id: req.params.userID})
            //         const servicesResponse = awaitService.find({_id: { $in: userResponse.services}})
            //         return res.status(200).send(servicesResponse)
            //     }
            //     catch(err){
            //         res.status(500)
            //         return next(err)
            //     }
            // })

module.exports = (userRoute)