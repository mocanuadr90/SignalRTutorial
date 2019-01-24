(function () {
    $.connection.hub.start()
    .done(function () {
        $.connection.myHub.server.announce("Hello. I'm connected; ");
    })
        .fail(function () { alert("Connection failed!"); });

    $.connection.myHub.client.announce = function (message) {
        $("#msg").append(message + '<br/>');
    }
})()
