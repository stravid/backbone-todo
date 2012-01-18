TodoApplication = Backbone.Router.extend({
  routes: {
    '': 'index'
  },
  index: function() {
    todoInputView = new TodoInputView({ collection: todos, el: '#todo-input'});
    todoListView = new TodoListView({ collection: todos, el: '#todos'});
    
    todoInputView.render();
  }
});