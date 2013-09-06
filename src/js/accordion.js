(function($) {

  var Accordion = {

    init: function(config) {
      this.el = config.el;
      this.items = this.el.children('li');

      this.events();
    },

    events: function() {
      this.items.on('click', this.toggle);
    },

    toggle: function() {
      var item = $(this);

    }
  }

  Accordion.init({
    el: $('ul.accordion')
  });

}(jQuery));
