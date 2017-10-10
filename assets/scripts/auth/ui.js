'use strict';

const app = require('../app.js');
// $('#posts').hide();
$('#change-password').hide();
$('#sign-out').hide();
$('#postsContainer').hide();
$('#posts').hide();

$('.board').hide();
$('.comments').hide();


const success = (data) => {
  if (data) {
    $('.welcome').text('Welcome!')

    // $('#posts').hide();
    // $('#change-password').show();
    console.log(data);
  } else {
    $('.welcome').text('Welcome' + data.user + '!')
    $('#posts').show()

    console.log('Success');

  }
};

const failure = (error) => {
  $('.welcome').text('User name taken or password invaild')
  console.error(error);
};

const signInSuccess = (data) => {
  app.user = data.user;
  $('.welcome').text('Welcome home' + "" + data.user.email + '')

  console.log('Success')
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('#sign-out').show();
  $('#postsContainer').show();
  $('#posts').show()
  $('.logo').hide()
  $('.side').hide()
  $('.comments').show();

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
  // $('.comments').show();
$('#sign-in').show();
$('#posts').show()

  // $('#posts').show();

  // console.log(app.user);
};
const signOutSuccess = () => {
  console.log('User signed out successfully');
  $('#posts').show()

  app.user = null;
};

module.exports = {
  success,
  failure,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
};
