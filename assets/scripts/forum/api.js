'use strict';

const app = require('../app.js')
const config = require('../config.js')


const getPosts = function (data, b) {
  return $.ajax({
    url: app.host + '/posts',
    method: 'GET',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(response) {
      console.log(b)
      const posts = response.posts
      console.log(posts)
      for (let i = 0; i < posts.length; i++) {
        var id = JSON.stringify(posts[i].id)
        var title = JSON.stringify(posts[i].title)
        var body = JSON.stringify(posts[i].body)
        // console.log(title + ' | ' + body)
        $('.post').append('<div>' + '' + id + '' + '<h5>Title:</h5><br><h2> ' + title + '</h2><br>' + '<h5> Post:</h5><br><h3>' + body + '</h3> </div> <br><br>')
      }
    }
  })
 }

// "title": "Sample Title 1",
// "body": "Sample body 1"

const makePosts = function (data, a) {
  console.log('api create Post made')
  return $.ajax({
    url: app.host + '/posts',
    method: 'POST',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: data,
    success: function(data) {
      console.log(a)
      console.log(b)
      console.log(c)
      //$('.post').append('<div>' + '<h5>Id:</h5>' + posts[i].id + '' + '<h5>Title:</h5><br><h2> ' + headerInput.title + '</h2><br>' + '<h5> Post:</h5><br><h3>' + bodyInput.body + '</h3> </div> <br><br>')
      // for (let i = 0; i < posts.length; i++) {
        // var id = JSON.stringify(posts[i].id)
        // var title = JSON.stringify(posts[i].title)
        // var body = JSON.stringify(posts[i].body)
      // JSON.stringify( $('#makePosts').append('<div> <h5>Id:</h5><br><h2> ' + id[i] + '</h2><h5>Title:</h5><br><h2> ' + title[i] + '</h2><br>' + '<h5> Post:</h5><br><h3>' + bodyInput[i] + '</h3></div>' + '<br><br>' +  headerInput + '' ))
  // }

    }
  })

}
const deletePosts = function (data, c) {
  console.log('api delete Post made')
  return $.ajax({
    url: app.host + '/posts',
    method: 'DELETE',
    success: function(data) {
      console.log(c)
    }
  })
}

         module.exports = {
          getPosts,
          makePosts,
          deletePosts
        }
