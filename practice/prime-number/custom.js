
for (let dividend = 2; dividend <= 10; dividend++) {

    let isPrime = true;
    // console.log(dividend)

    for (let dividsor = 2; dividsor < dividend; dividsor++) {
        if (dividend % dividsor == 0) {
            isPrime = false;
        }
    }

    if (isPrime == false) {
        console.log(dividend + ' not prime.')
    }
    else {
        console.log(dividend + ' is prime.')
    }
}


