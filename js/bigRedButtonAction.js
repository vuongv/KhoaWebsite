function BigRedButtonMouseDown (){
    var button = document.getElementById("bigRed").className = "pushed-button";
    document.querySelector(".bg-modal").style.display = "flex";
}

function BigRedButtonMouseUp (){
    var button = document.getElementById("bigRed").className = "non-pushed-button";
}

function closeModal() {
    document.querySelector(".bg-modal").style.display = "none";
    document.getElementById("bigRed").className = "non-pushed-button";
}

