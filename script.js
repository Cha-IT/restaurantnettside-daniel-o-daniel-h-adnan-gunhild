let listItem1 = document.querySelector("#liItem1");
let listItem2 = document.querySelector("#liItem2");
let listItem3 = document.querySelector("#liItem3");
let menyElement = document.querySelector("#container");
let orderFormElement = document.querySelector("#orederForm");

function handelMeny() {
    console.log("Du prøver å se på menyen vår")
    menyElement.style.display= 'block'
}

function handelBordbestiling() {
    console.log("Du prøver å bestile bord.")
}

function handelTakeaway() {
    console.log("Du prøver å bestile takewway.")
    orderFormElement.style.display = 'block'
}


listItem1.onclick = handelMeny;
listItem2.onclick = handelBordbestiling;
listItem3.onclick = handelTakeaway;

window.location.replace("#");