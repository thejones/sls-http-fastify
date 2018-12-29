'use strict';

// const finish = require('./lib/finish');

// const cleanUpEvent = require('./lib/clean-up-event');
// const getBody = require('./lib/get-body');
// const isBinary = require('./lib/is-binary');
// const dispatch = require('./lib/dispatch');

// const Request = require('./lib/request');
// const Response = require('./lib/response');

const defaultOptions = {
  requestId: 'x-request-id'
};


module.exports = (app) => {
  // const options = Object.assign({}, defaultOptions, opts);
  const handler =  async (event, context) => {

    const options = {
      method: event.httpMethod,
      url: event.path,
      payload: event.body,
      headers: event.headers,
      validate: false
    };


    return await app.inject(options);
    
  };

  return handler;



};
