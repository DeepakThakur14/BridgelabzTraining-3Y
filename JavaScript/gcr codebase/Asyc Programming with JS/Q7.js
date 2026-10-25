function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("Profile failed to load");
            } else {
                resolve("Profile Loaded");
            }
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("Posts failed to load");
            } else {
                resolve("Posts Loaded");
            }
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                reject("Messages failed to load");
            } else {
                resolve("Messages Loaded");
            }
        }, 1000);
    });
}

const startTime = Date.now();

Promise.allSettled([
    loadProfile(),
    loadPosts(),
    loadMessages()
]).then((results) => {
    const modules = ["Profile", "Posts", "Messages"];

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(modules[index] + " succeeded:", result.value);
        } else {
            console.log(modules[index] + " failed:", result.reason);
        }
    });

    const endTime = Date.now();
    console.log("Total time taken:", (endTime - startTime) / 1000, "seconds");
});