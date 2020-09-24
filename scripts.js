// intro //
function StartGame () {
    document.getElementById("welcome").style.visibility = "visible";
    document.getElementById("startbutton").style.visibility="hidden";
    document.getElementById("characterselectionbuttons").style.visibility="visible";
    console.log('success');
} 

//character selection


function WizardSelect () {
    document.getElementById("characterselectionbuttons").style.visibility = "hidden";
    document.getElementById("characterselectionname").style.visibility = "visible";
}

function KnightSelect () {
    document.getElementById("characterselectionbuttons").style.visibility = "hidden";
    document.getElementById("characterselectionname").style.visibility = "visible";
}

function RangerSelect () {
    document.getElementById("characterselectionbuttons").style.visibility = "hidden";
    document.getElementById("characterselectionname").style.visibility = "visible";
}