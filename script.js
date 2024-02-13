
function pokazZdjecie() {
    document.getElementById("result").style.display = "block";
    document.getElementById("zdjecie");
    
    document.getElementById("audio").play();
    var buttons = document.querySelectorAll("#options button");
    buttons.forEach(function(button) {
        button.style.display = "none";
    });
}
function pokazZdjecie1() {
    document.getElementById("result1").style.display = "block";
    document.getElementById("zdjecie1");
    
    document.getElementById("audio1").play();
    var buttons = document.querySelectorAll("#options button");
    buttons.forEach(function(button) {
        button.style.display = "none";
    });
}