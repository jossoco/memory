$( document ).ready(function() {

  var card = Card('paper');
  $('.scene').append(card);

  var el = $('#paper');
  var flipBtn = $('#flip-btn');

  var flip = function () {
    if (el.hasClass('flipped')) {
      el.translate3d({zRotate : 0});
      el.removeClass('flipped');
    } else {
      el.translate3d({zRotate : 180});
      el.addClass('flipped');
    }
  };

  flipBtn.bind('click', flip);

});
