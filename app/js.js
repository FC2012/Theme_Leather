var rou = document.getElementById('ROU');
var bod = document.getElementById('BODY');
var cro = document.getElementById('CROSS');
var sq1 = document.getElementById('sq1');
var sq2 = document.getElementById('sq2');
var sq3 = document.getElementById('sq3');
var sq4 = document.getElementById('sq4');
cro.addEventListener('click', functionCross);

function functionCross () {
  
if ( rou.classList.contains("-activeROU") === true ) {
  rou.classList.remove("-activeROU");
} else { 
   rou.classList.add("-activeROU");
}
  
  
if ( sq1.classList.contains("-active1") === true ) {
  sq1.classList.remove("-active1");
} else { 
   sq1.classList.add("-active1");
}

if ( sq2.classList.contains("-active2") === true ) {
  sq2.classList.remove("-active2");
} else { 
   sq2.classList.add("-active2");
}

if ( sq3.classList.contains("-active3") === true ) {
  sq3.classList.remove("-active3");
} else { 
   sq3.classList.add("-active3");
}

if ( sq4.classList.contains("-active4") === true ) {
  sq4.classList.remove("-active4");
} else { 
   sq4.classList.add("-active4");
}
}


