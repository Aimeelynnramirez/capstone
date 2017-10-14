'use strict';
const http = require("http");
setInterval(function() {
    http.get("https://backendcapstone.herokuapp.com/");
}, 300000);

const app = {
  // host: 'http://localhost:4741/'
host: 'https://backendcapstone.herokuapp.com/'
};

module.exports = {
  app,
  http
}
