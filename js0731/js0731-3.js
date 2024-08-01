// 建立存放結果的變數
let arrResult = '';
// 取得按鈕動作
let myBtn = document.getElementById('btn');

// 監聽按鈕
myBtn.addEventListener('click', () => {
    // 取得下拉式方塊
    let myCity = document.getElementById('city');
    // 逐一檢查是否被選取 =>selected
    for (let i = 0; i < myCity.length; i++) {
        if (myCity[i].selected) {
            if (myCity[i].value == '') {
                arrResult = '請選擇城市';
            } else {
                arrResult = myCity[i].value;
            }
            break;
        }
    }
    console.log('縣市:' + arrResult);
});