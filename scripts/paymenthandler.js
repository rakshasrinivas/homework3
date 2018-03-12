(function(window) {
  "use strict";
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error("No selector provided");
    }

    this.$formElement = $(selector);

    if (this.$formElement.length === 0) {
      throw new Error("Could not find element with selector :" + selector);
    }

  }

  FormHandler.prototype.addSubmitHandler = function(selector) {

    console.log("Setting submit handler for payment form");
    this.$formElement.on("submit", function(event) {
      event.preventDefault();

      this.$element = $(selector);

      var data = {};
      $(this).serializeArray().forEach(function(item) {
        data[item.name] = item.value;
        console.log(item.name + " is " + item.value);
      });
      console.log(data);

      var $overlaydiv = $("<div></div>", {
        "id": "overlay",
        "class": "modal",
        "style": "display: inline-block;"
      });

      var $div = $("<div></div>", {
        "class": "jquery-modal blocker current"
      });

      $overlaydiv.append("<p>Thank you for your payment, " + data["title"] + " " + data["name"] + "</p>")
        .append("Click <a href=\"payment.html\" rel=\"modal:close\">close</a> , to close the overlay")
        .append("<a href=\"payment.html\" rel=\"modal:close\" class=\"close-modal\">Close</a>");

      $div.append($overlaydiv);

      this.$element.append($div);

      $(document.body).attr("style", "overflow: hidden;");

      this.reset();
      this.elements[0].focus();
    });

  };

  App.PaymentFormHandler = FormHandler;
  window.App = App;
})(window);
