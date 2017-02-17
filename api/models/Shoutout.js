var cuid = require('cuid');

module.exports = {

  autoPK: false,

  attributes: {

    id: {
        type: 'string',
        primaryKey: true,
        defaultsTo: function (){ return cuid(); },
        unique: true,
        index: true
    },

    content: {
      type: 'string',
      size: 300
    },

    ip_address: {
      type: 'string'
    },

    time: {
      type: 'string'
    }

  }

};
