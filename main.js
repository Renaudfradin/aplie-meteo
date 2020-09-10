/*let request = new XMLHttpRequest();//200= bon  300=redirections 400=erreurs
request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);//JSON.parse transforme l'objet json en objet js
        console.log(response.current_condition.condition);
        console.log(response);
    }
};
request.open("GET", "https://www.prevision-meteo.ch/services/json/neuilly-sur-marne");
request.send();*/

let request1 = new XMLHttpRequest();//200= bon  300=redirections 400=erreurs
request1.onreadystatechange = function askWeather() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        let response = JSON.parse(this.responseText);//JSON.parse transforme l'objet json en objet js
        console.log(response);
        let result = document.getElementById("weather-result");
        let result2 = document.getElementById("weather-result2");
        let result3 = document.getElementById("weather-result3");
        let result4 = document.getElementById("weather-result4");
        let result5 = document.getElementById("weather-result5");
        let result6 = document.getElementById("weather-result6");
        let ask = document.getElementById("ask-weather");

        ask.addEventListener("click",function() {
            result.innerHTML="<div><p>Temps : "+response.current_condition.condition+"</p><p>Température : "+response.current_condition.tmp+" ‎°C</p><p>Heure : "+response.current_condition.hour+" H</p><p>Humidité : "+response.current_condition.humidity+" %</p><p>Date : "+response.current_condition.date+"</p></div>";
            result2.innerHTML="<div><p>Pays : "+response.city_info.country+"</p><p>Elévations : "+response.city_info.elevation+"</p><p>Ville : "+response.city_info.name+"</p><p>Lever de soleil : "+response.city_info.sunrise+" H</p><p>Coucher de soleil : "+response.city_info.sunset+" H</p><p>Latitude : "+response.city_info.latitude+"</p><p>Longitude : "+response.city_info.longitude+"</p></div>";
            result3.innerHTML="<div><p>"+response.fcst_day_1.day_long+"</p><p>Temps : "+response.fcst_day_1.condition+"</p><p>Température min : "+response.fcst_day_1.tmin+" ‎°C</p><p>Température max : "+response.fcst_day_1.tmax+" ‎°C</p></div>";
            result4.innerHTML="<div><p>"+response.fcst_day_2.day_long+"</p><p>Temps : "+response.fcst_day_2.condition+"</p><p>Température min : "+response.fcst_day_2.tmin+" ‎°C</p><p>Température max : "+response.fcst_day_2.tmax+" ‎°C</p></div>";
            result5.innerHTML="<div><p>"+response.fcst_day_3.day_long+"</p><p>Temps : "+response.fcst_day_3.condition+"</p><p>Température min : "+response.fcst_day_3.tmin+" ‎°C</p><p>Température max : "+response.fcst_day_3.tmax+" ‎°C</p></div>";
            result6.innerHTML="<div><p>"+response.fcst_day_4.day_long+"</p><p>Temps : "+response.fcst_day_4.condition+"</p><p>Température min : "+response.fcst_day_4.tmin+" ‎°C</p><p>Température max : "+response.fcst_day_4.tmax+" ‎°C</p></div>";
        })
    }
};
request1.open("GET", "https://www.prevision-meteo.ch/services/json/neuilly-sur-marne");
request1.send();