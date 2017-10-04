'use strict';

const app = require('../app.js');

const getPosts = function (data) {
  return $.ajax({
    url: app.host + '/posts',
    method: 'GET',
    data: data,
  });
};

const makePosts = function (data) {
  return $.ajax({
    url: app.host + '/posts',
    method: 'POST',
    data: data,
  });
};


module.exports = {
  getPosts,
  makePosts,

};
