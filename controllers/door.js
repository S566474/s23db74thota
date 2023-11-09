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





exports.door_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: door detail: ' + req.params.id);
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
exports.door_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: door update PUT ' + req.params.id);
};