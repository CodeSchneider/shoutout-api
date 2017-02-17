var moment = require('moment');

module.exports = {

  'fetch': function(req,res,next) {
    Shoutout.find().limit(10).sort('createdAt DESC').exec(function(err,shoutouts){
      if (err) {
        sails.log.error(err);
        return res.send(500);
      }
      return res.send(shoutouts);
    });
  },

  'create': function(req,res,next) {
    var shoutout = req.param('shoutout');
    var time = moment().format("dddd, MMMM Do, h:mm:ss a");
    Shoutout.create( { content: shoutout, ip_address: req.ip, time: time } ).exec(function(err,shoutout){
      if (err) {
        sails.log.error(err);
        return res.send(500);
      }
      sails.sockets.blast('shoutout', shoutout);
      return res.send(200);
    });
  }

}
