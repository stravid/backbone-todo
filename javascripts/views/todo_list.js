TodoListView = Backbone.View.extend({
  initialize: function() {
    this.collection.bind('add', this.render, this);
    this.collection.bind('remove', this.render, this);
    this.collection.bind('reset', this.render, this);
  },
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