'use strict'

const api = require('./api.js');
const ui = require('./ui.js');

const postSubmit = $('#postSubmit').on('click', function() {
  // console.log(posts)
  let headerInput = $('#postHeader').val()
  let bodyInput = $('#postBody').val()
  // let data ='{ "title":"' + headerInput +'", "body": "' + bodyInput + '"}'
  let data ='{ "title":"' + headerInput +'", "body": "' + bodyInput + '"}'

  $('.post').append( '<div> <h2>' + headerInput+ '</h2><br>'+ '<h3>' + bodyInput +'</h3>')
  let formData = JSON.stringify($('.post').data())
console.log('Success' + data + ""+ "|" + headerInput + "" + "|" + bodyInput)




}
)
// {
// "id": 1,
// "title": "Sample Title 1",
// "body": "Sample body 1"
// },
