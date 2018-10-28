console.log("connected!");


function renderTime(){
    var myDate = new Date();
    var year = myDate.getFullYear();
    var day = myDate.getDay();
    var month = myDate.getMonth();
    var dayM = myDate.getDate();
    var dayArray = new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday");
    var monthArray = new Array("Jan","Feb","March","Apr","May","June","Jul","Aug","Sep","Oct","Nov","Dec");
    // Date end

    // Time 

    var currentTime = new Date()
    var h = currentTime.getHours();
    var m = currentTime.getMinutes();
    var s = currentTime.getSeconds();
        if (h===24){
            h=0;
        }else if (h>12){
            h = h-0;
        }
        if(h<10){
            h = "0"+h;
        }
        if (m<10){
            m ="0"+m;
        }
        if (s<10){
            s ="0"+s
        }
        var myClock=document.getElementById("clock");
        myClock.textContent = dayArray[day] + dayM + monthArray[month]+ year + h + m + s;
        myClock.innerText =""+ dayArray[day]+ ", " + dayM + " " + monthArray[month]+ " " + year + "   ***   " + h + ":" + m + ":" + s;
        setTimeout ("renderTime()",1000);
}

renderTime();


body= document.querySelector('body');
isBlue = false;
setInterval(function(){
    if(isBlue){
        body.style.background="#5989d6";
    }else{ 
        body.style.background="#6091e0";
    }
    isBlue = !isBlue;
},1000);


colorChanged= document.getElementById("colorChange");
isGreen = false;
setInterval(function(){
    if(isGreen){
        colorChanged.style.background="#6091e0";
    }else{ 
        colorChanged.style.background="#5989d6";
    }
    isGreen = !isGreen;
},1000);


var button= document.querySelector("button");
var paragraph = document.querySelector("p");
button.addEventListener("click", function(){
    paragraph.textContent = "somebody has clicked me!";
})
