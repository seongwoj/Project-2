// when page loads, ajax get request to get email from user table and display on page
  $.get("/api/user_data").then(function(data) {
     $(".member-name").text(data.email)
     $("#organizerID").attr("value", data.id)
      var organizerID=data.id

// ajax get request to get all events by user via organizerID and display on page. each event gets displayed in a bootstrap card
     $.ajax({
      method: "GET",
      url: "api/event/organizer/"+organizerID
      }).then(function(results){
        console.log(results)
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
            pEl2=$("<p class=event-time>").text(results[i].time)
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
      
      // when update button is clicked for event, do an ajax get to get the data for that event and populate the form for edit
      $(".update-event").on("click", function(){
        // capture eventID for update button clicked
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

      // when save changes button is clicked on update event form, do an ajax put request to insert updated event to table
      $(".save-update").on("click", function(event){
        // capture eventID for saved button clicked
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
            $.ajax({
              method: "PUT",
              url: "/api/event/"+eventupdateId,
              data: updatedEvent
            }).then(function(){
              location.reload();
            });
        });

      //when view interested button is clicked do an ajax get request to get all the contact info of users for that event.
      $(".view-interested-btn").on("click", function(event){
        $(".view-interested-name").empty();
        $(".view-interested-email").empty();
        event.preventDefault();
        // capture eventID for view interested button clicked
        var eventinterestedId=$(this).attr("data")
        $.ajax({
          method: "GET",
          url: "/api/watcher/"+eventinterestedId,
        }).then(function(results){
          let emailList = [];
          for(var i=0; i<results.length; i++){
            console.log(results);
            var h4El=$("<p>")
            h4El.text(results[i].name)
            $(".view-interested-name").append(h4El)
            var h4El=$("<p>")
            h4El.text(results[i].email)
            $(".view-interested-email").append(h4El)
            emailList.push(results[i].email)
          }
          // when send email button is clicked uses nodemailer send email to emails addresses in email list array
          $("#sendEmailBtn").on("click", function(event){
            event.preventDefault();
              emailList.toString();
              console.log(emailList);
              let emailSubject = $("#emailSubject").val();
              let emailText = $("#emailText").val();
              $.post("/api/email", {
                to: emailList,
                subject: emailSubject,
                message: emailText
              });
              location.reload();
            });
          });
        });
      });

      //delete ajax request when delete button for an event is clicked
      $(".delete-event-btn").on("click", function(event){
        event.preventDefault();
        // capture eventID for delete button clicked
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

  
// when post event button is clicked, do a post request to insert new event to events table
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
        console.log("event created")
      });
  $("#title").val("")
  $("#location").val("")
  $("#time").val("")
  $("#description").val("")
  $("#category").val("")
  location.reload();
});
