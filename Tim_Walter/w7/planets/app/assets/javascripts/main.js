$( document ).ready(function() {
  $('.comments').hide();
  $('.planet_image').show();

  console.log("HELLOO");

  $(document).on('click', '#btn_comment', function (e) {
    e.preventDefault();
    $( e.target ).closest('.planet_card').find('.comments').toggle();
  });

  $(document).on('click', '.planet_image', function (e) {
    e.preventDefault();
    $( e.target ).closest('.planet_card').find('.comments').show();
  });




});
