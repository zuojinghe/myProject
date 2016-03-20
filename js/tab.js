var oTab = document.getElementById("tabs");
var oLis = oTab.getElementsByTagName("li");
var oDivs = oTab.getElementsByTagName("div");
for (var i = 0; i < oLis.length; i++) {
    var oLi = oLi[i];
    oLi.tabIndex = i;
    oLi.onmousemove = function () {
        for (var j = 0; j < oLis.length; j++) {
            oLis[j].className = "";
            oDivs[j].className = "";
        }
        this.className="select";
        oDivs[this.tabIndex].className="select";
    }
}
