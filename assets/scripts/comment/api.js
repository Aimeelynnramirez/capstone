'use strict'


const app = require('../app.js')
const config = require('../config.js')

const getComments = function (data) {
  return $.ajax({
    url: app.host + '/comments',
    method: 'GET',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(response) {
      const comments = response.comments
      console.log(comments)
      for (let i = 0; i < comments.length; i++) {
        let content = JSON.stringify(comments[i].content)
        console.log(content)
        $('.comments').append('<div> <h1>Comments</h1><h3>' + content + '</h3></div> <br><br>')
      }
    }
  })
  }


module.exports = {
  getComments,
}