var house = require('../models/house');
// List of all houses
exports.house_list = function (req, res) {
    res.send('NOT IMPLEMENTED: house list');
};
// for a specific house.
// for a specific house.
exports.house_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await house.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};
// Handle house create on POST.
exports.house_create_post = function (req, res) {
    res.send('NOT IMPLEMENTED: house create POST');
};
// Handle house delete form on DELETE.
// Handle house delete on DELETE.
exports.house_delete = async function (req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await house.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
};

// Handle house update form on PUT.
// Handle house update form on PUT.
exports.house_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await house.findById(req.params.id)
        // Do updates of properties
        if (req.body.house_type)
            toUpdate.houseName = req.body.houseName;
        if (req.body.price) toUpdate.price = req.body.price;
        if (req.body.description) toUpdate.description = req.body.description;
        if (req.body.checkboxsale) toUpdate.sale = true;
        else toUpdate.same = false;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

// List of all houses
exports.house_list = async function (req, res) {
    try {
        thehouse = await house.find();
        res.send(thehouse);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.house_view_all_Page = async function (req, res) {
    try {
        thehouse = await house.find();
        res.render('house', { title: 'house Search Results', results: thehouse });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle house create on POST.
exports.house_create_post = async function (req, res) {
    console.log(req.body)
    let document = new house();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"house_type":"goat", "cost":12, "size":"large"}
    document.houseName = req.body.houseName;
    document.price = req.body.price;
    document.description = req.body.description;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// Handle a show one view with id specified by query
exports.house_view_one_Page = async function(req, res) {
console.log("single view for id " + req.query.id)
try{
result = await house.findById( req.query.id)
res.render('housedetail',
{ title: 'house Detail', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};