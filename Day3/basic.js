const num = 100;
arr = [];

for (let i = 1; i <= num; i++) {
    if (i % 3 === 0 && i % 4 === 0) {
        arr.push("devsnest");
    } else if (i % 3 === 0) {
        arr.push("devs");
    } else if (i % 4 === 0) {
        arr.push("nest");
    } else {
        arr.push(i.toString()); // Convert number to string before pushing
    }
}

// Output the result
console.log(arr);
