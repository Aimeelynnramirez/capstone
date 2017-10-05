'use strict';

const app = require('../app.js');
// $('#posts').hide();
$('#change-password').hide();
$('#sign-out').hide();
$('#postsContainer').hide();
$('.board').hide();

const success = (data) => {
  if (data) {
    $('.welcome').text('Welcome!')

    // $('#posts').hide();
    // $('#change-password').show();
    console.log(data);
  } else {
    console.log('Success');
    $('.welcome').text('Welcome' + data.user+ '!')

  }
};

const failure = (error) => {
  $('.welcome').text('User name taken or password invaild')
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  console.log('Success')
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('#sign-out').show();
  $('#postsContainer').show();
  $('.board').show ();


  // $('.welcome').text('Welcome ' + data.user.email + '!')
  // $('#change-password').show();
  // $('#posts').show();
  // $('#sign-in').hide();
  // $('#sign-out').show();
  // $('#sign-up').hide();

  // console.log(app.user);
};

const signUpSuccess = (data) => {
  app.user = data.user;
  $('.welcome').text('User name taken or password invaild')

$('#sign-in').show();
  // $('#posts').show();

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
