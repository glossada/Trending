const { Router } = require('express');
const excersiseRouter = require('./excersiseRoutes');


const router = Router();

router.use('/excersise', excersiseRouter);





module.exports = router;
