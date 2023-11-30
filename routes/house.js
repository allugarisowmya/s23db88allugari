var express = require('express');
const house_controlers= require('../controllers/house');
var router = express.Router();
// A little function to check if we have an authorized user and continue on
//or
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}

/* GET home page. */
router.get('/', house_controlers.house_view_all_Page );

/* GET detail house page */
router.get('/detail', secured, house_controlers.house_view_one_Page);
/* GET create house page */
router.get('/create', secured, house_controlers.house_create_Page);
/* GET create update page */
router.get('/update', secured, house_controlers.house_update_Page);
/* GET delete house page */
router.get('/delete', secured, house_controlers.house_delete_Page);

module.exports = router;

