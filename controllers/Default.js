'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.userGET = function userGET (req, res, next) {
  Default.userGET(req.swagger.params, res, next);
};
