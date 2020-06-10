// hide filter options when page is loaded. Load all events when page is loaded
hideFilters();
getAllEvents();

function hideFilters(){
$("#filter-category").css("display", "none")
$("#filter-time").css("display", "none")
$("#filter-location").css("display", "none")
}

// display filters based on filter selection
$("#filter").on("submit",function(event){
  event.preventDefault();
if ($("#filters").val()=="Category"){
  hideFilters();
  $("#filter-category").css("display", "block")
}else if($("#filters").val()=="Time"){
  hideFilters();
  $("#filter-time").css("display", "block")
}else if($("#filters").val()=="Location"){
  hideFilters();
  $("#filter-location").css("display", "block")
}else if($("#filters").val()=="Show-All"){
  hideFilters();
  getAllEvents();
}

});

// get all events function
function getAllEvents(){
  $("#view-events-section").empty();
  $.ajax({
      method: "GET",
      url: "/api/event"
    }).then(function(results){
      console.log(results)
      appendEvents(results)
      $(".interested-event-button").on("click", function(){
        var eventID=$(this).attr("data")
        console.log(eventID)
        $("#watcher-submit").submit(function(event){
          event.preventDefault();
          var newWatcher = {
              name: $("#formNameInput").val(),
              email: $("#formEmailInput").val(),
              eventDay: $("#preferenceInput1").is(":checked"),
              eventUpdate: $("#preferenceInput2").is(":checked"),
              eventOrganizer: $("#preferenceInput3").is(":checked"),
              eventFuture: $("#preferenceInput4").is(":checked"),
              EventId: eventID
          }
          console.log(newWatcher)
          $.ajax({
              method: "POST",
              url: "/api/watcher",
              data: newWatcher
          }).then(function(){
              console.log("Watcher updated");
              location.reload();
          });
        });
      });
    });
}


$("#search-category").on("click", function(event){
  $("#view-events-section").empty();
  event.preventDefault();
    $.ajax({
      method: "GET",
      url: "api/event/"+$("#search-category-value").val()
    }).then(function(results){
      appendEvents(results)
      $(".interested-event-button").on("click", function(){
        var eventID=$(this).attr("data")
        console.log(eventID)
        $("#watcher-submit").submit(function(event){
          event.preventDefault();
          var newWatcher = {
              name: $("#formNameInput").val(),
              email: $("#formEmailInput").val(),
              eventDay: $("#preferenceInput1").is(":checked"),
              eventUpdate: $("#preferenceInput2").is(":checked"),
              eventOrganizer: $("#preferenceInput3").is(":checked"),
              eventFuture: $("#preferenceInput4").is(":checked"),
              EventId: eventID
          }
          console.log(newWatcher)
          $.ajax({
              method: "POST",
              url: "/api/watcher",
              data: newWatcher
          }).then(function(){
              console.log("Watcher updated");
              location.reload();
          });
        });
      });
    });
  });

  $("#search-time").on("click", function(){
    $("#view-events-section").empty();
    event.preventDefault();
    $.ajax({
      method: "GET",
      url: "api/event/time/"+$("#search-time-value").val()
    }).then(function(results){
      console.log(results) 
      appendEvents(results)
      $(".interested-event-button").on("click", function(){
        var eventID=$(this).attr("data")
        console.log(eventID)
        $("#watcher-submit").submit(function(event){
          event.preventDefault();
          var newWatcher = {
              name: $("#formNameInput").val(),
              email: $("#formEmailInput").val(),
              eventDay: $("#preferenceInput1").is(":checked"),
              eventUpdate: $("#preferenceInput2").is(":checked"),
              eventOrganizer: $("#preferenceInput3").is(":checked"),
              eventFuture: $("#preferenceInput4").is(":checked"),
              EventId: eventID
          }
          console.log(newWatcher)
          $.ajax({
              method: "POST",
              url: "/api/watcher",
              data: newWatcher
          }).then(function(){
              console.log("Watcher updated");
              location.reload();
          });
        });
      });  
    });
  });

  $("#search-location").on("click", function(){
    $("#view-events-section").empty();
    event.preventDefault();
    $.ajax({
      method: "GET",
      url: "api/event/location/"+$("#search-location-value").val()
    }).then(function(results){
      console.log(results)
      appendEvents(results)
      $(".interested-event-button").on("click", function(){
        var eventID=$(this).attr("data")
        console.log(eventID)
        $("#watcher-submit").submit(function(event){
          event.preventDefault();
          var newWatcher = {
              name: $("#formNameInput").val(),
              email: $("#formEmailInput").val(),
              eventDay: $("#preferenceInput1").is(":checked"),
              eventUpdate: $("#preferenceInput2").is(":checked"),
              eventOrganizer: $("#preferenceInput3").is(":checked"),
              eventFuture: $("#preferenceInput4").is(":checked"),
              EventId: eventID
          }
          console.log(newWatcher)
          $.ajax({
              method: "POST",
              url: "/api/watcher",
              data: newWatcher
          }).then(function(){
              console.log("Watcher updated");
              location.reload();
          });
        });
      });  
    });
  });

// append results to page
function appendEvents(results){
  for(var i=0; i<results.length; i++){
    eventId=results[i].id
    divEl1=$("<div class=col-md-6>")
    $("#view-events-section").append(divEl1)
    divEl2=$("<div class=card>")
    $(divEl1).append(divEl2)
    divEl3=$("<div class=card-body-view>")
    divEl3.attr("id", "div"+[i])
    $(divEl2).append(divEl3)

    pEl1=$("<p class=event-title>").text(results[i].title)
    $("#div"+[i]).append(pEl1)
    pEl2=$("<p class=event-time>").text(results[i].time)
    $("#div"+[i]).append(pEl2)
    pEl3=$("<p class=event-location>").text(results[i].location)
    $("#div"+[i]).append(pEl3)
    pEl4=$("<p class=event-description>").text(results[i].description)
    $("#div"+[i]).append(pEl4)
    pEl5=$("<p class=event-organizer>").text("Organizer: " +results[i].User.email)
    $("#div"+[i]).append(pEl5)
    pEl6=$("<p class=event-category>").text("Category: " +results[i].category)
    $("#div"+[i]).append(pEl6)
    buttonEl1=$("<button type=button class=btn btn-primary data-toggle=modal data-target=#interestedModal>Interested</button>")
    buttonEl1.attr("class","interested-event-button").attr("data",eventId)
    $("#div"+[i]).append(buttonEl1)
  }
}


