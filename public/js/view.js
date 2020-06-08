
//on click
//button id search category

$("#search-category").on("click", function(event){
  event.preventDefault();
    $.ajax({
      method: "GET",
      url: "api/event/"+$("#search-category-value").val()
    }).then(function(results){
      console.log(results)
      var pEl=$("<p>").text(results[0].title)
      $(".events123").append(pEl)
      //   $("#div"+[i]).append(pEl1)
      // for(var i=0; i<results.length; i++){  
      //   pEl1=$("<p class=event-title>").text(results[i].title)
      //   $("#div"+[i]).append(pEl1)
      //   pEl2=$("<p>").text(results[i].time)
      //   $("#div"+[i]).append(pEl2)
      //   pEl3=$("<p class=event-location>").text(results[i].location)
      //   $("#div"+[i]).append(pEl3)
      //   pEl4=$("<p class=event-description>").text(results[i].description)
      //   $("#div"+[i]).append(pEl4)
      //   pEl5=$("<p class=event-category>").text("Category: " +results[i].category)
      //   $("#div"+[i]).append(pEl5)
      //   buttonEl1=$("<button type=button data-toggle=modal data-target=#update-event-modal>Update Event</button>")
      //   buttonEl1.attr("class","update-event").attr("data",eventId)
      //   $("#div"+[i]).append(buttonEl1)
      //   buttonEl2=$("<button type=button data-toggle=modal data-target=#interested-event-modal>View Interested</button>")
      //   buttonEl2.attr("class", "view-interested-btn").attr("data",eventId)
      //   $("#div"+[i]).append(buttonEl2)
      //   buttonEl3=$("<button>Delete Event</button>")
      //   buttonEl3.attr("class", "delete-event-btn").attr("data",eventId)
      //   $("#div"+[i]).append(buttonEl3)
      // }    
    });
  });

  $("#search-time").on("click", function(){
    $.ajax({
      method: "GET",
      url: "api/event/"+$("search-time-value").val()
    }).then(function(results){
      console.log(results)
      for(var i=0; i<results.length; i++){  
        pEl1=$("<p class=event-title>").text(results[i].title)
        $("#div"+[i]).append(pEl1)
        pEl2=$("<p>").text(results[i].time)
        $("#div"+[i]).append(pEl2)
        pEl3=$("<p class=event-location>").text(results[i].location)
        $("#div"+[i]).append(pEl3)
        pEl4=$("<p class=event-description>").text(results[i].description)
        $("#div"+[i]).append(pEl4)
        pEl5=$("<p class=event-category>").text("Category: " +results[i].category)
        $("#div"+[i]).append(pEl5)
        buttonEl1=$("<button type=button data-toggle=modal data-target=#update-event-modal>Update Event</button>")
        buttonEl1.attr("class","update-event").attr("data",eventId)
        $("#div"+[i]).append(buttonEl1)
        buttonEl2=$("<button type=button data-toggle=modal data-target=#interested-event-modal>View Interested</button>")
        buttonEl2.attr("class", "view-interested-btn").attr("data",eventId)
        $("#div"+[i]).append(buttonEl2)
        buttonEl3=$("<button>Delete Event</button>")
        buttonEl3.attr("class", "delete-event-btn").attr("data",eventId)
        $("#div"+[i]).append(buttonEl3)
      }    
    });
  });

  $("#search-location").on("click", function(){
    $.ajax({
      method: "GET",
      url: "api/event/"+$("search-location-value").val()
    }).then(function(results){
      console.log(results)
      for(var i=0; i<results.length; i++){  
        pEl1=$("<p class=event-title>").text(results[i].title)
        $("#div"+[i]).append(pEl1)
        pEl2=$("<p>").text(results[i].time)
        $("#div"+[i]).append(pEl2)
        pEl3=$("<p class=event-location>").text(results[i].location)
        $("#div"+[i]).append(pEl3)
        pEl4=$("<p class=event-description>").text(results[i].description)
        $("#div"+[i]).append(pEl4)
        pEl5=$("<p class=event-category>").text("Category: " +results[i].category)
        $("#div"+[i]).append(pEl5)
        buttonEl1=$("<button type=button data-toggle=modal data-target=#update-event-modal>Update Event</button>")
        buttonEl1.attr("class","update-event").attr("data",eventId)
        $("#div"+[i]).append(buttonEl1)
        buttonEl2=$("<button type=button data-toggle=modal data-target=#interested-event-modal>View Interested</button>")
        buttonEl2.attr("class", "view-interested-btn").attr("data",eventId)
        $("#div"+[i]).append(buttonEl2)
        buttonEl3=$("<button>Delete Event</button>")
        buttonEl3.attr("class", "delete-event-btn").attr("data",eventId)
        $("#div"+[i]).append(buttonEl3)
      }    
    });
  });

  $("#search-organizer").on("click", function(){
    $.ajax({
      method: "GET",
      url: "api/event/"+$("search-organizer-value").val()
    }).then(function(results){
      console.log(results)
      for(var i=0; i<results.length; i++){  
        pEl1=$("<p class=event-title>").text(results[i].title)
        $("#div"+[i]).append(pEl1)
        pEl2=$("<p>").text(results[i].time)
        $("#div"+[i]).append(pEl2)
        pEl3=$("<p class=event-location>").text(results[i].location)
        $("#div"+[i]).append(pEl3)
        pEl4=$("<p class=event-description>").text(results[i].description)
        $("#div"+[i]).append(pEl4)
        pEl5=$("<p class=event-category>").text("Category: " +results[i].category)
        $("#div"+[i]).append(pEl5)
        buttonEl1=$("<button type=button data-toggle=modal data-target=#update-event-modal>Update Event</button>")
        buttonEl1.attr("class","update-event").attr("data",eventId)
        $("#div"+[i]).append(buttonEl1)
        buttonEl2=$("<button type=button data-toggle=modal data-target=#interested-event-modal>View Interested</button>")
        buttonEl2.attr("class", "view-interested-btn").attr("data",eventId)
        $("#div"+[i]).append(buttonEl2)
        buttonEl3=$("<button>Delete Event</button>")
        buttonEl3.attr("class", "delete-event-btn").attr("data",eventId)
        $("#div"+[i]).append(buttonEl3)
      }    
    });
  });

