TodoInputView = Backbone.View.extend({
  initialize: function() {
    this.template = _.template($('#todo-input-template').html());
  },
  events: {
    'click input[type=button]': 'onClickHandler',
    'keyup input[type=text]': 'onKeyUpHandler'
  },
  render: function() {
    var content = this.template();
    $(this.el).html(content);

    return this;
  },
  onClickHandler: function(event) {
    this.save();
  },
  save: function() {
    var inputText = this.$('input[type=text]').val();

    if (inputText.length < 1) {
      return;
    }
    
    var todo = new Todo({ text: inputText });

    todo.save();

    this.$('input[type=text]').val('');
  },
  onKeyUpHandler: function(event) {
    if (event.keyCode == 13) {
      this.save();
    }
  }
});