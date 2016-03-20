function getWin(attr) {
    return document.documentElement[attr] || document.body[attr];
}
var goTo = document.getElementById("goTop");

//获取当前浏览器一屏幕的高度
var curH = getWin("clientHeight");

//当我们页面滚动的时候,我们获取当前浏览器卷去的高度,如果高度大于curH,让我们的goTo显示,反之让goTo隐藏~~
function scrollMove() {
    var curT = getWin("scrollTop");
    goTo.style.display = curT > curH ? "block" : "none";
}
window.onscroll = scrollMove;/*绑定滚动事件*/

goTo.onclick = function () {
    var curT=document.documentElement.scrollTop||document.body.scrollTop;
    document.documentElement.scrollTop=document.body.scrollTop=0;

};
