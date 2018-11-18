//////////
// Date //
//////////

// Set the date we're counting down
var countDownDate = new Date("Feb 7, 2019 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);


//////////
// Mail //
//////////

// Email subscription to Mailchimp using jquery
$(document).ready(function() {

  $('form').submit(function(event) {
    var userEmail = $('#email').val();

    event.preventDefault();

    $.ajax({
      url: '/',
      type: 'POST',
      data: {
        email: userEmail
      },
      success: function(response) {
        console.log(response);
      }
    });
  });

  $(".button-container").click(function() {
    $('html,body').animate({
      scrollTop: $(".page2").offset().top
    },
      'slow');
  });
});
