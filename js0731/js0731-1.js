// 取得送出按鈕
let myBtn = document.getElementById('btn');

// 監聽按鈕的動作
myBtn.addEventListener('click', () => {
    let result = "";
    // 取得全部科目
    let subjects = document.getElementsByName('subject');
    // 使用迴圈逐一檢查是否被選取
    for (let i = 0; i < subjects.length; i++) {
        if (subjects[i].checked) {
            result = subjects[i].value;
            /* 因為是單選，所以找到後就結束迴圈 */
            break;
        }
    }
    console.log('科目' + result);
});