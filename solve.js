
// Question Link > Hacker rank question - https://www.hackerrank.com/challenges/sock-merchant/problem

function sockMerchant(n, ar) {
    return n > 1 ? ar.reduce((total, value, index, array) => {
        let counterKeyPair = {};
        if (index === 1) {
            if (total === value) {
                counterKeyPair[total] = 2;
            } else {
                counterKeyPair[total] = 1;
                counterKeyPair[value] = 1;
                console.log(counterKeyPair)
            }
            return counterKeyPair
        };
        if (index > 1 && index < array.length - 1) {
            counterKeyPair = total;
            counterKeyPair[value] = counterKeyPair[value] ? counterKeyPair[value] + 1 : 1;
            return counterKeyPair
        }
        if (index === array.length - 1) {
            let count = 0;
            counterKeyPair = total;
            counterKeyPair[value] = counterKeyPair[value] ? counterKeyPair[value] + 1 : 1;
            for (let key in counterKeyPair) {
                count = count + Math.floor(counterKeyPair[key] / 2);
            }
            return count
        }
    }) : 0;
}

// Question link > Coming soon...
