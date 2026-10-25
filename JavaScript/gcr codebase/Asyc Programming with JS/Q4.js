function serverA() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server A failed!");
            } else {
                resolve("Server A responded in 2 seconds");
            }
        }, 2000);
    });
}

function serverB() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject("Server B failed!");
            } else {
                resolve("Server B responded in 3 seconds");
            }
        }, 3000);
    });
}

const requestA = serverA();
const requestB = serverB();

Promise.all([requestA, requestB])
    .then((responses) => {
        console.log("Deployment completed for all servers");
        console.log(responses);
    })
    .catch((error) => {
        console.log("Deployment failed:", error);
    });

Promise.race([serverA(), serverB()])
    .then((response) => {
        console.log("Fastest response:", response);
    })
    .catch((error) => {
        console.log("Fastest response failed:", error);
    });