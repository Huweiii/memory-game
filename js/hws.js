let deck = document.querySelector(".deck");

// 点击后普通效果 绿色背景 open
deck.addEventListener("click", function(open){
    let card = event.target;
    console.log("clicked");
    card.className = "card open";
});

// 点击后匹配效果 蓝色背景 match
deck.addEventListener("click", function(match){
    let card = event.target;
    console.log("clicked");
    card.className = "card match";
    console.log("matched")
});

// 点击后不匹配效果 红色背景 notMatch
deck.addEventListener("click", function(notMatch){
    let card = event.target;
    console.log("clicked");
    card.className = "card notMatch";
    console.log("not matched")
});



// 随机图片
// let img = document.querySelector("img")

function getImg(randomNum) {  
    console.log("img/shape_" + randomNum + ".png");
}

getImg(8);


document.querySelector("img").src = getImg;




