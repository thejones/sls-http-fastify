'use strict';

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


    const res = await app.inject(options);

    const response = {
      statusCode: res.statusCode,
      body: res.body
    };

    return response;
    
  };

  return handler;



};
