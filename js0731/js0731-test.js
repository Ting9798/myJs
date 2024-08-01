let myDrinks = document.getElementsByName('drinks');
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
    // 被勾選
    let strDrinks = '';
    if (arrResult.length > 0) {
        strDrinks = '<div><ul id="Sel">被勾選項目';
        for (let i = 0; i < arrResult.length; i++) {
            strDrinks = strDrinks + `<li>${arrResult[i]}</li>`;
        }
        strDrinks = strDrinks + '</ul><div>';
    }

    // 未被勾選
    let strNotDrinks = '';
    if (arrResultNot.length > 0) {
        strNotDrinks = '<div><ul id="notSel">未被勾選項目';
        for (let i = 0; i < arrResultNot.length; i++) {
            strNotDrinks = strNotDrinks + `<li>${arrResultNot[i]}</li>`;
        }
        strNotDrinks = strNotDrinks + '</ul><div>';
    }

    let getDrinks = document.getElementById('showDrinks');
    getDrinks.innerHTML = strDrinks + strNotDrinks;
});