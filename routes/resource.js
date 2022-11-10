var express = require('express'); 
var router = express.Router(); 
 
// Require controller modules. 
var api_controller = require('../controllers/api'); 
var aroma_controller = require('../controllers/aroma'); 
 
/// API ROUTE /// 
 
// GET resources base. 
router.get('/', api_controller.api); 
 
/// Aroma ROUTES /// 
 
// POST request for creating a Aroma.  
router.post('/aroma', aroma_controller.aroma_create_post); 
 
// DELETE request to delete Aroma. 
router.delete('/aroma/:id', aroma_controller.aroma_delete); 
 
// PUT request to update Aroma. 
router.put('/aroma/:id', aroma_controller.aroma_update_put); 
 
// GET request for one Aroma. 
router.get('/aroma/:id', aroma_controller.aroma_detail); 
 
// GET request for list of all Aroma items. 
router.get('/aroma', aroma_controller.aroma_list); 
 
module.exports = router; 