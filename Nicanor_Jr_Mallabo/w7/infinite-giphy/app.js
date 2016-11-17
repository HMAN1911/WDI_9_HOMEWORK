$(document).ready(function() {
    console.log('Giphy is ready!')
    var loading = false;
    var options = {
        url: "http://api.giphy.com/v1/gifs/search",
        data: { api_key: "dc6zaTOxFJmzC", limit: 10 }   
    };

    $('button').on('click', function(event) {
        event.preventDefault();
        $('#results').empty();
        options.data.q = $('input').val();
        options.data.offset = 0;
        $.ajax(options).done(appendImages);
    })

    $(window).scroll(function() {
        if (loading === false) {
            if( $(window).scrollTop() + $(window).height() > $(document).height() - 500 ) {
                loading = true;
                options.data.offset += 10;
                $.ajax(options).done(appendImages);
            }
        }
    })

    function appendImages(response){
        response.data.forEach(function(giphy){
            var $img = $("<img>", { src: giphy.images.original.url });
            $('#results').append($img);
        })
        loading = false;
    }


})
    