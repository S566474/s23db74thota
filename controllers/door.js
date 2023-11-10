var doors= require('../models/Door');

exports.door_list = async function (req, res) {
  try {
    const doorList = await doors.find();
    res.json(doorList);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
};
// for a specific Costume.
exports.door_detail = async function(req, res) {
 console.log("detail" + req.params.id)
 try {
 result = await doors.findById( req.params.id)
 res.send(result)
 } catch (error) {
 res.status(500)
 res.send(`{"error": document for id ${req.params.id} not found`);
 }
};
// Handle Costume update form on PUT.
exports.door_update_put = async function(req, res) {
 console.log(`update on id ${req.params.id} with body 
${JSON.stringify(req.body)}`)
 try {
 let toUpdate = await doors.findById( req.params.id)
 // Do updates of properties
 if(req.body.door_Name) 
 toUpdate.door_Name = req.body.door_Name;
 if(req.body.door_color) toUpdate.door_color = req.body.door_color;
 if(req.body.door_height) toUpdate.door_height = req.body.door_height;
 let result = await toUpdate.save();
 console.log("Sucess " + result)
 res.send(result)
 } catch (err) {
 res.status(500)
 res.send(`{"error": ${err}: Update for id ${req.params.id} 
failed`);
 }
};







exports.door_create_post =async  function(req, res) {

 console.log(req.body)
 let document=new doors()
 document.door_Name=req.body.door_Name;
 document.door_color=req.body.door_color;
 document.door_height=req.body.door_height;
 try{
  let result=await document.save();
  res.send(result);
 }
 catch(err)
 {
  res.status(500);
  res.send(`{"error": ${err}}`)
 }
};


exports.door_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: door delete DELETE ' + req.params.id);
};
