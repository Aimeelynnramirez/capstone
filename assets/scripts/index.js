'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events.js');
const postsEvents = require('./list/api.js');


$(() => {
//   list.forEach(function(posts){
//   // Do some action.
// });
  postsEvents.getPosts()

  // postsEvents.makePosts()

  setAPIOrigin(location, config)
  authEvents.addHandlers();


// add( String [, String] )

})


// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
require('./example')
