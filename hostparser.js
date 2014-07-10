$.ajax({

    //url: "heroku-4loop.herokuapp.com" /*"this is the Heroku url"*/,
	url:"http://content.guardianapis.com/search?section=news&show-fields=trailText%2Cthumbnail",
   
   dataType: "jsonp",

    success: function(data) {

      $.each(data.response.results/*relevant address when can see data*/, function () {

        $( "#images" ).append("<li>" + '<img src="' +this['fields'].thumbnail + '">' + "</li>");

      });

    }});