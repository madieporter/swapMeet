const express = require('express')
const serviceRoute = express.Router()
const Service = require('../models/serviceModel')

serviceRoute.route('/')

        .get((req, res) => {
            Service.find((err, services) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(services)
            })
        })

        .post((req, res) => {
            if(Object.keys(req.body).length > 0){
                const newService = new Service(req.body);
                newService.user = req.user._id;
                newService.save(err => {
                    if(err) return res.status(500).send(err)
                    return res.status(200).send(newService);
                })
            }else{
                res.send('Not a valid service.')
            }
        })


serviceRoute.route('/:_id')

            .get((req, res) => {
                const {_id} = req.params;
                Service.findById(
                    {_id},
                    (err, service) => {
                        if(err) return res.status(500).send(err)
                        return res.status(200).send(service)
                    }
                )
            })


            .delete((req, res) => {
                const {_id} = req.params;
                Service.findByIdAndDelete(
                    {_id},
                    req.body,
                    (err, service) => {
                        if(err) return res.status(500).send(err)
                        return res.status(200).send('Service successfully deleted.')
                    }
                )
            })

            .put((req, res) => {
                const {_id} = req.params;
                Service.findByIdAndUpdate(
                    {_id},
                    req.body,
                    (err, service) => {
                        if(err) return res.status(500).send(err)
                        return res.status(200).send(service)
                    }
                )
            })


module.exports = (serviceRoute)