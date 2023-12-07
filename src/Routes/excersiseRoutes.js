const express = require('express');
const postExcersise = require('../Handlers/excersiseHandlers/postExcersise');
const getAllxccersises =require('../Handlers/excersiseHandlers/getAllExcesises');
const excersiseRouter = express.Router();


excersiseRouter.get('/',(req,res)=>{
    getAllxccersises(req,res);
})

excersiseRouter.put('/',(req,res)=>{
    postExcersise(req,res);
})

module.exports=excersiseRouter;