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
  $('.prompts').text('successful comment made').html()
})
  const commentDelete = $('#commentsDelete').on('click', function() {
    let contentInput = $('#commentContent').val()
    let data ='{ "content":"' + contentInput + '"}'
    $('.comments').prepend('<div><h5>Comments:</h5> <h3>' +  contentInput + '</h3></div><br><br>').val()
    // console.log('Success'+ "" + "|"  + data + "" + "|" +  typeof contentInput + "")
    $('.comments').prepend('<div><h5>Comments:</h5> <h3>' +  contentInput  + '</h3></div><br><br>').empty() && $('.comment').val()
    $('.prompts').text(' deleted all').html()
    let formData = JSON.stringify($('.comments').data())
    console.log('Success on deleted all')



  })

module.exports = {
commentSubmit,
commentDelete

}
