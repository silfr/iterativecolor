var operator = 1;
var validPercent = true;
var percent = 50;
var allValid;
var colBox = document.getElementById('color');
var hueBox = document.getElementById('hue');
var satBox = document.getElementById('saturation');
var ligBox = document.getElementById('lightness');
var appbtn = document.getElementById('applybutton');
var addbtn = document.getElementById('addbutton');
var subbtn = document.getElementById('subtractbutton');
var palLen = 5;

var palette = "";

var colors = [
    ["#A52A2A", "#D2691E", "#FF7F50", "#DEB887", "#FFF8DC"],
    ["#D2691E", "#FFA500", "#FF7F50", "#FF8C00", "#DAA520"],
    ["#DAA520", "#FFD700", "#FFFF00", "#F0E68C", "#FAFAD2"],
    ["#006400", "#228B22", "#32CD32", "#3CB371", "#00FA9A"],
    ["#191970", "#483D8B", "#008080", "#20B2AA", "#B0C4DE"],
    ["#663399", "#6A5ACD", "#9370DB", "#BA55D3", "#DA70D6"]
];

function colorPrint(pal) {

}

for (var y = 0; y < colors.length; y++) {
    palette = palette + " <div class='palette'> "
    for (var x = 0; x < palLen; x++) {
        palette = palette + " <div class='color'" + " style='background-color:" + colors[y][x] + "' onClick='colorInfo(this)'>  </div>";
//        document.getElementById('palette-div').innerHTML = palette;
    }
    palette = palette + " </div>";
}
palette = palette + "<span class='stretch'></span>";
document.getElementById('palette-div').innerHTML = palette;

function initPal() {
    
}

function colorInfo(clickedDiv) {
    // Change #message
    $('#message').html("Ready!")
}

function isNumb(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode < 37 || charCode > 40)) {
        return false;
    }
    return true;
}

function setCustomPercent() {
    var thestring = document.getElementById('customamount').value;
    if ((thestring.length > 0) && thestring > 0) {
        for (var x = 0, len = thestring.length; x < len; x++) {
            var char = thestring.charCodeAt(x);
            if ((char > 31) && (char < 48 || char > 57)) {
                console.log(x + ' is bad');
                validPercent = false;
                document.getElementById('customamount').style.backgroundColor = "#eba8a6";
                break;
            } else {
                document.getElementById('customamount').style.backgroundColor = "#FFFFFF";
                console.log(x + ' is good');
            }
        }
        if (validPercent) {
            setPercent(parseInt(thestring));
        }
    } else {
        console.log('bad');
        percent = null;
        console.log('percent set to ' + percent);
        document.getElementById('customamount').style.backgroundColor = "#eba8a6";
    }
}

function validateIsNumb() {
    console.log('changed');
    document.getElementById('customamount').style.backgroundColor = "#eba8a6";
}

function setPercent(num) {
    percent = num;
    document.getElementById('customamount').style.backgroundColor = "#FFFFFF";
    console.log('percent set to ' + percent);
}

function checkZeroOrNull() {
    var amnt = document.getElementById('customamount').value;
    if ((amnt == null) || (amnt == 0)) {
        percent = null;
        console.log('percent set to ' + percent);
        document.getElementById('customamount').style.backgroundColor = "#eba8a6";
    }
}

function boxSelect(theBox) {
    $(".box").removeClass("active");
    $(theBox).addClass("active");
}

appbtn.onclick = function () {
    allValid = true;
    if ((parseInt($(".hslbox").val()) < 0) || (parseInt($(".hslbox").val()) > 255)) {
        allValid = false;
        window.alert("Value must be between 0 and 255.");
    } else if (percent == null) {
        allValid = false;
        window.alert("Percent must not be null.");
    }
    if (allValid) {
        //put moar stuff here
        console.log('stufs gud');
    }
}

addbtn.onclick = function () {
    operator = 1;
}

subbtn.onclick = function () {
    operator = -1;
}

$(document).ready(function () {
    document.getElementById("customamount").value = null;
    document.getElementById("hu").value = 128;
    document.getElementById("sa").value = 128;
    document.getElementById("li").value = 128;
    $('#customamount').bind("contextmenu", function (e) {
        e.preventDefault();
    });
    $(".ui-slider-handle").mousedown(function () {
        $(this).parents().trigger("click");
    });
});

$("#slider1").slider({
    range: "false",
    value: 128,
    step: 1,
    min: 0,
    max: 255,
    slide: function (event, ui) {
        $("#hu").val(ui.value);
        boxSelect(hueBox);
    }
});
$("#slider2").slider({
    range: "false",
    value: 128,
    step: 1,
    min: 0,
    max: 255,
    slide: function (event, ui) {
        $("#sa").val(ui.value);
        boxSelect(satBox);
    }
});
$("#slider3").slider({
    range: "false",
    value: 128,
    step: 1,
    min: 0,
    max: 255,
    slide: function (event, ui) {
        $("#li").val(ui.value);
        boxSelect(ligBox);
    }
});

$("#hu").change(function () {
    var value = this.value;
    console.log(value);
    $("#slider1").slider("value", parseInt(value));
});
$("#sa").change(function () {
    var value = this.value;
    console.log(value);
    $("#slider2").slider("value", parseInt(value));
});
$("#li").change(function () {
    var value = this.value;
    console.log(value);
    $("#slider3").slider("value", parseInt(value));
});