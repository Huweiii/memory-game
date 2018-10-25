
// 获取所有.card元素 （这是一个数列）
const cardEl = document.querySelectorAll(".card");
console.log(cardEl);

//用Math.random()函数生成0~1之间的随机数与0.5比较，返回-1或1
function randomsort(a, b) {
	return Math.random()>.5 ? -1 : 1;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8];
let data = [...arr,...arr];
// arr.sort(randomsort);
// data输出1-8随机数组
data.sort(randomsort);
console.info(data);

// 用for循环，将所有取到的.card list集合 依次加入img
for(var i=0; i<cardEl.length; i++) {
    card = cardEl[i];
    // 给card添加子元素img
    const getImg = document.createElement("img");
    // 取到随机图片
    getImg.src = "img/shape_" + data[i] + ".png";
    // getImg.src = "img/shape_8.png";
    card.appendChild(getImg);
}

let img = document.getElementsByTagName('img');
let deck = document.querySelector(".deck");

// 点击后普通效果 绿色背景 open
deck.addEventListener("click", function(event){
    let cardEl = event.target;
    // 查看nodeName
    console.log("clicked" + event.target.nodeName);
    // 如果目标nodeName为IMG，则更换card的className
    if (event.target.nodeName == "IMG"){
        cardEl.parentNode.className = "open";
        console.log("open");
    }
});





// 为所有card添加点击事件 
// let cardList = document.querySelectorAll('.card');
//   for(var i=0; i<cardList.length; i++){
//     cardList[i].addEventListener('click',function(open){
//       open.target.className = 'open';
//   });
// }


// function changebg(deck){
//     console.log(deck);
























// // 点击后匹配效果 蓝色背景 match
// deck.addEventListener("click", function(match){
//     let card = event.target;
//     console.log("clicked");
//     card.className = "card match";
//     console.log("matched")
// });

// // 点击后不匹配效果 红色背景 notMatch
// deck.addEventListener("click", function(notMatch){
//     let card = event.target;
//     console.log("clicked");
//     card.className = "card notMatch";
//     console.log("not matched")
// });



// 随机图片
// let img = document.querySelector("img")

// function getImg(randomNum) {  
//     console.log("img/shape_" + randomNum + ".png");
//     return getImg;
// }

// getImg(2);

// // document.querySelector("img").src = getImg;








