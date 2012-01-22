/*
  The TodoItemView is responsible for managing a todo item.
*/
var TodoItemView = Backbone.View.extend({
  // Each todo item is wrapped in a <li> element.
  tagName: 'li',
  initialize: function() {
    // Load the template with jQuery and use Underscores template function for creating the view template.
    this.template = _.template($('#todo-item-template').html());

    // Bind the render method to the change event of the model. The third argument ensures the right context.
    this.model.bind('change', this.render, this);
  },

  /*
    Bind the methods to the according elements and events of a todo item.
  */
  events: {
    'click span.remove': 'remove',
    'dblclick span': 'onDoubleClickHandler',
    'click input[type=button]': 'onClickHandler',
    'keyup input[type=text]': 'onKeyUpHandler',
    'click input[type=checkbox]': 'toggle'
  },

  /*
    The render method fills the template with the models data before
    adding it to the DOM. In order to allow chaining this is returned.
  */
  render: function() {
    var content = this.template(this.model.toJSON());

    $(this.el).html(content);

    return this;
  },
  remove: function() {
    todos.remove(this.model);
  },

  /*
    Displays the elements needed for editing and hides all other elements.
    Sets the focus to the input field.
  */
  onDoubleClickHandler: function() {
    this.$('section').toggle();
    this.$('input[type=text]').focus();
  },

  /*
    Updates the model if the new text has a minimum length if one character.
  */
  update: function() {
    var inputText = this.$('input[type=text]').val();

    if (inputText.length > 0) {
      this.model.set({ text: inputText });
    }
  },
  onClickHandler: function() {
    this.update();
  },

  /*
    The onKeyUpHandler method checks if the Enter key is pressed before calling update.
  */
  onKeyUpHandler: function() {
    if (event.keyCode == 13) {
      this.update();
    }
  },
  toggle: function() {
    // Toggle the isFinished attribute of the model.
    this.model.set({ isFinished: !this.model.get('isFinished') });
  }
});