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
            let summaryText = data.currently.summary;
            let tempDegrees = Math.round(data.currently.temperature);
            document.querySelector("#weather").innerHTML = tempDegrees + " °C" + "<br />" + summaryText;
        }).catch(err => {
            console.log(err);
        });
    }

    errorLocation(err) {
        console.log(err);
    }
}

let weather = new Weather();