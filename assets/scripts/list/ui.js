'use strict';

const app = require('../app.js');

const success = (data) => {
  if (data) {
  console.log(data);
  } else {
    console.log('Success');
    $('.welcome').text('Welcome ' + data.user + '!')

  }
};

const failure = (error) => {
  console.error(error);
  $('.welcome').text('please'+ '' + ' re-enter')
};

const getPostsSuccess = (data) => {
  app.user = data.user;
  console.log('this successfully')
  $('.board').show();

  // console.log(app.user);
};

module.exports = {
  success,
  failure,
  getPostsSuccess,
};
