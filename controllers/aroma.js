var aroma = require('../models/aroma'); 
 
// List of all aroma 
exports.aroma_list = async function(req, res) { 
    try{ 
        thearoma = await aroma.find(); 
        res.send(thearoma); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
 

 
// Handle aroma create on POST. 
exports.aroma_create_post = async function(req, res) { 
    console.log(req.body) 
    let document = new aroma(); 
    // We are looking for a body, since POST does not have query parameters. 
    // Even though bodies can be in many different formats, we will be picky 
    // and require that it be a json object 
    // {"aroma_type":"goat", "cost":12, "size":"large"} 
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
 
 
// Handle Costume update form on PUT. 
exports.aroma_update_put = async function(req, res) { 
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`) 
    try { 
        let toUpdate = await aroma.findById( req.params.id) 
        // Do updates of properties 
        if(req.body.aroma_name)  toUpdate.aroma_name = req.body.aroma_name; 
        if(req.body.brand) toUpdate.brand = req.body.brand; 
        if(req.body.price) toUpdate.price = req.body.price; 
        let result = await toUpdate.save(); 
        console.log("Sucess " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`); 
    } 
};  
 
exports.aroma_view_all_Page = async function(req, res) { 
    try{ 
        thearoma = await aroma.find(); 
        res.render('aroma', { title: 'aroma Search Results', results: thearoma }); 
    } 
    catch(err){ 
        res.status(500); 
        res.send(`{"error": ${err}}`); 
    }   
}; 
// for a specific aroma. 
exports.aroma_detail = async function(req, res) { 
    console.log("detail"  + req.params.id) 
    try { 
        result = await aroma.findById( req.params.id) 
        res.send(result) 
    } catch (error) { 
        res.status(500) 
        res.send(`{"error": document for id ${req.params.id} not found`); 
    } 
}; 
// Handle aroma delete on DELETE. 
exports.aroma_delete = async function(req, res) { 
    console.log("delete "  + req.params.id) 
    try { 
        result = await aroma.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 
  
 // Handle a show one view with id specified by query 
exports.aroma_view_one_Page = async function(req, res) { 
    console.log("single view for id "  + req.query.id) 
    try{ 
        result = await aroma.findById( req.query.id) 
        res.render('aromadetail', { title: 'aroma Detail', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for creating a aroma. 
// No body, no in path parameter, no query. 
// Does not need to be async 
exports.aroma_create_Page =  function(req, res) { 
    console.log("create view") 
    try{ 
        res.render('aromacreate', { title: 'aroma Create'}); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle building the view for updating a costume. 
// query provides the id 
exports.aroma_update_Page =  async function(req, res) { 
    console.log("update view for item "+req.query.id) 
    try{ 
        let result = await aroma.findById(req.query.id) 
        res.render('aromaupdate', { title: 'aroma Update', toShow: result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
// Handle a delete one view with id from query 
exports.aroma_delete_Page = async function(req, res) { 
    console.log("Delete view for id "  + req.query.id) 
    try{ 
        result = await aroma.findById(req.query.id) 
        res.render('aromadelete', { title: 'aroma Delete', toShow: 
result }); 
    } 
    catch(err){ 
        res.status(500) 
        res.send(`{'error': '${err}'}`); 
    } 
}; 
 
 