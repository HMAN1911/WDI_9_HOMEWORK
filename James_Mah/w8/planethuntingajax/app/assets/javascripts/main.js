$(window).load(function(){
  $('.home-btn').on('click', function(event) {
    event.preventDefault();
    $('.index-page').show();
    $('.show-page').hide();
    $('.new-page').hide();
    $('.edit-page').hide();
  });

  $('.show-btn').on('click', function(event) {
    event.preventDefault();
    var id = $(event.target).closest('.planet').find('input').val();
    $('.index-page').hide();
    updateShowPage(id);
    $('.show-page').show();
  });

  $('.show-page form:eq(1)').submit(function(event) {
    event.preventDefault();
    $('.show-page').hide();
    $('.edit-page').show();

  });

  $('.show-page form:eq(0)').submit(function(event) {
    event.preventDefault();
    $('.show-page').hide();
    var id = $(".show-page input[name='id']").val();
    $.ajax({
      method: 'delete',
      url: '/planets/' + id,
    }).done(function(data){
      $('.index-page').show();
      $(".planet > input[value="+ id +"]").closest(".planet").remove();
    });
  });

  $('.new-page form').on('submit',function(event) {

    event.preventDefault();

  });

  $('.edit-page form').on('submit',function(event) {
    event.preventDefault();
    var id = $(".show-page input[name='id']").val();
    $.ajax({
      method: 'patch',
      url: '/planets/' + id,
      data: {
        id: id,
        name: $(".edit-page input[name='name']").val(),
        photo_url: $(".edit-page input[name='photo_url']").val(),
        distance_sun: $(".edit-page input[name='distance_sun']").val(),
        volume: $(".edit-page input[name='volume']").val(),
        density: $(".edit-page input[name='density']").val()
      }
    }).done(function(data){
      console.log(data);
      console.log('hi');
      $('.edit-page').hide();
      updateShowPage(id);
      $('.show-page').show();
    });
  });

});

function updateShowPage(id) {
  $.ajax({
      url: '/planets/' + id,
    }).done(function(data){
      $('.show-page h3').text(data.name);
      $('.show-page img').attr("src", data.photo_url);
      $('.show-page span:eq(0)').text(data.distance_sun);
      $('.show-page span:eq(1)').text(data.volume);
      $('.show-page span:eq(2)').text(data.density);

      $(".show-page input[name='id']").val(id);
      $(".edit-page input[name='name']").val(data.name);
      $(".edit-page input[name='photo_url']").val(data.photo_url);
      $(".edit-page input[name='distance_sun']").val(data.distance_sun);
      $(".edit-page input[name='volume']").val(data.volume);
      $(".edit-page input[name='density']").val(data.density);
    });
}