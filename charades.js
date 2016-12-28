var words = ["chair", "door", "house"];
$("#next").click(function() {
    $(this).siblings("p").text(words[Math.floor(Math.random()*3)]);
}).click();

$("#hide").click(function() {
    var p = $(this).siblings("p");
    if ($(p).css("visibility") === "visible") {
        $(p).css("visibility", "hidden");
        $(this).text("Show");
    }
    else {
        $(p).css("visibility", "visible");
        $(this).text("Hide");
    }
});

$(".scorePlus").click(function () {
    var p = $(this).siblings("p");
    var i = parseInt($(p).text(), 10);
    $(p).text(i + 1);
});
$(".scoreMinus").click(function () {
    var p = $(this).siblings("p");
    var i = parseInt($(p).text(), 10);
    if (i > 0)
        $(p).text(i - 1);
});
var timer = 0;

function countdown() {
    var seconds = $("#seconds");
    var i = parseInt($(seconds).text(), 10);
    if (i > 0)
        $(seconds).text(i - 1);
    else
        countdownStop();
}

function countdownStop() {
    if (timer) {
        clearInterval(timer);
        timer = false;
        $("#start").text("Start");
    }
}

$("#start").click(function() {
    if (!timer) {
        timer = setInterval(countdown, 1000);
        $("#start").text("Stop");
    }
    else
        countdownStop();
});
$("#reset").click(function() {
    countdownStop();
    $(this).siblings("p").text($("#timerDuration").val());
}).click();
$("#timerDuration").change(function() {
    if (!timer) {
        $(this).siblings("div").children("p").text($(this).val());
    }
});