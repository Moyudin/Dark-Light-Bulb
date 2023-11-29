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

$(document).ready(function() {
  $('#col-img2').click(function() {
    var image2 = $('#col-img2');
    var Of2 = $('#ON-OFF2');
    if (image2.hasClass('gray-Background')) {
      image2.removeClass('gray-Background');
      image2.addClass('yellow-Background');
      Of2.text("Bulb is ON")
    } else {
      image2.removeClass('yellow-Background');
      image2.addClass('gray-Background');
      Of2.text("Bulb is OFF")
    }
  });
});

$(document).ready(function() {
  $('#col-img3').click(function() {
    var image3 = $('#col-img3');
    var Of3 = $('#ON-OFF3');
    if (image3.hasClass('gray-Background')) {
      image3.removeClass('gray-Background');
      image3.addClass('red-Background');
      Of3.text("Bulb is ON")
    } else {
      image3.removeClass('red-Background');
      image3.addClass('gray-Background');
      Of3.text("Bulb is OFF")
    }
  });
});