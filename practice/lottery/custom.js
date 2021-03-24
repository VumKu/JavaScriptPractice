
// 隨機選數字，原本取出的數字，假設x為5，那floor出來的值會落在0 ~ 4，所以要+1，讓隨機的數字落在1 ~ 5。
function getRandom(x) {
    return Math.floor(Math.random() * x) + 1;
}

let arr = [];
let n = 0;

function getPowerNum() {
    for (let i = 1; i <= 6; i++) {

        let num = getRandom(38);

        if (arr.indexOf(num) > -1) {
            i--
            continue;
            // indexOf 找 arr 裡面該索引值，找不到該值就會回傳-1
            // 如果找到了該值，回傳的索引值就會是[0]、[1]...，有大於-1，則進入i--(i=i-1)，再回到外層i++做一次
        }
        else {
            arr.push(num);
            // 上面不符合 > -1時，進入這層，加到arr
        }
    }

    arr.sort(function (a, b) {
        return a - b;
    })

    // 第二區數字
    n = getRandom(8)

    return `第一區號碼為：${arr.join(",")} , 第二區號碼為：${n}`


}



alert(getPowerNum());

