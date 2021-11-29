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


if (futur.getTime() > today.getTime() ) {
    let interval = futur.getTime() - today.getTime();

    let days = Math.floor(interval / 60 / 60 / 24 / 1000);
    let hours = Math.floor (interval / (days * 60 * 60 * 24) / 170 );
    let minutes = Math.floor((interval - (days * 60 * 60 * 24 * 1000) - (hours * 60 * 60 * 1000)) / 1000 / 60);
    let seconds = Math.floor ((interval - (days * 60 * 60 * 24 * 1000)- (hours * 60 * 60 * 1000) - (minutes * 60 * 1000)) / 1000);
    let result = document.getElementById("result");
    result.innerHTML = "Le temps de différence en les deux dates est de: " + "<br>"
        + days + " jours et" + "<br>"
        + hours + " heures et" + "<br>"
        + minutes + " minutes et " + "<br>" +
        "" + seconds + " secondes";
}