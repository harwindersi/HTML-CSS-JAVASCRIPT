
// let int = null;
// let [milliseconds,seconds,minutes,hours]=[0,0,0,0]
// let timeref = document.getElemen("stopwatch");

let [milliseconds,seconds,minutes,hours] = [0,0,0,0];
let timeref = document.querySelector(".box2");
let int = null;



const startwatch=()=>{

    if(int!==null){clearInterval(int)}
    int = setInterval(displaytime,10);
}

const displaytime=()=>{
    milliseconds+=10;

    if(milliseconds==1000){
        milliseconds =0;
        seconds++;

        if(seconds==60){ 
            seconds=0;
            minutes++;
            
            if(minutes == 60){
                minutes=0;
                hours++;
            }
        }
        
    }
    
    
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;
    let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
    
    timeref.innerHTML = ` ${h} : ${m} : ${s} : ${ms}`;
}


const stopwatch=()=>{
    
    clearInterval(int)
}

const resetwatch=()=>{
    // clearInterval(int)
    // [milliseconds,seconds,minutes,hours]=[0,0,0,0]
    // timeref.innerHTML=`00:00:00:000`;
    clearInterval(int);
    [milliseconds,seconds,minutes,hours] = [0,0,0,0];
    timeref.innerHTML = '00 : 00 : 00 : 000 ';
}

// let h = hours <10 ? "0"+ hours:hours;
// let m = minutes <10 ?"0"+ minutes:minutes;
// let s = seconds <10 ? "0"+ seconds:seconds;
// let ms = milliseconds <10 ? "00"+ milliseconds:milliseconds <100 ? "0"+milliseconds:milliseconds;
//  timeref.innerHTML=`${h}:${m}:${s}:${ms}`