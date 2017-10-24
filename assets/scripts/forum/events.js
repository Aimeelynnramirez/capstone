'use strict'

const api = require('./api.js');
const ui = require('./ui.js');



const postSubmit = $(' #postSubmit').on('click' , function() {
  // console.log(posts)
  let headerInput = $('#postHeader').val()
  let bodyInput = $('#postBody').val()
  $('#postHeader').val('')
  $('#postBody').val('')
  let data = '{"post": {"title":"' + headerInput + '", "body": "' + bodyInput + '"}}'
  console.log(data + ' ' + typeof data)
  $('.posts').append('<div>'+ data +'<h5>Title:</h5><br><h2> ' + headerInput + '</h2><br>' + '<h5> Post:</h5><br><h3>' + bodyInput + '</h3></div>' + '<br><br>')
  let formData =  JSON.stringify($('.posts').data())
  api.makePosts(data)
   $('.prompt').text('successful post made below').html()
// api.newPosts[0].makePosts(formData)

    // $('.makePosts').append( '<div> <h5>Title:</h5><br><h2> ' +  + '</h2><br>' + '<h5> Post:</h5><br><h3>' + api.bodyInput() + '</h3></div>' + '<br><br>')
  // $('.prompt').text('successful post made below').html()
})
// $.post(this).on('click', this).ajaxSend(api.makePosts(posts))

  // console.log(data)


const postDelete = $('#postDelete').on('click', function() {


  // let data = '{ "title":"' + headerInput + '", "body": "' + bodyInput + '"}'
  $('#postHeader').val('').empty()
    $('.post').val('').empty()
  $('#postBody').val('').empty()
  // $('.post').append('<div> <h2>'+ data +  headerInput + bodyInput + '</h2></div>' + '<br><br>').empty()
  // $('.prompt').text('deleted all!').html()
  // $('.post').append('<div> <h5>Title:</h5><br><h2> ' + headerInput + '</h2><br>' + '<h5> Post:</h5><br><h3>' + bodyInput + '</h3></div>' + '<br><br>').empty().val('')
  $('.prompt').text('deleted! Please create a new post on submit').html()
  api.deletePosts()

  // $('.post').sort().remove()< deletes all instances after delete button
  // let formData = JSON.stringify($('.post').data()).pop() <copies last post
  // console.log('Success on deleted whole column ')


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
