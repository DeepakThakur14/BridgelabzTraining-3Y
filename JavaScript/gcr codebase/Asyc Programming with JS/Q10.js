function deliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.8) {
                resolve(successMessage);
            } else {
                reject(`${stepName} failed`);
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        const order = await deliveryStep("takeOrder", "Step 1: Order taken");
        console.log(order);

        const prepared = await deliveryStep("prepare", "Step 2: Food prepared");
        console.log(prepared);

        const packed = await deliveryStep("pack", "Step 3: Package ready");
        console.log(packed);

        const dispatched = await deliveryStep("dispatch", "Step 4: Out for delivery");
        console.log(dispatched);

        const delivered = await deliveryStep("deliver", "Delivery completed!");
        console.log(delivered);
    } catch (error) {
        console.log("Pipeline failed!", error);
    }
}

runPipeline();
