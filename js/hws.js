// 布置基本随机图形

function start(){
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
}


start();


// --------------------------------------------------


// let img = document.getElementsByTagName('img');
let deck = document.querySelector(".deck");
let lastClick = null;
let result = 0;
let success = document.getElementsByClassName("success");

// 点击事件
deck.addEventListener("click", function(event){
    let cardEl = event.target;
    // 查看nodeName
    console.log("clicked" + cardEl.nodeName);

    // 如果目标nodeName为IMG，则更换card的className
    if (cardEl.nodeName == "IMG"){
        cardEl.parentNode.className = "open";
        console.log("open");

        // 如果上次点击为空，记录上次点击为目标点击
        if (lastClick == null) { 
            lastClick = cardEl;
        } else { 
            // 判断两个节点 
            if (cardEl.src === lastClick.src) {
                cardEl.parentNode.className = "match";
                lastClick.parentNode.className = "match";
                console.log("match");
                
                // 判断是否翻完
                result++;
                console.log(result);
               
                // 如果翻完，显示成功页面
                 if (result == 8) {  
                    console.log("All done")
                    success[0].style.display = "block";
                };
                                
            } else {
                let savelastClick = lastClick;
                cardEl.parentNode.className = "notMatch";
                savelastClick.parentNode.className = "notMatch";
                console.log("notMatch");
                
                // 800毫秒后翻回卡片
                setTimeout(function(){
                    if (cardEl.nodeName == "IMG"){
                        cardEl.parentNode.className = "card";
                        savelastClick.parentNode.className = "card";
                    }
                }, 800)
            }
            // 重置lastClick
            lastClick = null;
        }
    }   
    console.log(cardEl.outerHTML);
});

// 点击refresh按钮刷新页面
let clickRefresh = document.querySelector(".refresh");
let baseCard = document.getElementsByClassName("baseCard");
let removeImg = document.querySelectorAll("img");
    
clickRefresh.addEventListener('click', function(){   
    for(let j=0; j<baseCard.length; j++) {
        removeImg[j].remove();
        baseCard[j].firstElementChild.className = "card";
    }
    start();   
});

// 点击Again按钮刷新页面
let clickAgain = document.querySelector(".again");
    
clickAgain.addEventListener('click', function(){   
    for(let k=0; k<baseCard.length; k++) {
        removeImg[k].remove();
        baseCard[k].firstElementChild.className = "card";
    }
    success[0].style.display = "none";
    start();   
});


