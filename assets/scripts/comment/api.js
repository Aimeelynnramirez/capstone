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
      for (let i = 0; i < comments.length; i++) {
        const content = JSON.stringify(comments[i].content)
        console.log(content)
        $('#comments').append('<br><br><div> <h5>Comments</h5><h3>' + content + '</h3>' + '</div> <br><br>')
      }

    }
  })
  }
const makeComment = function (data) {
  return $.ajax({
    url: app.host + '/commments',
    method: 'POST',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: data,
    success: function(response, data, jqXhr) {
      const comments = response.comments
      console.log(comments)
      for (let i = 0; i < comments.length; i++) {
        const content = JSON.stringify(comments[i].content)
        console.log(content)
        $('#comments').append('<br><br><div> <h5>Comments</h5><h3>' + content + '</h3>' + '</div> <br><br>')

}
    }
  })
}
const deleteComments = function (data) {
  return $.ajax({
    url: app.host + '/comments',
    method: 'DELETE',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: data,
    success: function(response, data, jqXhr) {
      const comments = response.comments
      console.log(comments)
      for (let i = 0; i < comments.length; i++) {
        let comments = JSON.stringify(comments[i].content)
        $('#comments').pop('<br><br><div> <h5>Comments</h5><h3>' + content + '</h3>' + '</div> <br><br>')
      }
}

  })
}
module.exports = {
  getComments,
  makeComment,
  deleteComments
}
