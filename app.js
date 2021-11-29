let timeStamp = document.getElementById("timestamp");
let today = new Date();
let localTime = document.getElementById("localDate")
let localDate = document.getElementById("localTime");
timeStamp.innerHTML = today.toString();
localDate.innerHTML = today.toLocaleDateString();
localTime.innerHTML = today.toLocaleTimeString();


let futur = new Date();
futur.setDate(today.getDate() + 2);
futur.setHours(today.getHours() + 6);
console.log(futur);

if (futur > today ) {
    let createDiv = document.createElement("div");
    createDiv.innerHTML = ;
}