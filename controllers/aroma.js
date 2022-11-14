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
 
// for a specific aroma. 
exports.aroma_detail = async function(req, res) {     
    console.log("detail"  + req.params.id)     
    try { 
        result = await aroma.findById( req.params.id)         
    res.send(result)     } 
    catch (error) {         
        res.status(500) 
    res.send(`{"error": document for id ${req.params.id} not found`); 
} 
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
exports.aroma_delete = async function(req, res) {     
    console.log("delete "  + req.params.id)     
    try { 
        result = await aroma.findByIdAndDelete( req.params.id)         
        console.log("Removed " + result) 
        res.send(result)     
    } 
    catch (err) {         
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
    } 
}; 

 
// Handle aroma update form on PUT. 
exports.aroma_update_put = async function(req, res) {     
    console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)     
try { 
        let toUpdate = await aroma.findById( req.params.id) 
        // Do updates of properties         
                if(req.body.aroma_name)  
                    toUpdate.aroma_name = req.body.aroma_name;        
                if(req.body.brand) 
                    toUpdate.brand = req.body.brand;         
                if(req.body.price) 
                    toUpdate.price = req.body.price;         
                let result = await toUpdate.save();         
                console.log("Sucess " + result) 
                res.send(result)     
    } 
        catch (err) {         
            res.status(500)         
            res.send(`{"error": ${err}: Update for id ${req.params.id} failed`); 
    } 
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
