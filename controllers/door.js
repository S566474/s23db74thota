var doors = require('../models/Door');

exports.door_list = async function (req, res) {
  try {
    const doorList = await doors.find();
    res.json(doorList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};

// For a specific Costume.
exports.door_detail = async function(req, res) {
  console.log("detail" + req.params.id);
  try {
    result = await doors.findById(req.params.id);
    res.send(result);
  } catch (error) {
    res.status(500);
    res.send(`{"error": document for id ${req.params.id} not found`);
  }
};

// Handle Costume update form on PUT.
exports.door_update_put = async function(req, res) {
  console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
  try {
    let toUpdate = await doors.findById(req.params.id);
    
    // Do updates of properties
    if (req.body.door_Name) 
      toUpdate.door_Name = req.body.door_Name;
    if (req.body.door_color) 
      toUpdate.door_color = req.body.door_color;
    if (req.body.door_height) 
      toUpdate.door_height = req.body.door_height;

    let result = await toUpdate.save();
    console.log("Success " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
  }
};

exports.door_create_post = async function(req, res) {
  console.log(req.body);
  let document = new doors();
  document.door_Name = req.body.door_Name;
  document.door_color = req.body.door_color;
  document.door_height = req.body.door_height;

  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};

// Handle Costume delete on DELETE.
exports.door_delete = async function(req, res) {
  console.log("delete " + req.params.id);
  try {
    result = await doors.findByIdAndDelete(req.params.id);
    console.log("Removed " + result);
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": Error deleting ${err}}`);
  }
};

// Handle a show one view with id specified by query
exports.door_view_one_Page = async function(req, res) {
  console.log("single view for id " + req.query.id)
  try{
  result = await doors.findById( req.query.id)
  res.render('doordetail',
 { title: 'door Detail', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
 };

 // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.door_create_Page = function(req, res) {
  console.log("create view")
  try{
  res.render('doorcreate', { title: 'door Create'});
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
 };

 // Handle building the view for updating a costume.
// query provides the id
exports.door_update_Page = async function(req, res) {
  console.log("update view for item "+req.query.id)
  try{
  let result = await doors.findById(req.query.id)
  res.render('doorupdate', { title: 'door Update', toShow: result });
  }
  catch(err){
  res.status(500)
  res.send(`{'error': '${err}'}`);
  }
 };

 // Handle a delete one view with id from query
exports.door_delete_Page = async function(req, res) {
console.log("Delete view for id " + req.query.id)
try{
result = await doors.findById(req.query.id)
res.render('doordelete', { title: 'Cdoor Delete', toShow:
result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};

