$.ajax({

   url:"http://obscure-ridge-8042.herokuapp.com/",
   
   dataType: "jsonp",

    success: function(data) {

      $.each(data.statuses, function () {

        $( "#images" ).append("<li>" + '<img src="' +this.img + '">' + "</li>");

      });

    }});