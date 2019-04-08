/*
 * 创建一个包含所有卡片的数组
 */
var cards = ['fa fa-diamond',
            'fa fa-paper-plane-o',
            'fa fa-anchor',
            'fa fa-bolt',
            'fa fa-cube',
            'fa fa-leaf',
            'fa fa-bicycle',
            'fa fa-bomb'
            ];
cards = cards.concat(cards);
/*
 * 显示页面上的卡片
 *   - 使用下面提供的 "shuffle" 方法对数组中的卡片进行洗牌
 *   - 循环遍历每张卡片，创建其 HTML
 *   - 将每张卡的 HTML 添加到页面
 */
var timer1 = null;

ReStart();
timedCount();

function Reload(){
    window.location.reload();
}

function ReStart(){
    const mainStarts = document.querySelector('.stars');
    for (let i = 0; i < 3; i ++){
        document.querySelector('.stars').firstElementChild.remove();
    }
    for (let i = 0; i < 3; i ++){
        const newL = document.createElement('li');
        const newFa = document.createElement('i');
        newFa.className = "fa fa-star";
        newL.appendChild(newFa);
        mainStarts.appendChild(newL);
    }

    const ClickMoves = document.querySelector('.moves');
    ClickMoves.textContent = 0;

    cards = shuffle(cards);

    for (let i = 0; i < 16; i ++){
        document.querySelector('.card').remove();
    }

    const mainUl = document.querySelector('.deck');

    for (let i = 0; i < 16; i ++){
        const newLi = document.createElement('li');
        newLi.className = "card";
        const newI = document.createElement('i');
        newI.className = cards[i];
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
    stopTime();
    const CardID = document.querySelectorAll('.match');
    if (CardID.length === 16){
        console.log("time stop: " + timer1);
        window.clearInterval(timer1);
        console.log("Congratulations");
        var time2 = timer1 / 1000;
        var CMoves = document.querySelector('.moves').textContent;
        var StarN = document.querySelector('.stars').children.length;
        alert("Congratulations! " + " You used " + time2 + "seconds. " + " And with" + CMoves + "moves. " + " And " + StarN + " stars ");
        
     }
}

function Starts(){
    //console.log(timer1);
    if (timer1 === 20000 ){
        if (document.querySelector('.stars').children.length != 0){
            document.querySelector('.stars').firstElementChild.remove();
            //return;
        }
    }else if(timer1 === 399999 ){
        if (document.querySelector('.stars').children.length != 0){
            document.querySelector('.stars').firstElementChild.remove();
            //return;
        }
    }else if(timer1 === 900000){
        if (document.querySelector('.stars').children.length != 0){
            document.querySelector('.stars').firstElementChild.remove();
            //return;
        }
    }
}


function timedCount(){
    timer1 = window.setInterval(timedCount,1000);
    Starts();
    //console.log(timer);
}

function stopTime(){
    window.clearInterval(timer1);
}
     
document.addEventListener('click',function(event) {
    if (event.target.className === 'fa fa-repeat'){
        Reload();
    }else if (event.target.className === 'card'){
        ClickCard();
        CardArrey();
        FlipCard();
        Congratulations();
     }
    });