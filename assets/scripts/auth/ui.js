'use strict';

const app = require('../app.js');
$('.board').hide();

$('#change-password').hide();
$('#sign-out').hide();
const success = (data) => {
  if (data) {


    console.log(data);
  } else {
    console.log('Success');
    $('#login-prompt').text('Welcome ' + data.user + '!')

  }
};

const failure = (error) => {
  console.error(error);
  // $('#change-password').text('Try again ' + data.user.email + '!')
//get a place for hide change-password
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log('this Success')
  $('#login-prompt').text('Welcome ' + data.user + '!')
  $('.board').show();
  $('.logo').hide();
  $('#sign-in').hide();
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
