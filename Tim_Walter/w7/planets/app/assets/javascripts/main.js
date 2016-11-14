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

    // Normally....
    // $.ajax(options).done(addComment).fail(callFail);

    // modify .done to pass a function which has the callback response passed in (comment). The function then calls addCOmment with two parameters comment and e=event.target
    $.ajax(options).done(function(comment) {
      addComment(comment, e)
    }).fail(callFail);
  });

});


function addComment(comment, e) {
  user = "Posted by User" + comment.user_id;
  // create comment elements and assign text
  $p = $("<p></p>").text(comment.body);
  $h3 = $("<h3></h3>").text(user);
  $h5 = $("<h5></h5>").text(comment.created_at);
  // create new div with comment_cont class
  $comment_div = $("<div>", {
        "class": 'comment_cont'
  });
  // append elements to comment div
  $comment_div.append($p);
  $comment_div.append($h3);
  $comment_div.append($h5);

  // append div with comment to comment_list
  $(e.target).closest('.planet_card').find('.comment_list').prepend($comment_div);

  // clear text area after submit
  $(e.target).closest('.planet_card').find('textarea').val('');
  // hide add comment button after submit
  $(e.target).closest('.planet_card').find('#btn_add').hide();

};


function callFail() {
  message = "Ooops... something went wrong. Try again later."
  console.log(message);
};
