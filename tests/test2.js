var message = "";

promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += "my";
        resolve(message);
    }, 3000)
})

promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += " first";
        resolve("erreur à la con");
    }, 2000)
})

promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        message += " promise";
        resolve(message);
    }, 1000)
})

var printResult = (results) => {console.log("Results = ", results, "message = ", message)}
var handleErr = (err) => {console.log(`You've encountered an error ${err}`)}
var displayMessage = () => {console.log(`the global message=${message}`)}

function main() {
    // See the order of promises. Final result will be according to it
    Promise.all([promise1, promise2, promise3]).then(printResult).catch(handleErr).then(displayMessage);
    Promise.all([promise2, promise1, promise3]).then(printResult).catch(handleErr);
    Promise.all([promise3, promise2, promise1]).then(printResult).catch(handleErr);
    console.log(`valeur de message ${message}`);
}

main();