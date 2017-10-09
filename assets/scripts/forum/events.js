'use strict'

const api = require('./api.js');
const ui = require('./ui.js');

const postSubmit = $('#postSubmit').on('click', function() {
  // console.log(posts)
  let headerInput = $('#postHeader').val()
  let bodyInput = $('#postBody').val()
  let data ='{ "title":"' + headerInput +'", "body": "' + bodyInput + '"}'
  $('#posts').text(data).html()
  var formData = JSON.stringify($('#posts').data());
console.log('success ' + data )




}
)
// {
// "id": 1,
// "title": "Sample Title 1",
// "body": "Sample body 1"
// },
