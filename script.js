$(document).ready(function() {
  $('#col-img').click(function() {
    var image = $('#col-img');
    var Of = $('#ON-OFF');
    if (image.hasClass('gray-Background')) {
      image.removeClass('gray-Background');
      image.addClass('white-Background');
      Of.text("Bulb is ON")
    } else {
      image.removeClass('white-Background');
      image.addClass('gray-Background');
      Of.text("Bulb is OFF")
    }
  });
});