let request = new XMLHttpRequest();//200= bon  300=redirections 400=erreurs
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);//JSON.parse transforme l'objet json en objet js
        console.log(response.current_condition.condition);
        console.log(response);
    }
};
request.open("GET", "https://www.prevision-meteo.ch/services/json/neuilly-sur-marne");
request.send();

let request1 = new XMLHttpRequest();
request1.onreadystatechange = function askWeather() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);
        console.log(response.current_condition);
        let result = document.getElementById("weather-result");
        let ask = document.getElementById("ask-weather");
ask.addEventListener("click",function() {
    result.innerHTML="<div><p>"+response.current_condition.condition+"</p><p>"+response.current_condition.tmp+"</p><p>"+response.current_condition.hour+"</p></div>";
})
    }
};
request1.open("GET", "https://www.prevision-meteo.ch/services/json/brest");
request1.send();