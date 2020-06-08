
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
      
      
      var h3El=$("<h3 class='your events'>Your Events</h3>")
      $(".view-section-header").append(h3El)
      for(var i=0; i<results.length; i++){
        eventId=results[i].id

        divEl1=$("<div class=container>")
        $(".view-section").prepend(divEl1)
        divEl2=$("<div class=row>")
        $(divEl1).append(divEl2)
        divEl3=$("<div class=col-md-12>")
        $(divEl2).append(divEl3)
        divEl4=$("<div class=card>")
        $(divEl3).append(divEl4)
        divEl5=$("<div class=card-body>")
        divEl5.attr("id", "div"+[i])
        $(divEl4).append(divEl5)

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
      


      $(".update-event").on("click", function(){
        var eventupdateId=$(this).attr("data")
        $("#organizerupdateID").attr("value", organizerID)
        
        $(".save-update").attr("data", eventupdateId)

        $.ajax({
          method: "GET",
          url: "api/event/id/"+eventupdateId
        }).then(function(results){
          console.log(results)
          $("#updatetitle").attr("value", results[0].title)
          $("#updatetime").attr("value", results[0].time)
          $("#updatelocation").attr("value", results[0].location)
          $("#updatedescription").val(results[0].description)
          $("."+results[0].category).attr("selected", results[0].category)
        });
        
      });




      $(".save-update").on("click", function(event){
        event.preventDefault();
        
        var eventupdateId=$(this).attr("data")
          
          var updatedEvent={
            title:$("#updatetitle").val(),
            location:$("#updatelocation").val(),
            time:$("#updatetime").val(),
            description: $("#updatedescription").val(),
            category: $("#updatecategory").val(),
            organizer_id: $("#updateorganizerID").val()
          
             }
             console.log(updatedEvent)
             $.ajax({
              method: "PUT",
              url: "/api/event/"+eventupdateId,
              data: updatedEvent
            }).then(function(){
              location.reload();
            });
      });

        
      $(".view-interested-btn").on("click", function(event){
        event.preventDefault();
        
        var eventinterestedId=$(this).attr("data")
        

        $.ajax({
          method: "GET",
          url: "/api/watcher/"+eventinterestedId,
        }).then(function(){
          console.log(true)
        });
      });





      $(".delete-event-btn").on("click", function(event){
        event.preventDefault();
        var eventdeleteId=$(this).attr("data")
        $.ajax({
          method: "DELETE",
          url: "/api/event/"+eventdeleteId
        }).then(function(){
          console.log("deleted")
          location.reload();
        });
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
  location.reload();
});
























// $(document).ready(function () {


// $("#view-interested-btn").on("click", function(){
//   alert("clicked")
// });

// $("#delete-event-btn").on("click", function(){
//   alert("clicked")
// });
// });

















































// divEl1=$("<div class=container>")
//         $(".view-section").append(divEl1)
//         divEl2=$("<div class=row>")
//         $(divEl1).append(divEl2)
//         divEl3=$("<div class=col-md-12>")
//         $(divEl2).append(divEl3)
//         divEl4=$("<div class=card>")
//         $(divEl3).append(divEl4)
//         divEl5=$("<div class=card-body>")
//         $(divEl4).append(divEl5)

//         pEl1=$("<p>").text(results[i].title)
//         $(".card-body").append(pEl1)
//         pEl2=$("<p>").text(results[i].time)
//         $(".card-body").append(pEl2)
//         pEl3=$("<p>").text(results[i].location)
//         $(".card-body").append(pEl3)
//         pEl4=$("<p>").text(results[i].description)
//         $(".card-body").append(pEl4)
//         pEl5=$("<p>").text(results[i].category)
//         $(".card-body").append(pEl5)


// eventId=results[i].id
// pEl1=$("<p>").text(results[i].title)
// $(".card-body").append(pEl1)
// pEl2=$("<p>").text(results[i].time)
// $(".card-body").append(pEl2)
// pEl3=$("<p>").text(results[i].location)
// $(".card-body").append(pEl3)
// pEl4=$("<p>").text(results[i].description)
// $(".card-body").append(pEl4)
// pEl5=$("<p>").text(results[i].category)
// $(".card-body").append(pEl5)
// buttonEl1=$("<button>Update Event</button>")
// buttonEl1.attr("class", "updatebtn").attr("data",eventId)
// $(".card-body").append(buttonEl1)
// buttonEl2=$("<button>View Interested</button>")
// buttonEl2.attr("class", "updatebtn").attr("data",eventId)
// $(".card-body").append(buttonEl2)
// buttonEl3=$("<button>Delete Event</button>")
// buttonEl3.attr("class", "updatebtn").attr("data",eventId)
// $(".card-body").append(buttonEl3)
// brEl=$("<br>")
// $(".card-body").append(brEl)
// brEl=$("<br>")
// $(".card-body").append(brEl)
// hrEl=$("<hr>")
// $(".card-body").append(hrEl)
