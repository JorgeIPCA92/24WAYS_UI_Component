function opn_cls() {     
    if (document.getElementById("myNav").className == "overlay"){
        document.getElementById("myNav").className = "overlay-open"}
    else {
        document.getElementById("myNav").className = "overlay"
    }
}