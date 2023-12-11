const express = require('express');
const getAllNews =require('../RecoqnuistaHoyHandler/getAllNews');
const ReconquistaHoyRouter = express.Router();


ReconquistaHoyRouter.get('/',(req,res)=>{
    getAllNews(req,res);
})



module.exports=ReconquistaHoyRouter;