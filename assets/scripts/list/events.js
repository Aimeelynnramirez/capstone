'use strict';

const getFormFields = require('../../../lib/get-form-fields');

const api = require('./api');
const ui = require('./ui');

const onGetPosts= (event) => {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.signUp(data)
  .then(ui.success)
  .catch(ui.failure);
};

const addPostHandlers = () => {
  $('#posts').on('submit', onGetPosts);
};

module.exports = {
  addPostHandlers,
};
