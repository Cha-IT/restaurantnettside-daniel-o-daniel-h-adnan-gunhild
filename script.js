let listItem1 = document.querySelector("#liItem1");
let listItem2 = document.querySelector("#liItem2");
let listItem3 = document.querySelector("#liItem3");

function handelMeny() {
    console.log("Du prøver å se på menyen vår")
}

function handelBordbestiling() {
    console.log("Du prøver å bestile bord.")
}

function handelTakeaway() {
    console.log("Du prøver å bestile takewway.")
}

listItem1.onclick = handelMeny;
listItem2.onclick = handelBordbestiling;
listItem3.onclick = handelTakeaway;

