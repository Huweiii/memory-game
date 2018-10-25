
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
    // console.log(data[i]);
    card.appendChild(getImg);
}

let img = document.getElementsByTagName('img');
let deck = document.querySelector(".deck");

// --------------------------------------------------


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
    
    // 800毫秒后翻回卡片
    setTimeout(function(){
        if (event.target.nodeName == "IMG"){
        cardEl.parentNode.className = "card";
        }
    }, 800)
    
});
























