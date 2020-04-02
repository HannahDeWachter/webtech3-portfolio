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
            document.querySelector("#temp").innerHTML = tempDegrees + " °C";
            document.querySelector("#summary").innerHTML = summaryText;

            this.getMeal(weatherIcon);
        }).catch(err => {
            console.log(err);
        });
    }

    errorLocation(err) {
        console.log(err);
    }

    getMeal(weatherIcon) {
        let mealID;

        switch (weatherIcon) {
            case "clear-day":
            case "partly-cloudy-day":
            default:
                mealID = 52833;
                break;
            case "rain":
            case "wind":
            case "cloudy":
                mealID = 52855;
                break;
            case "fog":
            case "snow":
                mealID = 52922;
                break;
        }

        let url = `https://cors-anywhere.herokuapp.com/https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealID}`;
        fetch(url).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            let mealImage = data.meals[0].strMealThumb;
            let mealName = data.meals[0].strMeal;

            switch (weatherIcon) {
                case "clear-day":
                    document.getElementById("adText").innerHTML = "It's sunny. Try this " + mealName + "!";
                    document.getElementById("icon").src = "https://image.flaticon.com/icons/svg/106/106061.svg";
                    document.getElementById("meal").src = mealImage;
                    break;
                case "partly-cloudy-day":
                    document.getElementById("adText").innerHTML = "It's sunny. Try this " + mealName + "!";
                    document.getElementById("icon").src = "https://image.flaticon.com/icons/svg/106/106068.svg";
                    document.getElementById("meal").src = mealImage;
                    break;
                case "rain":
                    document.getElementById("adText").innerHTML = "It's cold outside. Try this " + mealName + "!";
                    document.getElementById("icon").src = "https://image.flaticon.com/icons/svg/106/106059.svg";
                    document.getElementById("meal").src = mealImage;
                    break;
                case "wind":
                    document.getElementById("adText").innerHTML = "It's cold outside. Try this " + mealName + "!";
                    document.getElementById("icon").src = "https://image.flaticon.com/icons/svg/106/106040.svg";
                    document.getElementById("meal").src = mealImage;
                    break;
                case "cloudy":
                    document.getElementById("adText").innerHTML = "It's cold outside. Try this " + mealName + "!";
                    document.getElementById("icon").src = "https://image.flaticon.com/icons/svg/106/106064.svg";
                    document.getElementById("meal").src = mealImage;
                    break;
                case "fog":
                    document.getElementById("adText").innerHTML = "It's cold outside. Try this " + mealName + "!";
                    document.getElementById("icon").src = "https://image.flaticon.com/icons/svg/106/106052.svg";
                    document.getElementById("meal").src = mealImage;
                    break;
                case "snow":
                    document.getElementById("adText").innerHTML = "It's cold outside. Try this " + mealName + "!";
                    document.getElementById("icon").src = "https://image.flaticon.com/icons/svg/106/106056.svg";
                    document.getElementById("meal").src = mealImage;
                    break;
                default:
                    document.getElementById("adText").innerHTML = "It's sunny. Try this " + mealName + "!";
                    document.getElementById("icon").src = "https://image.flaticon.com/icons/svg/106/106068.svg";
                    document.getElementById("meal").src = mealImage;
                    break;
            }

        }).catch(err => {
            console.log(err);
        });
    }
}

let weather = new Weather();