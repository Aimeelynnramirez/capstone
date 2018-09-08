webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var config = {
  apiOrigins: {
    production: 'https://backendcapstone.herokuapp.com'

    //production: 'http://localhost:4741'
  }
};

module.exports = config;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var app = {
  // host: 'http://localhost:4741/'
  host: 'https://backendcapstone.herokuapp.com'
};

module.exports = app;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = true;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = function addNestedValue(pojo, name, value) {
  var recurse = function recurse(pojo, keys, value) {
    var key = keys.shift();
    var next = keys[0];
    if (next === '') {
      // key is an array
      pojo[key] = pojo[key] || [];
      pojo[key].push(value);
    } else if (next) {
      // key is a parent key
      pojo[key] = pojo[key] || {};
      recurse(pojo[key], keys, value);
    } else {
      // key is the key for value
      pojo[key] = value;
    }

    return pojo;
  };

  var keys = name.split('[').map(function (k) {
    return k.replace(/]$/, '');
  });
  return recurse(pojo, keys, value);
};

module.exports = addNestedValue;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var app = __webpack_require__(2);
var config = __webpack_require__(1);

var getPosts = function getPosts(data, b) {
  return $.ajax({
    url: app.host + '/posts',
    method: 'GET',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function success(response) {
      console.log(b);
      var posts = response.posts;
      console.log(posts);
      for (var i = 0; i < posts.length; i++) {
        var id = JSON.stringify(posts[i].id);
        var title = JSON.stringify(posts[i].title);
        var body = JSON.stringify(posts[i].body);
        // console.log(title + ' | ' + body)
        $('.post').append('<div>' + '' + id + '' + '<h5>Title:</h5><br><h2> ' + title + '</h2><br>' + '<h5> Post:</h5><br><h3>' + body + '</h3> </div> <br><br>');
      }
    }
  });
};

// "title": "Sample Title 1",
// "body": "Sample body 1"

var makePosts = function makePosts(data, a) {
  console.log('api create Post made');
  return $.ajax({
    url: app.host + '/posts',
    method: 'POST',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: data,
    success: function success(data) {
      console.log(a);
      console.log(b);
      console.log(c);
      //$('.post').append('<div>' + '<h5>Id:</h5>' + posts[i].id + '' + '<h5>Title:</h5><br><h2> ' + headerInput.title + '</h2><br>' + '<h5> Post:</h5><br><h3>' + bodyInput.body + '</h3> </div> <br><br>')
      // for (let i = 0; i < posts.length; i++) {
      // var id = JSON.stringify(posts[i].id)
      // var title = JSON.stringify(posts[i].title)
      // var body = JSON.stringify(posts[i].body)
      // JSON.stringify( $('#makePosts').append('<div> <h5>Id:</h5><br><h2> ' + id[i] + '</h2><h5>Title:</h5><br><h2> ' + title[i] + '</h2><br>' + '<h5> Post:</h5><br><h3>' + bodyInput[i] + '</h3></div>' + '<br><br>' +  headerInput + '' ))
      // }
    }
  });
};
var deletePosts = function deletePosts(data, c) {
  console.log('api delete Post made');
  return $.ajax({
    url: app.host + '/posts',
    method: 'DELETE',
    success: function success(data) {
      console.log(c);
    }
  });
};

module.exports = {
  getPosts: getPosts,
  makePosts: makePosts,
  deletePosts: deletePosts
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var api = __webpack_require__(5);
var ui = __webpack_require__(16);

var postSubmit = $(' #postSubmit').on('click', function () {
  // console.log(posts)
  var headerInput = $('#postHeader').val();
  var bodyInput = $('#postBody').val();
  $('#postHeader').val('');
  $('#postBody').val('');
  var data = '{"post": {"title":"' + headerInput + '", "body": "' + bodyInput + '"}}';
  console.log(data + ' ' + (typeof data === 'undefined' ? 'undefined' : _typeof(data)));
  $('.posts').append('<div>' + data + '<h5>Title:</h5><br><h2> ' + headerInput + '</h2><br>' + '<h5> Post:</h5><br><h3>' + bodyInput + '</h3></div>' + '<br><br>');
  var formData = JSON.stringify($('.posts').data());
  api.makePosts(data);
  $('.prompt').text('successful post made below').html();
  // api.newPosts[0].makePosts(formData)

  // $('.makePosts').append( '<div> <h5>Title:</h5><br><h2> ' +  + '</h2><br>' + '<h5> Post:</h5><br><h3>' + api.bodyInput() + '</h3></div>' + '<br><br>')
  // $('.prompt').text('successful post made below').html()
});
// $.post(this).on('click', this).ajaxSend(api.makePosts(posts))

// console.log(data)


var postDelete = $('#postDelete').on('click', function () {

  // let data = '{ "title":"' + headerInput + '", "body": "' + bodyInput + '"}'
  $('#postHeader').val('').empty();
  $('.post').val('').empty();
  $('#postBody').val('').empty();
  // $('.post').append('<div> <h2>'+ data +  headerInput + bodyInput + '</h2></div>' + '<br><br>').empty()
  // $('.prompt').text('deleted all!').html()
  // $('.post').append('<div> <h5>Title:</h5><br><h2> ' + headerInput + '</h2><br>' + '<h5> Post:</h5><br><h3>' + bodyInput + '</h3></div>' + '<br><br>').empty().val('')
  $('.prompt').text('deleted! Please create a new post on submit').html();
  api.deletePosts();

  // $('.post').sort().remove()< deletes all instances after delete button
  // let formData = JSON.stringify($('.post').data()).pop() <copies last post
  // console.log('Success on deleted whole column ')

});

module.exports = {
  postDelete: postDelete,
  postSubmit: postSubmit
  // {
  // "id": 1,
  // "title": "Sample Title 1",
  // "body": "Sample body 1"
  // },

};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var app = __webpack_require__(2);
var config = __webpack_require__(1);

var getComments = function getComments(data) {
  return $.ajax({
    url: app.host + '/comments',
    method: 'GET',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    success: function success(response) {
      var comments = response.comments;
      for (var i = 0; i < comments.length; i++) {
        var _content = JSON.stringify(comments[i].content);
        console.log(_content);
        $('#comments').append('<br><br><div> <h5>Comments</h5><h3>' + _content + '</h3>' + '</div> <br><br>');
      }
    }
  });
};
var makeComment = function makeComment(data) {
  return $.ajax({
    url: app.host + '/commments',
    method: 'POST',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: data,
    success: function success(response, data, jqXhr) {
      var comments = response.comments;
      console.log(comments);
      for (var i = 0; i < comments.length; i++) {
        var _content2 = JSON.stringify(comments[i].content);
        console.log(_content2);
        $('#comments').append('<br><br><div> <h5>Comments</h5><h3>' + _content2 + '</h3>' + '</div> <br><br>');
      }
    }
  });
};
var deleteComments = function deleteComments(data) {
  return $.ajax({
    url: app.host + '/comments',
    method: 'DELETE',
    contentType: 'application/json; charset=utf-8',
    dataType: 'json',
    data: data,
    success: function success(response, data, jqXhr) {
      var comments = response.comments;
      console.log(comments);
      for (var i = 0; i < comments.length; i++) {
        var _comments = JSON.stringify(_comments[i].content);
        $('#comments').pop('<br><br><div> <h5>Comments</h5><h3>' + content + '</h3>' + '</div> <br><br>');
      }
    }

  });
};
module.exports = {
  getComments: getComments,
  makeComment: makeComment,
  deleteComments: deleteComments
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


window.onload = function () {
  var index = __webpack_require__(9);
  var styles = __webpack_require__(19);
};

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// load manifests
// scripts
// const index = require('./assets/scripts/index.js')

// // styles
// const styles = require('./assets/styles/index.css')

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var setAPIOrigin = __webpack_require__(10);
var config = __webpack_require__(1);
var authEvents = __webpack_require__(12);
var forumApi = __webpack_require__(5);

var forumEvents = __webpack_require__(6);
var commentEvents = __webpack_require__(17);

var commentsApi = __webpack_require__(7);

$(function () {

  //   // Do some action.
  // });

  // $('#posts').on('load', getPosts)
  forumApi.getPosts();
  commentsApi.getComments();

  // postsEvents.makePosts()
  setAPIOrigin(location, config);
  authEvents.addHandlers();

  // add( String [, String] )
});

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
__webpack_require__(3);
__webpack_require__(6);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var parseNestedQuery = __webpack_require__(11);

/*
  possibilites to handle and example URLs:

  client local, api local
    http://localhost:7165/
  client local, api remote
    http://localhost:7165/?environment=production
  client remote, api local
    https://ga-wdi-boston.github.io/browser-template/?environment=development
    This will require allowing "unsafe scripts" in Chrome
  client remote, api remote
    https://ga-wdi-boston.github.io/browser-template/
*/

var setAPIOrigin = function setAPIOrigin(location, config) {
  // strip the leading `'?'`
  var search = parseNestedQuery(location.search.slice(1));

  if (search.environment === 'development' || location.hostname === 'localhost' && search.environment !== 'production') {
    if (!(config.apiOrigin = config.apiOrigins.development)) {
      var port = +'GA'.split('').reduce(function (p, c) {
        return p + c.charCodeAt().toString(16);
      }, '');
      config.apiOrigin = 'http://localhost:' + port;
    }
  } else {
    config.apiOrigin = config.apiOrigins.production;
  }
};

module.exports = setAPIOrigin;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = __webpack_require__(4);

var parseNestedQuery = function parseNestedQuery(queryString) {
  return queryString.split('&').reduce(function (memo, element) {
    if (element) {
      var keyValuePair = element.split('=');
      memo = addNestedValue(memo, decodeURIComponent(keyValuePair[0]), decodeURIComponent(keyValuePair[1]));
    }

    return memo;
  }, {});
};

module.exports = parseNestedQuery;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var getFormFields = __webpack_require__(13);

var api = __webpack_require__(14);
var ui = __webpack_require__(15);

var onSignUp = function onSignUp(event) {
  event.preventDefault();
  var data = getFormFields(event.target);
  api.signUp(data).then(ui.success).catch(ui.failure);
};

var onSignIn = function onSignIn(event) {
  event.preventDefault();
  var data = getFormFields(event.target);
  api.signIn(data).then(ui.signInSuccess).catch(ui.failure);
};

var onSignOut = function onSignOut(event) {
  event.preventDefault();
  api.signOut().then(ui.signOutSuccess).catch(ui.failure);
};

var onChangePassword = function onChangePassword(event) {
  event.preventDefault();
  var data = getFormFields(event.target);
  api.changePassword(data).then(ui.success).catch(ui.failure);
};

var addHandlers = function addHandlers() {
  $('#sign-up').on('submit', onSignUp);
  $('#sign-in').on('submit', onSignIn);
  $('#sign-out').on('submit', onSignOut);
  $('#change-password').on('submit', onChangePassword);
};

module.exports = {
  addHandlers: addHandlers
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addNestedValue = __webpack_require__(4);

var getFormFields = function getFormFields(form) {
  var target = {};

  var elements = form.elements || [];
  for (var i = 0; i < elements.length; i++) {
    var e = elements[i];
    if (!e.hasAttribute('name')) {
      continue;
    }

    var type = 'TEXT';
    switch (e.nodeName.toUpperCase()) {
      case 'SELECT':
        type = e.hasAttribute('multiple') ? 'MULTIPLE' : type;
        break;
      case 'INPUT':
        type = e.getAttribute('type').toUpperCase();
        break;
    }

    var name = e.getAttribute('name');

    if (type === 'MULTIPLE') {
      for (var _i = 0; _i < e.length; _i++) {
        if (e[_i].selected) {
          addNestedValue(target, name, e[_i].value);
        }
      }
    } else if (type !== 'RADIO' && type !== 'CHECKBOX' || e.checked) {
      addNestedValue(target, name, e.value);
    }
  }

  return target;
};

module.exports = getFormFields;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var app = __webpack_require__(2);
var config = __webpack_require__(1);

var signUp = function signUp(data) {
  return $.ajax({
    url: app.host + '/sign-up',
    method: 'POST',
    data: data
  });
};

var signIn = function signIn(data) {
  return $.ajax({
    url: app.host + '/sign-in',
    method: 'POST',
    data: data
  });
};

var signOut = function signOut() {
  return $.ajax({
    url: app.host + '/sign-out/' + app.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  });
};

var changePassword = function changePassword(data) {
  return $.ajax({
    url: app.host + '/change-password/' + app.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: data
  });
};

module.exports = {
  signUp: signUp,
  signIn: signIn,
  signOut: signOut,
  changePassword: changePassword
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var app = __webpack_require__(2);
// $('#posts').hide();
$('#change-password').hide();
$('#sign-out').hide();
$('#postsContainer').hide();
$('#posts').hide();
$('.post').hide();
$('#post').hide();
$('h4').hide();
$('.posts').hide();
$('.signoutBottom').hide();
$('.board').hide();
$('.comments').hide();

var success = function success(data) {
  if (data) {
    $('.welcome').text('Welcome!');

    // $('#posts').hide();
    // $('#change-password').show();
    console.log(data);
  } else {
    $('.welcome').text('Welcome' + data.user + '!');
    $('#posts').show();
    $('.posts').show();

    console.log('Success');
  }
};

var failure = function failure(error) {
  $('.welcome').text('User name taken or password invaild');
  console.error(error);
};

var signInSuccess = function signInSuccess(data) {

  $('.welcome').text('Welcome Back' + '"' + data.user.email + '"');

  console.log('Success');
  $('.prompt').text('Please click on Delete All to make brand new posts');
  $('.prompts').text('Please click on Delete All to make brand new posts');
  $('h4').show();
  $('.signoutBottom').show();
  $('#sign-up').hide();
  $('#sign-in').hide();
  $('#sign-out').show();
  $('#postsContainer').show();
  $('.side').hide();
  $('.comments').show();
  $('#posts').show();
  $('.post').show();
  $('#post').show();
  $('.posts').show();
  $('.board').show();
  $('.commentAlert').hide();

  // $('.welcome').text('Welcome ' + data.user.email + '!')
  // $('#change-password').show();
  // $('#posts').show();
  // $('#sign-in').hide();
  // $('#sign-out').show();
  // $('#sign-up').hide();

  // console.log(app.user);
};

var signUpSuccess = function signUpSuccess(data) {
  app.user = data.user;
  $('.welcome').text('User name taken or password invaild');
  // $('.comments').show();
  $('#sign-in').show();
  $('#sign-out').show();
  $('h4').show();
  // console.log(app.user);
};
var signOutSuccess = function signOutSuccess() {
  $('.welcome').text('Come again soon!');

  console.log('User signed out successfully');
  $('#posts').show();

  app.user = null;
};

module.exports = {
  success: success,
  failure: failure,
  signUpSuccess: signUpSuccess,
  signInSuccess: signInSuccess,
  signOutSuccess: signOutSuccess
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// const app = require('../app.js');
// // $('#posts').hide()
// const success = (data) => {
//   if (data) {
//
//   } else {
//     console.log('Success');
//     $('#posts').show()
//
//   }
// };
//
// const failure = (error) => {
//   $('#posts').show()
//
// };
//
// // const getPostsSuccess = (data) => {
// //   app.user = data.user;
// //   $('#posts').show()
// //   // console.error(error);
// //
// //   console.log('Success')
// //
// // }
// const makePostsSuccess = (data) => {
//   app.user = data.user;
//   console.log('Success')
//
// }

module.exports = {};
//   success,
//   failure,
//   makePostsSuccess,
//   // getPostsSuccess
// }
//

// 'use strict';
//
// const app = require('../app.js');
//
// const success = (data) => {
//   if (data) {
//   console.log(data);
//   } else {
//     console.log('Success');
//     $('.welcome').text('Welcome ' + data.user + '!')
//
//   }
// };
//
// const failure = (error) => {
//   console.error(error);
//   $('.welcome').text('please'+ '' + ' re-enter')
// };
//
// const getPostsSuccess = (data) => {
//   app.user = data.user;
//   console.log('this successfully')
//   $('.board').show();
//
//   // console.log(app.user);
// };
//
// module.exports = {
//   success,
//   failure,
//   getPostsSuccess,
// };

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var api = __webpack_require__(7);
var ui = __webpack_require__(18);

var commentSubmit = $('#commentSubmit').on('click', function () {
  var contentInput = $('#commentContent').val();
  $('#commentContent').val('');
  var data = '{ "content":"' + contentInput + '"}';
  $('.comments').prepend('<div><h5>Comments:</h5> <h3>' + contentInput + '</h3></div><br><br>');
  var formData = JSON.stringify($('.comments').data());
  api.makeComment(data, commentSubmit);
}
//  var addItem = function () {
);
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


var commentDelete = $('#commentsDelete').on('click', function () {
  var contentInput = $('#commentContent').val();
  $('#commentContent').val('');
  var data = '{ "content":"' + contentInput + '"}';
  $('.comments').prepend('<div><h5>Comments:</h5> <h3>' + contentInput + '</h3></div><br><br>').val() && $('.comment').val();
  // console.log('Success'+ "" + "|"  + data + "" + "|" +  typeof contentInput + "")
  $('.comments').prepend('<div><h5>Comments:</h5> <h3>' + contentInput + '</h3></div><br><br>').empty() && $('.comment').val();
  $('.prompts').text(' deleted! Please create a new post on submit').html();
  var formData = JSON.stringify($('.comments').data());
  console.log('Success on deleted whole column');
});

module.exports = {
  commentSubmit: commentSubmit,
  commentDelete: commentDelete

};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(20);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(22)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(21)(false);
// imports


// module
exports.push([module.i, "/*@import \"~bootstrap/scss/bootstrap\";\n @import './theme';\n@import './color'; */\n\n\n\nbody {\nbackground: url('https://i.imgur.com/Uup339g.jpg');\ncolor: black;\n  text-align: center;\n  width: 100%;\n  height: 70%;\n  max-height: 600px;\n  border-radius: 1% 3%;\n  border: 1px grey;\n  text-shadow: 1px .5px 2px grey;\n position: absolute;\n}\nimg {\n    width:100%;\n    height:100%;\n    max-height:300px;\n    max-width:300px;\n}\nfieldset{\n    position: relative;\n    width:100%;\n    max-width:100px;\n\n}\n\nh1 {\n  text-align: center;\n  background: white;\n  position: center;\n  border: 2px dotted #DB7093;\nbox-shadow: 1px 3px solid black;\n  color: black;\n}\n\nh2 {\n  text-align: center;\n  background: white;\n  color: black;\n\n}\n\nh3 {\n\n  border-radius: 1% 3%;\n  border: 1px rgb(15, 11, 11);\n  background: white;\n  color: black;\n  font-size: 1.3rem;\n}\n\nh4 {\n  background: pink;\n  border: 2px black;\n  box-shadow: 1px 3px;\n  width: 100%;\n  text-align :center;\n  color: black;\n}\n\nh5 {\n  text-align :center;\n  background: white;\n  color: black;\n\n}\n\np {\n  text-align: center;\n  box-shadow: 1px 3px solid black;\n  color: black;\n}\n\n.commentAlert {\n  background: white;\n  color:black;\n}\n.row {\n  text-align: center;\n  background: white;\n  color: black;\n\n\n}\n\n.quotes {\n  position: center;\n  width: 700px;\n  color: black;\n  max-width: 100%;\n}\n\n.container-fluid {\n  background: white;\n  max-width: 400px;\n  position: center;\n  padding:2em 5em;\n  color: black;\n  width: 100%;\n  text-align: center;\n  border: 2px  solid pink;\n}\n\n.comments {\n  text-align: center;\n  background: white;\n  width: 100%;\n  color: black;\n\n}\n\n.board {\n  text-align: center;\n  color: black;\n}\n\n.welcome {\n  background: yellow;\n  color: black;\n  font-size: 18px;\n  box-shadow: 1px 3px solid black;\n\n}\n\narticle {\n  background: white;\n  color: black;\n  text-align: center;\n  width: 70%;\n  margin:auto;\n  padding-left: 20%;\n  border-radius: 1% 3%;\n  border: 1px grey;\n}\n\n.welcome{\n  text-align: center;\n  background: pink;\n}\n\n.prompt {\n  background: yellow;\n  border: 1px grey;\n\n\n}\n.prompts {\n  background: yellow;\n  border: 1px grey;\n\n\n\n\n}\n\n.posts {\n  color: black;\n  text-align: center;\n  width: 100%;\n  height: 100%;\n  background: white;\n\n}\n\n#postsContainer {\n  text-align: center;\n  background: lightpink;\n  color: black;\n  background: white;\n}\n\n#sign-in {\n  width: 100%;\n\n}\n\n#posts {\n  background: white;\n  color: black;\n}\n", ""]);

// exports


/***/ }),
/* 21 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(23);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 23 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
],[8]);