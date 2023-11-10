var express = require('express');
const house_controlers= require('../controllers/house');
var router = express.Router();

/* GET home page. */
router.get('/', house_controlers.house_view_all_Page );

// GET request for one costume.
router.get('/house/:id', house_controlers.house_detail);
module.exports = router;

