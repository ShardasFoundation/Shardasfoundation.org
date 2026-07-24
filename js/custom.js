
  (function ($) {
  
  "use strict";

    // COUNTER NUMBERS
    jQuery('.counter-thumb').appear(function() {
      jQuery('.counter-number').countTo();
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height();

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
      scrollTop: totalScroll
      }, 300);
    }
});
 // READ MORE FEATURE
  $('.read-more').click(function (e) {

    e.preventDefault();

    const paragraph = $(this).prev('.cause-text');

    paragraph.toggleClass('show');

    if (paragraph.hasClass('show')) {
      $(this).text('Read Less');
    } else {
      $(this).text('Read More');
    }

  });
    
  })(window.jQuery);


