var express = require('express'); 
const aroma_controlers= require('../controllers/aroma'); 
var router = express.Router(); 
 
/* GET costumes */ 
router.get('/', aroma_controlers.aroma_view_all_Page ); 
module.exports = router; 