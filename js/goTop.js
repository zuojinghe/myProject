function getWin(attr) {
    return document.documentElement[attr] || document.body[attr];
}
var goTo = document.getElementById("goTop");

//��ȡ��ǰ�����һ��Ļ�ĸ߶�
var curH = getWin("clientHeight");

//������ҳ�������ʱ��,���ǻ�ȡ��ǰ�������ȥ�ĸ߶�,����߶ȴ���curH,�����ǵ�goTo��ʾ,��֮��goTo����~~
function scrollMove() {
    var curT = getWin("scrollTop");
    goTo.style.display = curT > curH ? "block" : "none";
}
window.onscroll = scrollMove;/*�󶨹����¼�*/

goTo.onclick = function () {
    var curT=document.documentElement.scrollTop||document.body.scrollTop;
    document.documentElement.scrollTop=document.body.scrollTop=0;

};
