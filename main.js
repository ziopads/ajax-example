$('document').ready(function(){
  console.log('JS is connected');
  // TODO: add click handler to button
  $('#search-button').on('click', function(){
    // TODO: write .getJSON request
    var query = $('#search-criteria').val();
    var url = `http://www.omdbapi.com/?apikey=c386cf8&s=${query}`;

    var $xhr = $.getJSON(url);
    $xhr.done(function(results){
      console.log('RESULTS: ', results.Search);
      // TODO: display the results
      for (var i = 0; i < results.Search.length; i++) {
        var title = results.Search[i].Title;
        var year = results.Search[i].Year;
        $('#results').append('<p>' + title + ', ' + year + '</p>');
      }

    })

  })


});
