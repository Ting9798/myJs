let myDrinks = document.getElementsByName('drinks');
// console.log(myDrinks);

// for (let i = 0; i < myDrinks.length; i++) {
//     console.log(myDrinks.item(i).value);
//     console.log(myDrinks[i].value);
// }

// 取得勾選的項目內容
// 1.找到按鈕
let myBtn = document.querySelector('#btn');
// 2.監聽按鈕是否被按了(click =>左鍵一下的事件)
myBtn.addEventListener('click', function () {
    let arrResult = [];
    let arrResultNot = [];

    // 被勾選的項目
    for (let i = 0; i < myDrinks.length; i++) {
        if (myDrinks[i].checked) {
            arrResult.push(myDrinks[i].value);
        }

        if (!myDrinks[i].checked) {
            arrResultNot.push(myDrinks[i].value);
        }
    }
    console.log('選取:' + arrResult);
    console.log('未選取:' + arrResultNot);
});