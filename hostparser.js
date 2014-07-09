  $.ajax({

    url: "./fake-data.js",

    dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results, function () {

        $( "#images" ).append("<li>" + '<img src="' + this['url'] + '">' + "</li>");

      });

    }});