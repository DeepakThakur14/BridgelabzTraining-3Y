function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to boil water!");
            } else {
                console.log("Water boiled successfully!");
                resolve();
            }
        }, 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to brew coffee!");
            } else {
                console.log("Coffee brewed successfully!");
                resolve();
            }
        }, 1500);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Failed to pour coffee!");
            } else {
                console.log("Coffee poured into the cup!");
                resolve();
            }
        }, 1000);
    });
}

boilWater()
    .then(() => brewCoffee())
    .then(() => pourCoffee())
    .then(() => {
        console.log("Coffee ready for the team!");
    })
    .catch((error) => {
        console.log("Coffee preparation failed:", error);
    });