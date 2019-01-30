// Email subscription to Mailchimp using jquery
$(document).ready(function() {

  $(".fa-angle-double-down").click(function() {
    $('html,body').animate({
      scrollTop: $(".second-page").offset().top
    },
      'slow');
  });

  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("active");
      var panel = this.nextElementSibling;
      if (panel.style.maxHeight){
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      } 
    });
  }

  ///////////
  // Video //
  ///////////

  // function isiPhone() {
  //   return (
  //     (navigator.platform.indexOf("iPhone") != -1) ||
  //     (navigator.platform.indexOf("iPod") != -1)
  //   );
  // }

  // if (isiPhone()) {
  //   $('.video-container').remove();
  //   $('.front-page').addClass('still-smaller');
  // }

  // if (navigator.userAgent.match(/(iPod|iPhone|iPad)/)) {
  //   $('.video-container').remove();
  //   $('.front-page').addClass('still-smaller');
  // }

  $(window).on("load resize", function() {
    if ($(window).width() > 2048 || $(window).height() > 1080) {
      $('.video-container').hide();
      if ($(window).width() < 3840) {
        $('.front-page').removeClass('still');
        $('.front-page').addClass('still-smaller');
      } else {
        $('.front-page').removeClass('still-smaller');
        $('.front-page').addClass('still');
      }
    } else {
      if ($(window).width() < 900) {
        $('.video-container').hide();
        $('.front-page').addClass('still');
        $('.front-page').removeClass('still-smaller');
      } else {
        $('.video-container').show();
        $('.front-page').removeClass('still');
        $('.front-page').removeClass('still-smaller');
      }
    }
  });



});
