# sls-http-fastify

## Description

Use serverless-http! 
This was forked from that ONLY so I can try to get something working with Fastify.
If I get it working and cleaned up I will submit back to that. 
If it is drastically different it will become something else. 

### Supported Frameworks

* Fastify (kinda).

### Supported Providers

* AWS

## Usage example coming soon.

```javascript
const serverless = require('serverless-http');
// more code
```

## Limitations

Your code is running in a serverless environment. You cannot rely on your server being 'up' in the sense that you can/should not use in-memory sessions, web sockets, etc. You are also subject to provider specific restrictions on request/response size, duration, etc.

> Think of this as a familiar way of expressing your app logic, *not* trying to make serverless do something it cannot.

## Contributing

Pull requests are welcome! Especially test scenarios for different situations and configurations.
