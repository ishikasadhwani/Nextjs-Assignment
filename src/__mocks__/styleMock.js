// __mocks__/styleMock.js
module.exports = new Proxy(
  {},
  {
    get: (target, prop) => prop,
  }
);
