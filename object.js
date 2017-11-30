var cars = {
	name: "3 Musketeers Car Rental",
	econCars: 2,
	econBooked: 0,
	econPrice: "$50/day",
	midCars: 1,
	midBooked: 0,
	midPrice: "$100/day",
	econLeft: function() {
		return this.econCars - this.econBooked;
	},
	midLeft: function() {
		return this.midCars - this.midBooked;
	},
	bookEcon: function() {
		this.econBooked++;
	},
	bookMid: function() {
		this.midBooked++;
	}
};
var rentals = {
	Renters: [],
	addRenter: function(rName, cType) {
		{
			this.Renters.push({
				Name: rName,
				Car: cType
			});
		}
	},
}
document.getElementById("name").innerHTML = cars.name;

function update() {
	document.getElementById("econa").innerHTML = "Cars left: " + cars.econLeft();
	document.getElementById("mida").innerHTML = "Cars left: " + cars.midLeft();
}

function econCars() {
	if (cars.econLeft() > 0) {
		cars.bookEcon();
		alert("Booked one economy size car! Thank you.");
	} else alert("Aw shucks! You just missed it. No economy size cars left!");
}

function midCars() {
	if (cars.midLeft() > 0) {
		cars.bookMid();
		alert("Booked the only midsize car we have! Please return it promptly. Thank you.");
	} else alert("Wowzers! You missed the only midsize car in stock. None left!");
}

function chooseCar() {
	var cType = document.getElementById("carchoice").value;
	if (cType == "economy") {
		document.getElementById("econa").innerHTML = "Cars Available: " + cars.econLeft();
		document.getElementById("econp").innerHTML = "Price: " + cars.econPrice;
	} else if (cType == "midsize") {
		document.getElementById("mida").innerHTML = "Cars Available: " + cars.midLeft();
		document.getElementById("midp").innerHTML = "Price: " + cars.midPrice;
	}
};

function rentCar() {
	var rName = document.getElementById("rname").value;
	var cType = document.getElementById("carchoice").value;
	if (rName.length > 0) {
		if (cType === "economy") {
			econCars();
			rentals.addRenter(rName, cType);
			chooseCar();
		} else if (cType === "midsize") {
			midCars();
			rentals.addRenter(rName, cType);
			chooseCar();
		} else alert("Pick a car, any car! Type...that is");
	} else alert("Kindly provide your name for our records.");
};