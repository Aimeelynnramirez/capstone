'use strict';

const app = require('../app.js')
const config = require('../config.js')

const getPosts = function (data) {
  return $.ajax({
    url: app.host + '/posts',
    method: 'GET',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function (response, textStatus, jqXhr) {
      const posts = response.posts
      console.log(posts.length)
      let count = 0
      for (let i = 0; i < posts.length; i++) {
        const title = posts[i].title
        const body = posts[i].body
        count++
        if (count % 2 === 0) {
          $('#posts').append('<div class="col-md-1"></div><div class= "posts">' + '<h3>' + title + '</h3><h3>'+ body + '</h3>' + '<br><br> <button type="button" class="btn  btn-lg center">Posts</button> '+ '</div>')
        } else {
          $('#posts').append('<div class="col-md-1"></div><div class= "posts">' + '<h3>' + title + '</h3><h3>' + body + '</h3>'+ '<br><br> <button type="button" class="btn  btn-lg center">Posts</button> '+ '</div>')
        }
      }
    }
  })
}


module.exports = {
  getPosts,

};
