$(document).ready(function() {
    var words = ["chair", "door", "house", "monkey", "reimbursement", "baby", "old", "cat", "dog", "snail"];
    $("#next").click(function() {
        $(this).siblings("p").text(words[Math.floor(Math.random() * (words.length + 1))]);
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

    function teamEdit() {
        var name = $(this).text();
        var editableName = $("<input type='text' maxlength='15' />");
        $(this).replaceWith(editableName);
        editableName.val(name);
        editableName.focus();
        editableName.blur(function() {
            var teamName = $("<h4 class='teamName'>" + $(this).val() + "</h4>");
            $(this).replaceWith(teamName).click(teamEdit);
            $(".teamName").click(teamEdit);
        });
    }
    $(".teamName").click(teamEdit);
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
        $("#seconds").text($("#timerDuration").val());
    }).click();
    $("#timerDuration").change(function() {
        if (!timer) {
            $("#seconds").text($(this).val());
        }
    });
    $("#seconds").text("60");
});