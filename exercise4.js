function changeColor() {

    var style = document.querySelector("#p").style;
    var red_border = document.getElementById("red-border").value;
    var blue_border = document.getElementById("blue-border").value;

    var red_back = document.getElementById("red-background").value;
    var blue_back = document.getElementById("blue-background").value;
    var green_back = document.getElementById("green-background").value;
    style.backgroundColor = "rgb(" + String(red_back) + ", " + String(green_back) + ", " + String(blue_back) + ")";

    var green_border = document.getElementById("green-border").value;





    
    var width = document.getElementById("width-border").value;
    style.border = String(width) + "px solid rgb(" + String(red_border) + ", " + String(green_border) + ", " + String(blue_border) + ")";
}