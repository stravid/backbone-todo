TodoItemView = Backbone.View.extend({
  tagName: 'li',
  initialize: function() {
    this.template = _.template($('#todo-item-template').html());
    this.model.bind('change', this.render, this);
  },
  events: {
    'click span.remove': 'remove',
    'dblclick span': 'onDoubleClickHandler',
    'click input[type=button]': 'onClickHandler',
    'keyup input[type=text]': 'onKeyUpHandler',
    'click input[type=checkbox]': 'toggle'
  },
  render: function() {
    var content = this.template(this.model.toJSON());

    $(this.el).html(content);

    return this;
  },
  remove: function() {
    todos.remove(this.model);
  },
  onDoubleClickHandler: function() {
    this.$('section').toggle();
    this.$('input[type=text]').focus();
  },
  update: function() {
    var inputText = this.$('input[type=text]').val();

    if (inputText.length > 0) {
      this.model.set({ text: inputText });
    }
  },
  onClickHandler: function() {
    this.update();
  },
  onKeyUpHandler: function() {
    if (event.keyCode == 13) {
      this.update();
    }
  },
  toggle: function() {
    this.model.set({ isFinished: !this.model.get('isFinished') });
  }
});