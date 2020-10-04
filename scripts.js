// intro //
function StartGame () {
    document.getElementById("welcome").style.visibility = "visible";
    document.getElementById("startbutton").style.visibility="hidden";
    document.getElementById("characterselectionbuttons").style.visibility="visible";
    console.log('success');
} 

//character selection

var char = 0;
console.log("var char should be zero: " + char);

function WizardSelect () {
    document.getElementById("characterselectionbuttons").style.visibility = "hidden";
    document.getElementById("characterselectionname").style.visibility = "visible";
    char += 1;
    classvar = "Wizard"
    console.log("var char should be one: " + char);
}

function KnightSelect () {
    document.getElementById("characterselectionbuttons").style.visibility = "hidden";
    document.getElementById("characterselectionname").style.visibility = "visible";
    char += 2;
    classvar = "Knight"
    console.log("var char should be two: " + char);
}

function RangerSelect () {
    document.getElementById("characterselectionbuttons").style.visibility = "hidden";
    document.getElementById("characterselectionname").style.visibility = "visible";
    char += 3;
    classvar = "Ranger"
    console.log("var char should be three: " + char);
}


console.log(classvar);
function username () {
    var username = document.getElementById("username").value;
    console.log(username);
    document.getElementById('alert').innerHTML = "Greetings " + username + " the " + classvar
    setTimeout(function onceUponATime() {
        location.replace("C:/Users/Richard/Desktop/Code_Repo/Heroic-Adventures/onceuponatime.html"        
        )},5000)
}

var titlename = username + " the " + classvar;
console.log ("title name is ", titlename)