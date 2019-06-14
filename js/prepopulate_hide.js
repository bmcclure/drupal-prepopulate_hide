(function ($) {
  'use strict';

  Drupal.behaviors.prepopulateHide = {
    attach: function (context, settings) {
      $('.prepopulate-hide', context).each(function () {
        $(this).closest('.js-form-item').hide();
      });
    }
  };
}(jQuery));
