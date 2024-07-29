// 取得元素節點node
// 根據ID
let myJs = document.getElementById('js');
console.log(typeof myJs);
console.log(myJs.textContent);
// 根據querySelector
console.log(document.querySelector('#js').textContent);

// 根據標籤
let myTagName = document.getElementsByTagName('li');
console.log(typeof myTagName);
console.log(myTagName);

// 取出CSS
console.log(myTagName.item(1).textContent);
console.log(myTagName[1].textContent);

// 顯示所有的li
for (let i = 0; i < myTagName.length; i++) {
    console.log(myTagName.item(1).textContent);
    console.log(myTagName[1].textContent);
}

console.log(document.querySelector('h1').textContent);
console.log(document.getElementsByTagName('h1').item(0).textContent);
console.log(document.getElementsByTagName('h1')[0].textContent);

let mySubject = document.getElementsByClassName('subject');
for (let i = 0; i < mySubject.length; i++) {
    console.log(mySubject[i].textContent);
}

//取得id
console.log(document.getElementById('p1').textContent);
//取得p
let myP1 = document.querySelector('p');
console.log(myP1);
//取得li裡第一個p
let myP2 = document.querySelectorAll('li>p');
console.log(myP2[1].textContent);

//取得div段落p
let myP3 = document.querySelectorAll('li>div>p');
console.log(myP3[0].textContent);
