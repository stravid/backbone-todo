/*
  The todo application has only one single page.
  When the user opens the application the needed views are created and displayed.
*/
var TodoApplication = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function() {
    // On creation each view gets a DOM element and a collection assigned.
    todoInputView = new TodoInputView({ collection: todos, el: '#todo-input'});
    todoListView = new TodoListView({ collection: todos, el: '#todos'});
    
    todoInputView.render();
  }
});