// When submit button is clicked from interested modal, post request to insert new watcher to db
$("#watcher-submit").submit(function(event){
    event.preventDefault();
    var newWatcher = {
        name: $("#formNameInput").val(),
        email: $("#formEmailInput").val(),
        eventDay: $("#preferenceInput1").is(":checked"),
        eventUpdate: $("#preferenceInput2").is(":checked"),
        eventOrganizer: $("#preferenceInput3").is(":checked"),
        eventFuture: $("#preferenceInput4").is(":checked")
    }
    $.ajax({
        method: "POST",
        url: "/api/watcher",
        data: newWatcher
    }).then(function(){
        console.log("Watcher updated");
    });
});