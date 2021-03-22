
for (let dividend = 2; dividend <= 10; dividend++) {

    let isPrime = true;
    // console.log(dividend)

    for (let dividsor = 2; dividsor < dividend; dividsor++) {
        if (dividend % dividsor == 0) {
            isPrime = false;
            // 一個等於 就是宣告 isPrime是false 這件事。
        }
    }

    if (isPrime == false) {
        // 用 == 表示用來判斷 "isPrime為false" 這件事是不是對的。
        console.log(dividend + ' not prime.')
    }
    else {
        console.log(dividend + ' is prime.')
    }
}


