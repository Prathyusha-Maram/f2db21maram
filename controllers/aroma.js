var aroma = require('../models/aroma'); 
 
// List of all Aroma
exports.aroma_list = async function(req, res) { 
    try{ 
        theAroma = await aroma.find(); 
        res.send(theAroma); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
};
 
// for a specific Aroma. 
exports.aroma_detail = function(req, res) { 
    res.send('NOT IMPLEMENTED: Aroma detail: ' + req.params.id); 
}; 
 
// Handle Aroma create on POST. 
exports.aroma_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new aroma(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {aroma_name": "oud","brand": "Oak_oud","price": 109.99} 
    document.aroma_name = req.body.aroma_name; 
    document.brand = req.body.brand; 
    document.price = req.body.price; 
    try{ 
        let result = await document.save(); 
        res.send(result); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 
// Handle Aroma delete form on DELETE. 
exports.aroma_delete = function(req, res) { 
    res.send('NOT IMPLEMENTED: Aroma delete DELETE ' + req.params.id); 
}; 
 
// Handle Aroma update form on PUT. 
exports.aroma_update_put = function(req, res) { 
    res.send('NOT IMPLEMENTED: Aroma update PUT' + req.params.id); 
}; 
// List of all Aroma 

// VIEWS 
// Handle a show all view 
exports.aroma_view_all_Page = async function(req, res) { 
    try{ 
        theAroma = await aroma.find(); 
        res.render('aroma', { title: 'Aroma Search Results', results: theAroma }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
