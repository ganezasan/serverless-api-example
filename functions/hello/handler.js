'use strict';

module.exports.handler = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Hello world!!',
      input: event,
    }),
  };

  callback(null, response);
};
