module.exports.routes = {

  'GET /api/shoutouts': {controller: 'ShoutoutController', action: 'fetch'},
  'POST /api/shoutouts': {controller: 'ShoutoutController', action: 'create'},

};
