
let daily = ["5hrs", "Last Daily - 7hrs","1hrs","Last Daily - 2hrs","0hrs","Last Daily - 1hrs","1hrs","Last Daily - 1hrs","1hrs","Last Daily - 3hrs","0hrs","Last Daily - 1hrs",];
let weekly = ["32hrs","Last Weekly - 36hrs","2hrs","Last Weekly - 4hrs","7hrs","Last Weekly - 4hrs","5hrs","Last Weekly - 5hrs","10hrs","Last Weekly - 1hrs","2hrs","Last Weekly - 2hrs"];
let monthly = ["103hrs","Last Monthly - 128hrs","23hrs","Last Monthly - 29hrs","13hrs","Last Monthly - 19hrs","11hrs","Last Monthly - 18hrs","21hrs","Last Monthly - 23hrs","7hrs","Last Monthly - 11hrs"];

document.getElementById('daily').onclick = function(e){
    document.getElementById('daily').style.color = "white";
    document.getElementById('weekly').style.color = "#82868f";
    document.getElementById('monthly').style.color = "#82868f";
    document.getElementById("d1").innerHTML = daily[0];
    document.getElementById("d2").innerHTML = daily[1];
    document.getElementById("d3").innerHTML = daily[2];
    document.getElementById("d4").innerHTML = daily[3];
    document.getElementById("d5").innerHTML = daily[4];
    document.getElementById("d6").innerHTML = daily[5];
    document.getElementById("d7").innerHTML = daily[6];
    document.getElementById("d8").innerHTML = daily[7];
    document.getElementById("d9").innerHTML = daily[8];
    document.getElementById("d10").innerHTML = daily[9];
    document.getElementById("d11").innerHTML = daily[10];
    document.getElementById("d12").innerHTML = daily[11];
    return false; // или e.preventDefault();
  }
document.getElementById('weekly').onclick = function(e){
  document.getElementById('daily').style.color = "#82868f";
  document.getElementById('weekly').style.color = "white";
  document.getElementById('monthly').style.color = "#82868f";
    document.getElementById("d1").innerHTML = weekly[0];
    document.getElementById("d2").innerHTML = weekly[1];
    document.getElementById("d3").innerHTML = weekly[2];
    document.getElementById("d4").innerHTML = weekly[3];
    document.getElementById("d5").innerHTML = weekly[4];
    document.getElementById("d6").innerHTML = weekly[5];
    document.getElementById("d7").innerHTML = weekly[6];
    document.getElementById("d8").innerHTML = weekly[7];
    document.getElementById("d9").innerHTML = weekly[8];
    document.getElementById("d10").innerHTML = weekly[9];
    document.getElementById("d11").innerHTML = weekly[10];
    document.getElementById("d12").innerHTML = weekly[11];
    return false; // или e.preventDefault();
  }
  document.getElementById('monthly').onclick = function(e){
    document.getElementById('daily').style.color = "#82868f";
    document.getElementById('weekly').style.color = "#82868f";
    document.getElementById('monthly').style.color = "white";
    document.getElementById("d1").innerHTML = monthly[0];
    document.getElementById("d2").innerHTML = monthly[1];
    document.getElementById("d3").innerHTML = monthly[2];
    document.getElementById("d4").innerHTML = monthly[3];
    document.getElementById("d5").innerHTML = monthly[4];
    document.getElementById("d6").innerHTML = monthly[5];
    document.getElementById("d7").innerHTML = monthly[6];
    document.getElementById("d8").innerHTML = monthly[7];
    document.getElementById("d9").innerHTML = monthly[8];
    document.getElementById("d10").innerHTML = monthly[9];
    document.getElementById("d11").innerHTML = monthly[10];
    document.getElementById("d12").innerHTML = monthly[11];
    return false; // или e.preventDefault();
  }