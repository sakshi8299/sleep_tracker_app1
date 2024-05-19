import express from "express";
import Sleep from "../models/sleepModel.js";
import expressAsyncHandler from "express-async-handler";
import mongoose from "mongoose";

const sleepRouter = express.Router();

// API endpoints :
// 1. Post : Allows users to submit their sleep duration along with a timestamp.
sleepRouter.post("/", expressAsyncHandler( async (req, res) => {
    if(!req.body.userId || !req.body.hours || !req.body.timestamp){
        res.status(400).json({
            message : 'Validation error',
        });
        return ;
    }

    const sleep = new Sleep({
        userId : req.body.userId,
        hours : req.body.hours,
        timestamp : req.body.timestamp
    })
    const createdSleep = await sleep.save();

    if(!createdSleep){
        res.status(401).send({
            message : "Invalid sleeping data",
        });
    }else{
        res.status(201).send({
            message : `Sleeping data added for this userId ${createdSleep.userId}`,
            data : createdSleep,
        })
    }
})
);

// 2. GET : Retrieves a list of all sleep records for a given user , sorted by date.
sleepRouter.get("/:userId", expressAsyncHandler( async (req, res) => {
    const sleep = await Sleep.find({userId : req.params.userId});
    
    if(sleep.length !== 0){
        // sorting of data 
        const sortedSleep = sleep.sort(function(a,b){
            let x = a.timestamp.toLowerCase();
            let y = b.timestamp.toLowerCase();
            
            if(x>y){return 1;} 
            if(x<y){return -1;}
            return 0;
        });
        // sorting of data 
        res.status(200).send(sortedSleep);
    }else{
        res.status(404).send({message : `Sleeps not found with this userId ${req.params.userId}`});
    }

}));

// 3. DELETE : Deletes a specific sleep record by its ID.
sleepRouter.delete("/:recordId", expressAsyncHandler( async (req, res) => {

    if(!mongoose.isValidObjectId(req.params.recordId)){
        res.status(422).send({message : "recordId is not valid mongodb object id"});
    }

    const deletedSleep = await Sleep.findByIdAndDelete( req.params.recordId );

    if(deletedSleep){
        res.status(200).send({message : 'sleep deleted', sleep : deletedSleep});
    } else{
        res.status(404).send({message : `Sleep not found of this recordId ${req.params.recordId}`});
    }

}));

export default sleepRouter;
