const data = {
    "mat": [
        {
            "matId": 1,
            "matName": "pizza",
            "matPris": 499,
            "matBilde": "./Bilder/pizza.jpg",
            "matDescription": "pizza er en mat rett fra pizza land",
            "matAlergi": "Gluten og laktose"
        },
        {
            "matId": 2,
            "matName": "burger",
            "matPris": 249,
            "matBilde": "./Bilder/pizza.jpg",
            "matDescription": "burger er en mat rett fra burger land",
            "matAlergi": "Gluten og laktose"
        },
        {
            "matId": 2,
            "matName": "burger",
            "matPris": 249,
            "matBilde": "./Bilder/pizza.jpg",
            "matDescription": "burger er en mat rett fra burger land",
            "matAlergi": "Gluten og laktose"
        }
    ]
}

let listItem1 = document.querySelector("#liItem1");
let listItem2 = document.querySelector("#liItem2");
let listItem3 = document.querySelector("#liItem3");
let menyElement = document.querySelector("#container");
let orderFormElement = document.querySelector("#orederForm");
let divMenyContainer = document.querySelector("#container")

function handelMeny() {
    console.log("Du prøver å se på menyen vår")
    menyElement.style.display= 'block'
    
    for (let i = 0; i < 3; i++) {
        console.log(data.mat[i].matName)
        let div = document.createElement("div");
        div.classList.add("menu-item")

        let overskrift = document.createElement("h2");
        let overskriftData = document.createTextNode(data.mat[i].matName);
        overskrift.appendChild(overskriftData);

        let text = document.createElement("p");
        let textData = document.createTextNode(data.mat[i].matDescription);
        text.appendChild(textData);

        let price = document.createElement("p");
        let priceData = document.createTextNode(data.mat[i].matPris);
        price.appendChild(priceData);
        price.classList.add("price")

        div.appendChild(overskrift);
        div.appendChild(text);
        div.appendChild(price);

        divMenyContainer.appendChild(div);
    }


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