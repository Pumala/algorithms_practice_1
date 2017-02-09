// return the count of how many numbers in the arr are squareroot numbers

function getMinimumUniqueSum(arr) {
    var sumUnique = 0;
    var sqr;
    for (var i = 0; i < arr.length; i++) {
        sqr = Math.sqrt(arr[i]);
        if (sqr % 1 === 0) {
            sumUnique++;
        }
    }
    console.log(sumUnique);
}
