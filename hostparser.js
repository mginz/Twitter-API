$.ajax({

    url: "heroku-4loop.herokuapp.com" /*"this is the Heroku url"*/,

    dataType: "jsonp",

    success: function(data) {

      $.each(/*relevant address when can see data*/, function () {

        $( "#images" ).append("<li>" + '<img src="' +this['relevant name'] + '">' + "</li>");

      });

    }});