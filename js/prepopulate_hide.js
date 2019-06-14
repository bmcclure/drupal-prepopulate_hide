(function ($) {
  'use strict';

  Drupal.behaviors.prepopulateHide = {
    attach: function (context, settings) {
      $('.prepopulate-hide', context).each(function () {
        $(this).hide();
      });
    }
  };
}(jQuery));
