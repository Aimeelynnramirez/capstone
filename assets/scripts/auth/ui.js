'use strict';

const app = require('../app.js');
// $('.board').hide();
//   $('.quotes').hide();
// $('#change-password').hide();
// $('#sign-out').hide();
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
//get a place for hide change-password
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log('this Success')
  $('.welcome').text('Welcome ' + data.user + '!')
  $('.board').show();
  $('.logo').hide();
  $('#sign-in').hide();
   $('.quotes').show();
  $('#sign-out').show();
  $('#sign-up').hide();
  $('#sign-in').hide();

  // console.log(app.user);
};

const signUpSuccess = (data) => {
  app.user = data.user;

  // console.log(app.user);
};
const signOutSuccess = () => {
  console.log('User signed out successfully');

  app.user = null;
};

module.exports = {
  success,
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
};
