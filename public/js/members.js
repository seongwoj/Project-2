
$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
    $.get("/api/user_data").then(function(data) {
     $(".member-name").text(data.email)
     $("#organizerID").attr("value", data.id)
      var organizerID=data.id

     $.ajax({
      method: "GET",
      url: "api/event/organizer/"+organizerID
    }).then(function(results){
      console.log(results)
    });
    



    });
  });

$("#create-event").submit(function(event){
  event.preventDefault();
   var newEvent={
  title:$("#title").val(),
  location:$("#location").val(),
  time:$("#time").val(),
  description: $("#description").val(),
  category: $("#category").val(),
  organizer_id: $("#organizerID").val()

   }
   console.log(newEvent)
  $.ajax({
    method: "POST",
    url: "/api/event",
    data: newEvent
  }).then(function(data){
    console.log(data)
  });
  $("#title").val("")
  $("#location").val("")
  $("#time").val("")
  $("#description").val("")
  $("#category").val("")
});



