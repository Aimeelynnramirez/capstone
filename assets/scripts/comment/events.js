'use strict'

const api = require('./api');
const ui = require('./ui');

const commentSubmit = $('#commentSubmit').on('click', function() {
  let contentInput = $('#commentContent').val()
  $('#commentContent').val('')
  let data = '{ "content":"' + contentInput + '"}'
  $('.comments').prepend('<div><h5>Comments:</h5> <h3>' + contentInput + '</h3></div><br><br>')
  let formData = JSON.stringify($('.comments').data())
   api.makeComment(data, commentSubmit)



}
//  var addItem = function () {
)
//    var input = document.getElementsByTagName('input')[0];
//    var data = input.value;
//
//    var newFormData = document.createElement('div');
//    newItem.innerHTML = newItemText;
//    document.getElementById('todo-list').appendChild(newItem);
//  };
//
//  document.getElementsByTagName('button')[0].addEventListener('click', addItem);
//
//    }
// console.log('Success'+ "" + "|"  + data + "" + "|" +  typeof contentInput + "")



const commentDelete = $('#commentsDelete').on('click', function() {
  let contentInput = $('#commentContent').val()
  $('#commentContent').val('')
  let data = '{ "content":"' + contentInput + '"}'
  $('.comments').prepend('<div><h5>Comments:</h5> <h3>' + contentInput + '</h3></div><br><br>').val() && $('.comment').val()
  // console.log('Success'+ "" + "|"  + data + "" + "|" +  typeof contentInput + "")
  $('.comments').prepend('<div><h5>Comments:</h5> <h3>' + contentInput + '</h3></div><br><br>').empty() && $('.comment').val()
  $('.prompts').text(' deleted! Please create a new post on submit').html()
  let formData = JSON.stringify($('.comments').data())
  console.log('Success on deleted whole column')



})

module.exports = {
  commentSubmit,
  commentDelete

}
