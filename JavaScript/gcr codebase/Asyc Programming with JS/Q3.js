function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const isError = Math.random() < 0.5;

            if (isError) {
                reject("API request failed!");
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then((bugs) => {
        console.table(bugs);
    })
    .catch((error) => {
        console.log("Error fetching bugs:", error);
    });