const express = require('express')
const router = express.Router()
const acciaioController = require('../../Database/services/PgServices')
router.route('/acciaio')
    .get(acciaioController.getAcciaio)
    .put(acciaioController.updateAcciaio)
router.route('/acciaio/:id')
    .get(acciaioController.getAcciaioById)
module.exports = router