(function(window) {
  "use strict";
  var FORM_SELECTOR = "[data-payment-info=\"form\"]";
  var OVERLAY_SELECTOR = "[data-payment-confirm=\"overlay\"]";
  var App = window.App;
  var PaymentFormHandler = App.PaymentFormHandler;

  var paymentHandler = new PaymentFormHandler(FORM_SELECTOR);
  paymentHandler.addSubmitHandler(OVERLAY_SELECTOR);
})(window);
