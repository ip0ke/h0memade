function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    getFancyDate();
    var t = setTimeout(startTime, 500);
    if(h == 00 && m == 00 && s == 01){

    	getFancyDate();
    }
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function getFancyDate(){
	var today = new Date();
	var d = today.getDate();
	var months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
	var m = today.getMonth('mm');
	var y = today.getFullYear();
	document.getElementById('date').innerHTML = "&nbsp" + months[m] + ", the " + getOrdinal(d) + " " + y;
}

function getOrdinal(n) {
    if((parseFloat(n) == parseInt(n)) && !isNaN(n)){
        var s=["th","st","nd","rd"],
        v=n%100;
        return n+(s[(v-20)%10]||s[v]||s[0]);
    }
    return n;     
}

/*function weather (json) {
  aler('test');
}*/
