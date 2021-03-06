const express = require('express')
const router = express.Router()
const acciaioController = require('../../Database/services/PgServices')
router.route('/colata')
    .get(acciaioController.getColata)
    .put(acciaioController.updateColata)
router.route('/colata/:id')
    .get(acciaioController.getColataByID)
    .delete(acciaioController.deleteColata)
module.exports = router