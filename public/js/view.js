
//on click
//button id search category

$("#search-category").on("click", function(event){
  event.preventDefault();
    $.ajax({
      method: "GET",
      url: "api/event/"+$("#search-category-value").val()
    }).then(function(results){
      appendevents(results)
          console.log(results)
      
    });
  });

  $("#search-time").on("click", function(){
    $.ajax({
      method: "GET",
      url: "api/event/"+$("search-time-value").val()
    }).then(function(results){
      console.log(results) 
      appendevents(results)  
    });
  });

  $("#search-location").on("click", function(){
    $.ajax({
      method: "GET",
      url: "api/event/"+$("search-location-value").val()
    }).then(function(results){
      console.log(results)
      appendevents(results)  
    });
  });

  $("#search-organizer").on("click", function(){
    $.ajax({
      method: "GET",
      url: "api/event/"+$("search-organizer-value").val()
    }).then(function(results){
      console.log(results)
      appendevents(results)
    });
  });

