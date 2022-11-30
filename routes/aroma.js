var express = require('express');
const aroma_controlers= require('../controllers/aroma');
var router = express.Router();
 
// A little function to check if we have an authorized user and continue on 
//or 
// redirect to login. 
const secured = (req, res, next) => { 
  if (req.user){ 
    return next(); 
  } 
  req.session.returnTo = req.originalUrl; 
  res.redirect("/login"); 
} 

/* GET aroma */
router.get('/', aroma_controlers.aroma_view_all_Page );

/* GET detail aroma page */ 
router.get('/detail', aroma_controlers.aroma_view_one_Page); 

/* GET create aroma page */ 
router.get('/create',secured, aroma_controlers.aroma_create_Page); 

/* GET create update page */ 
router.get('/update',secured, aroma_controlers.aroma_update_Page); 

/* GET delete aroma page */ 
router.get('/delete',secured, aroma_controlers.aroma_delete_Page); 

module.exports = router;
