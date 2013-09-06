(function($) {

  var Modal = {
    init: function(config) {

      this.trigger = config.trigger;
      this.box = config.box;
      this.close = config.close;

      this.events();
    },
    events: function() {

    },
  }

  Modal.init({
    trigger: $('button.modal-trigger'),
    box: $('div.modal-box'),
    close: $('div.modal-box .close'),
  });

}(jQuery));
