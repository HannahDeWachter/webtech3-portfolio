class Weather {
    constructor() {
        this.getLocation();
        this.lat;
        this.lng;
    }

    getLocation() {
        navigator.geolocation.getCurrentPosition(this.gotLocation.bind(this), this.errorLocation.bind(this));
    }

    gotLocation(result) {
        this.lat = result.coords.latitude;
        this.lng = result.coords.longitude;
        this.getWeather();
    }

    getWeather() {
        let url = `https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/fdc76459345f51e97a02c4495a00f0e0/${this.lat},${this.lng}?units=si`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            let weatherIcon = data.currently.icon;

            let summaryText = data.currently.summary;
            let tempDegrees = Math.round(data.currently.temperature);
            document.querySelector("#weather").innerHTML = tempDegrees + " °C" + "<br />" + summaryText;

            // jas: https://s7d1.scene7.com/is/image/TheNorthFaceBrand/3ERL1SK_prod1?$transparent-png$&wid=600
            // bril: https://www.merkbrillen.nl/uploads/pagetree/images/Ray-Ban-aviator-3025.png?w=1024&algo=fill
            // tshirt: https://cdn.zeeman.com/media/catalog/product/cache/5050dbc22447fab33b3d2c8a729076f7/2/0/2020020684651_Front_01.png

            switch (weatherIcon) {
                case "clear-day":
                    document.getElementById("article").src = "https://www.merkbrillen.nl/uploads/pagetree/images/Ray-Ban-aviator-3025.png?w=1024&algo=fill";
                    break;
                case "partly-cloudy-day":
                    document.getElementById("article").src = "https://cdn.zeeman.com/media/catalog/product/cache/5050dbc22447fab33b3d2c8a729076f7/2/0/2020020684651_Front_01.png";
                case "rain":
                case "wind":
                case "cloudy":
                case "fog":
                default:
                    document.getElementById("article").src = "https://s7d1.scene7.com/is/image/TheNorthFaceBrand/3ERL1SK_prod1?$transparent-png$&wid=600";
                    break;
            }

        }).catch(err => {
            console.log(err);
        });
    }

    errorLocation(err) {
        console.log(err);
    }
}

let weather = new Weather();