'use strict';

const app = require('../app.js');
// $('#posts').hide();
$('#change-password').hide();
$('#sign-out').hide();
$('#postsContainer').hide();
$('#posts').hide();
$('.post').hide();
$('#post').hide();
$('h4').hide();
$('.posts').hide();
$('.signoutBottom').hide();
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
    $('.posts').show();

    console.log('Success');

  }
};

const failure = (error) => {
  $('.welcome').text('User name taken or password invaild')
  console.error(error);
};

const signInSuccess = (data) => {

  $('.welcome').text('Welcome Back' + '"' + data.user.email + '"' )

  console.log('Success')
  $('.prompt').text('Please click on Delete All to make brand new posts')
  $('.prompts').text('Please click on Delete All to make brand new posts')
  $('h4').show();
  $('.signoutBottom').show();
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('#sign-out').show();
  $('#postsContainer').show();
  $('.side').hide()
  $('.comments').show();
  $('#posts').show();
  $('.post').show();
  $('#post').show();
  $('.posts').show();
  $('.board').show ();
  $('.commentAlert').hide();

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
$('#sign-out').show();
$('h4').show();
 // console.log(app.user);
};
const signOutSuccess = () => {
  $('.welcome').text('Come again soon!')

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
