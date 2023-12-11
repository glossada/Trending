const { Router } = require('express');
const ReconquistaHoyRouter = require('./ReconquistaHoyRoutes');


const router = Router();

router.use('/recohoy', ReconquistaHoyRouter);





module.exports = router;
