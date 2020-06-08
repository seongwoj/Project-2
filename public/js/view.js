
//on click
//button id search category

$(".search-category").on("submit", function(){
    $.ajax({
      method: "GET",
      url: "api/event/"+$("search-category-value").val()
    }).then(function(results){
      console.log(results)    
    });
  });

  $(".search-time").on("submit", function(){
    $.ajax({
      method: "GET",
      url: "api/event/"+$("search-time-value").val()
    }).then(function(results){
      console.log(results)    
    });
  });

  $(".search-location").on("submit", function(){
    $.ajax({
      method: "GET",
      url: "api/event/"+$("search-location-value").val()
    }).then(function(results){
      console.log(results)    
    });
  });

  $(".search-organizer").on("submit", function(){
    $.ajax({
      method: "GET",
      url: "api/event/"+$("search-organizer-value").val()
    }).then(function(results){
      console.log(results)    
    });
  });


