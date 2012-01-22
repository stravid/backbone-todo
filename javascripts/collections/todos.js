/*
  The Todos collection holds Todo models.
*/
var Todos = Backbone.Collection.extend({
  model: Todo
});

// Create a new Todos collection.
var todos = new Todos();