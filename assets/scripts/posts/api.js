const app = require('../app.js');

const getPosts = function (data) {
  return $.ajax({
    url: app.host + '/posts',
    method: 'POST',
    data: data,
  });
};

module.exports = {
  getPosts,
}
