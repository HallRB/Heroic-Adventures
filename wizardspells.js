
//Fireball
var target1 = 100;
console.log(target1)
        var myhp = 50;
console.log(myhp);
    var spirit = 8
    
function fireball () 
{
    document.getElementById("fireball1").style = "visibiity: visible"
    
    if (myhp<=0 && target1<=0) {
        alert("After receiving a mortal blow, you deal one of your own, leaving you both dead...")
        console.log("You both are defeated")}
        
    else if (myhp<=0) {
        alert("You are defeated")
        console.log("You are defeated")}

    else if (target1<=0) {
        alert("")
        console.log("opponent defeated")  
    } else {
        var damage = Math.floor((Math.random() * 40) + 1) + spirit;
        console.log("you did " + damage + " damage");
        if (damage>=20) {
            alert("you dealt a critical hit!")
        } 
        target1 -= damage;

        var bossdamage = Math.floor((Math.random() * 10) + 1);
        myhp -= bossdamage;
        console.log("your opponent dealt " + bossdamage + " damage to you");

    } 
    document.getElementById("hp").innerHTML=bossmaxHP;
    console.log("The opponent's HP is " + bossmaxHP);
    document.getElementById("hp2").innerHTML=myhp;
    console.log("My HP is " + myhp)};