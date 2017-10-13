'use strict'

const api = require('./api.js');
const ui = require('./ui.js');

const commentSubmit = $('#commentSubmit').on('click', function() {
  console.log(comments)
  let contentInput = $('#commentContent').val()
  let data ='{ "content":"' + contentInput + '"}'
  $('.comments').prepend('<div><h5>Comments:</h5> <h3>' +  contentInput + '</h3></div><br><br>')
  let formData = JSON.stringify($('.comments').data())
  // console.log('Success'+ "" + "|"  + data + "" + "|" +  typeof contentInput + "")
  $('.commentAlert').text('Sign-Up or In to see the comments!').html()
  $('.commentAlert').text('Thanks for the Comment').html()
  $('.prompts').text('Sucessful comment made above').html()
  $('.prompts').text('').html()
})
  const commentDelete = $('#commentsDelete').on('click', function() {
    let contentInput = $('#commentContent').val()
    let data ='{ "content":"' + contentInput + '"}'
    $('.comments').prepend('<div><h5>Comments:</h5> <h3>' +  contentInput + '</h3></div><br><br>').val() && $('.comment').val()
    // console.log('Success'+ "" + "|"  + data + "" + "|" +  typeof contentInput + "")
    $('.comments').prepend('<div><h5>Comments:</h5> <h3>' +  contentInput  + '</h3></div><br><br>').empty() && $('.comment').val()
    $('.prompts').text(' deleted! Please create a new post on submit').html()
    let formData = JSON.stringify($('.comments').data())
    console.log('Success on deleted whole column')



  })

module.exports = {
commentSubmit,
commentDelete

}
