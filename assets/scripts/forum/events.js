'use strict'

const api = require('./api.js');
const ui = require('./ui.js');

const postSubmit = $('#postSubmit').on('click', function() {
  // console.log(posts)
  let headerInput = $('#postHeader').val()
  let bodyInput = $('#postBody').val()
  let data = '{ "title":"' + headerInput + '", "body": "' + bodyInput + '"}'
  $('.post').prepend('<div> <h2>' + headerInput + '</h2><br>' + '<h3>' + bodyInput + '</h3></div>' + '<br><br>')
  let formData = JSON.stringify($('.post').data())
  console.log('Success' + data + "" + "|" + headerInput + "" + "|" + bodyInput)
  $('.prompt').text('successful post made').html()




})
const postDelete = $('#postDelete').on('click', function() {
  let headerInput = $('#postHeader').val()
  let bodyInput = $('#postBody').val()
  let data = '{ "title":"' + headerInput + '", "body": "' + bodyInput + '"}'
  $('.post').prepend('<div> <h2>' +'Header:'+ headerInput + '</h2><br>' + '<h3>' + bodyInput + '</h3></div>'+ '<br><br>').empty()
  $('.prompt').text(' deleted all').html()
  $('.post').prepend('<div> <h2>' + headerInput + '</h2>' + '<h3>' + bodyInput + '</h3></div>')
  $('.prompt').text('Saved on page on while all posts are deleted on DeleteAll').html()
  $('.post').empty().prepend('<div> <h2>' + headerInput + '</h2><br>' + '<h3>' + bodyInput + '</h3></div>'+ '<br><br>')
  $('.prompt').text(' deleted all but Input').html()
  // $('.post').sort().remove()< deletes all instances after delete button
  // let formData = JSON.stringify($('.post').data()).pop() <copies last post
  let formData = JSON.stringify($('.post').data())
  console.log('Success on deleted all')




})


// const postOneDelete = $('#postOneDelete').on('click', function() {
//   let headerInput = $('#postHeader').val()
//   let bodyInput = $('#postBody').val()
//
//   // let data ='{ "title":"' + headerInput +'", "body": "' + bodyInput + '"}'
//   const data = '{ "title":"' + headerInput + '", "body": "' + bodyInput + '"}'
//   $('.post').prepend('<div> <h2>' + headerInput + '</h2><br>' + '<h3>' + bodyInput + '</h3></div>'+ '<br><br>').one()
//   $('.prompt').text(' Update field').html()
//
//   // $('.post').sort().remove()< deletes all instances after delete button
//
//   // let formData = JSON.stringify($('.post').data()).pop() <copies last post
//   let formData = JSON.stringify($('.post').data())
//
//
//   console.log('Success on deleted all')
//
//
//
//
// })
//
// $('#postHeader').val('')
// $('#postBody').val('')

module.exports = {
  postDelete,
  postSubmit
}
// {
// "id": 1,
// "title": "Sample Title 1",
// "body": "Sample body 1"
// },
