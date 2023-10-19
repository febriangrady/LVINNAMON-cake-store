$('.burger').on('click', function(e) {
    e.preventDefault();
    if ($('.dropDown-burger').is(':hidden')){
        $('body').css('overflow', 'hidden');
        $('.dropDown-burger').css({
            display: 'block',
            left: 'auto', // Reset the left value
            right: '-100%' // Position the dropdown on the right
        }).animate({
            right: '0'
        }, 600);
    } else {
        $('body').css('overflow', 'auto');
        setTimeout(() => {
            navbar.style.position = 'sticky';
        }, 200);
        $('.dropDown-burger').animate({
            right: '-100%'
        }, 600, function() {
            $(this).css('display', 'none')
        });
    }
});

$(document).ready(function() {
    $('#burger-product').click(function(e) {
      e.preventDefault();
      var dropDown = $('.dropDown-details');
      if (dropDown.is(':visible')) {
        dropDown.hide();
      } else {
        dropDown.show();
      }
    });
  });