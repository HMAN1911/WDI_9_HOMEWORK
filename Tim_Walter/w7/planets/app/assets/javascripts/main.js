$( document ).ready(function() {
  // Hide Comments and show image by default
  $('.comments').hide();
  $('.planet_image').show();

  // Comments button shows comments
  $(document).on('click', '#btn_comment', function (e) {
    e.preventDefault();
    $( e.target ).closest('.planet_card').find('.comments').toggle();
    $( e.target ).closest('.planet_card').find('#btn_add').show();
  });

  // clicking on planet image shows comments
  $(document).on('click', '.planet_image', function (e) {
    e.preventDefault();
    $( e.target ).closest('.planet_card').find('.comments').show();
  });

  // Add Comment via ajax
  $(document).on('click', '#btn_add', function (e) {
    // prevent form sending form
    e.preventDefault()


    // variables for ajax url and comment body
    url = $( e.target ).closest('.planet_card').find('form').attr("action")
    body = $( e.target ).closest('.planet_card').find('textarea').val();

    // ajax options
    var options = {
      url: "/api" + url,
      data: {
        body: body
      },
      type: "POST"
    }
    $.ajax(options).done(addComment).fail(callFail);

  });

});


function addComment(comment) {
  user = "Posted by User" + comment.user_id;
  update_comment = "#planet_" + comment.planet_id;
  $(update_comment).append("<p></p>");
  $(update_comment).append("<h3></h3>");
  $(update_comment).append("<h5></h5>");
  $(update_comment).find("p").append(comment.body);
  $(update_comment).find("h3").append(user);
  $(update_comment).find("h5").append(comment.created_at);
  $(update_comment).prepend('<hr />');
  $(update_comment).closest('.planet_card').find('textarea').val('');
  $(update_comment).closest('.planet_card').find('#btn_add').hide();
  console.log('YAAY ITS DONE!!!!');
  console.log(comment.body);
  console.log(update_comment);
  console.log(user);
  console.log(comment.created_at);
  console.log(comment.planet_id);
};


function callFail() {
  message = "Ooops... something went wrong. Try again later."
  console.log(message);
};
