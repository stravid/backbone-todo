Todo = Backbone.Model.extend({
  defaults: {
    isFinished: false
  },
  save: function() {
    todos.add(this);
  }
});