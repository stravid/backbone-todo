/*
  TodoListView is responsible for displaying the list of todo items.
*/
var TodoListView = Backbone.View.extend({
  initialize: function() {
    // Bind the render method to the change, add and remove events of the collection.
    // The third argument ensures the right context.
    this.collection.bind('add', this.render, this);
    this.collection.bind('remove', this.render, this);
    this.collection.bind('reset', this.render, this);
  },

  /*
    The render function creates for every todo item a new TodoItemView and stores the rendered result in an array.
    This way the DOM is edited only once which gives a big performance boost.
    In order to allow chaining this is returned.
  */
  render: function() {
    var elements = [];

    this.collection.each(function(model) {
      var view = new TodoItemView({ model: model });

      elements.push(view.render().el);
    });

    $(this.el).empty();
    $(this.el).append(elements);

    return this;
  }
});