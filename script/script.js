function menuFunction() {
    var x = document.getElementById("navi");
    if (x.className === "myTopnav") {
        x.className += " responsive";
    } else {
        x.className = "myTopnav";
    }
}