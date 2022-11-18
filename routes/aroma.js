var express = require('express');
const aroma_controlers= require('../controllers/aroma');
var router = express.Router();
 

/* GET aroma */
router.get('/', aroma_controlers.aroma_view_all_Page );

/* GET detail aroma page */ 
router.get('/detail', aroma_controlers.aroma_view_one_Page); 

/* GET create aroma page */ 
router.get('/create', aroma_controlers.aroma_create_Page); 

/* GET create update page */ 
router.get('/update', aroma_controlers.aroma_update_Page); 

/* GET delete costume page */ 
router.get('/delete', aroma_controlers.aroma_delete_Page); 
 
module.exports = router;
