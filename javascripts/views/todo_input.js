/*
  The input view is responsible of creating new todo items.
*/
var TodoInputView = Backbone.View.extend({
  initialize: function() {
    // Load the template with jQuery and use Underscores template function for creating the view template.
    this.template = _.template($('#todo-input-template').html());
  },

  /*
    Bind methods to the click and keyup event.
  */
  events: {
    'click input[type=button]': 'onClickHandler',
    'keyup input[type=text]': 'onKeyUpHandler'
  },

  /*
    The render method uses the template and jQuery to add the element to the DOM.
    In order to allow chaining this is returned.
  */
  render: function() {
    var content = this.template();
    $(this.el).html(content);

    return this;
  },
  onClickHandler: function(event) {
    this.save();
  },

  /*
    The save method creates and saves a new todo item if the
    text has an minimum length of one character.
  */
  save: function() {
    var inputText = this.$('input[type=text]').val();

    if (inputText.length < 1) {
      return;
    }
    
    var todo = new Todo({ text: inputText });

    todo.save();

    this.$('input[type=text]').val('');
  },

  /*
    The onKeyUpHandler method checks if the Enter key is pressed before calling save.
  */
  onKeyUpHandler: function(event) {
    if (event.keyCode == 13) {
      this.save();
    }
  }
});