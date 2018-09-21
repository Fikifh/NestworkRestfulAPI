const express = require('express');
const userRoutes = require('./userRoute');
const authRoutes = require('./auth');
const presentRoutes = require('./presentRoute');
const cutiRoutes = require('./cutiRoute');
const slipGajiRoutes = require('./slipGajiRoute');
const company = require('./perusahaanRoute');
const router = express.Router();

/**
 * get api/status
 */
router.get('/status',(req, res) =>res.send('ok'));

/**
 * GET api/docs
 */
router.use('/docs', express.static('docs'));

router.use('/users', userRoutes);
router.use('/auth', authRoutes);
router.use('/present', presentRoutes);
router.use('/cuti', cutiRoutes);
router.use('/company', company);
router.use('/slipGaji', slipGajiRoutes);

module.exports = router;
