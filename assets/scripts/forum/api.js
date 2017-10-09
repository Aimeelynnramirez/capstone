'use strict';

const app = require('../app.js')
const config = require('../config.js')


const getPosts = function (data) {
  return $.ajax({
    url: app.host + '/posts',
    method: 'GET',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function(response) {
      const posts = response.posts
      console.log(posts)
      for (let i = 0; i < posts.length; i++) {
        var title = JSON.stringify(posts[i].title)
        var body = JSON.stringify(posts[i].body)
        // console.log(title + ' | ' + body)
        $('.posts').append('<div> <h2>' + title + '</h2><br> <h3>' + body + '</h3> <br> <br> <button type="button" class="btn  btn-lg center">Posts</button> </div> <br><br>')
      }
    }
  })
 }


// "title": "Sample Title 1",
// "body": "Sample body 1"

const makePosts = function (data) {
  return $.ajax({
    url: app.host + '/posts',
    method: 'POST',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: data,
    success: function(response, data, jqXhr) {
      console.log(response + ' ' + data + ' ' + jqXhr)

    //   const posts = response.posts
    //   // console.log(posts)
    //   for (let i = 0; i < posts.length; i++) {
    //     var title = JSON.stringify(posts[i].title)
    //     var body = JSON.stringify(posts[i].body)
    //     $('#posts').push('<div> <h2>' + title + '</h2><br> <h3>' + body + '</h3> <br> <br> <button type="button" class="btn  btn-lg center">Posts</button> </div> <br><br>')
    //   }
    // }
  }
  })
}
  //   }
  // })
  // }


         module.exports = {
          getPosts,
          makePosts
        }
