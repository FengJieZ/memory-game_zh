/*
 * 创建一个包含所有卡片的数组
 */
let donuts = ['fa fa-diamond','fa fa-paper-plane-o','fa fa-anchor','fa fa-bolt','fa fa-cube','fa fa-leaf','fa fa-bicycle','fa fa-bomb','fa fa-diamond','fa fa-paper-plane-o','fa fa-anchor','fa fa-bolt','fa fa-cube','fa fa-leaf','fa fa-bicycle','fa fa-bomb'];

/*
 * 显示页面上的卡片
 *   - 使用下面提供的 "shuffle" 方法对数组中的卡片进行洗牌
 *   - 循环遍历每张卡片，创建其 HTML
 *   - 将每张卡的 HTML 添加到页面
 */

function ReStart(){
    const ClickMoves = document.querySelector('.moves');
    ClickMoves.textContent = 0;

    donuts = shuffle(donuts);

    for (let i = 0; i < 16; i ++){
        document.querySelector('.card').remove();
    }

    const mainUl = document.querySelector('.deck');

    for (let i = 0; i < 16; i ++){
        const newLi = document.createElement('li');
        newLi.className = "card";
        const newI = document.createElement('i');
        newI.className = donuts[i];
        newLi.appendChild(newI);
        mainUl.appendChild(newLi);
    }
}

// 洗牌函数来自于 http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}


/*
 * 设置一张卡片的事件监听器。 如果该卡片被点击：
 *  - 显示卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 将卡片添加到状态为 “open” 的 *数组* 中（将这个功能放在你从这个函数中调用的另一个函数中）
 *  - 如果数组中已有另一张卡，请检查两张卡片是否匹配
 *    + 如果卡片匹配，将卡片锁定为 "open" 状态（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果卡片不匹配，请将卡片从数组中移除并隐藏卡片的符号（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 增加移动计数器并将其显示在页面上（将这个功能放在你从这个函数中调用的另一个函数中）
 *    + 如果所有卡都匹配，则显示带有最终分数的消息（将这个功能放在你从这个函数中调用的另一个函数中）
 */
    

 function FlipCard(){
     if (event.target.id != "match"){
        event.target.className = "card open show";
        event.target.id = "open";
        //console.log(event.target.className);
     }
 }

 function CardArrey(){
     var opencard = "";
     opencard = event.target.firstChild.className;
     //console.log(opencard);
     const cardId = document.querySelector('#open');
     if (cardId != null && cardId.firstChild.className === opencard){
        //console.log(cardId.firstChild.className);
        cardId.id = "match";
        cardId.className = "card match";
        event.target.className = "card match";
        event.target.id = "match";
        }
        else if (cardId != null && cardId.firstChild.className != opencard){
            event.target.className = "card";
            event.target.id = "";
            cardId.className = "card";
            cardId.id = "";
        }
     }

     function ClickCard(){
        const ClickMoves = document.querySelector('.moves');
        ClickMoves.textContent ++;
     }

     function Congratulations(){
         const CardID = document.querySelectorAll('.match');
         if (CardID.length === 16){
             console.log("Congratulations");
             alert("Congratulations");
         }
     }
     
 document.addEventListener('click',function(event) {
     if (event.target.className === 'fa fa-repeat'){
        ReStart();
     }else if (event.target.className === 'card'){
        //console.log(event.target.className);
        ClickCard();
        CardArrey();
        FlipCard();
        Congratulations()
     }
 });
 