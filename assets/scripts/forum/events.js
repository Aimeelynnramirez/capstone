'use strict'

const api = require('./api.js');
const ui = require('./ui.js');

const postSubmit = $('#postSubmit').on('click', function() {
  // console.log(posts)
  let headerInput = $('#postHeader').val()
  let bodyInput = $('#postBody').val()
  let data = '{ "title":"' + headerInput + '", "body": "' + bodyInput + '"}'
  $('.post').append('<div> <h5>Title:</h5><br><h2> ' + headerInput + '</h2><br>' + '<h5> Post:</h5><br><h3>' + bodyInput + '</h3></div>' + '<br><br>')
  let formData = JSON.stringify($('.post').data())
  console.log('Success' + data + "" + "|" + typeof headerInput + "" + "|" + bodyInput)
  $('.prompt').text('successful post made below').html()


})
const postDelete = $('#postDelete').on('click', function() {
  let headerInput = $('#postHeader').val()
  let bodyInput = $('#postBody').val()
  let data = '{ "title":"' + headerInput + '", "body": "' + bodyInput + '"}'
  // $('.post').append('<div> <h2>' + 'Header:' + headerInput + '</h2><br>' + '<h3>' + bodyInput + '</h3></div>' + '<br><br>').empty()
  // $('.prompt').text('deleted all!').html()
  $('.post').prepend('<div> <h5>Title:</h5><br><h2> ' + headerInput + '</h2><br>' + '<h5> Post:</h5><br><h3>' + bodyInput + '</h3></div>' + '<br><br>').empty().val()
  $('.prompt').text('deleted! Please create a new post on submit').html()
  $('.post').prepend('<div> <h5>Title:</h5><br><h2> ' + headerInput + '</h2><br>' + '<h5> Post:</h5><br><h3>' + bodyInput + '</h3></div>' + '<br><br>')&& $('.post').empty().val()
  // $('.post').sort().remove()< deletes all instances after delete button
  // let formData = JSON.stringify($('.post').data()).pop() <copies last post
  let formData = JSON.stringify($('.post').data())
  console.log('Success on deleted whole column ')




})

module.exports = {
  postDelete,
  postSubmit
}
// {
// "id": 1,
// "title": "Sample Title 1",
// "body": "Sample body 1"
// },
