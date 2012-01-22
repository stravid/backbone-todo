/*
  The Todo model represents a single todo item.
  By default it is not finished.
*/
var Todo = Backbone.Model.extend({
  defaults: {
    isFinished: false
  },

  /*
    Override the save method and save the model to the local todos collection.
    Usually the built in save method is used. But this saves the model to the server.
  */
  save: function() {
    todos.add(this);
  }
});