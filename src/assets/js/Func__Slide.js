
var Numb0 = document.getElementById("0");
var Numb1 = document.getElementById("1");

var prevBtn = document.getElementById("btn--prev");
var nextBtn = document.getElementById("btn--next");

var btnStop = document.getElementById("stop--interval");
var btnPlay = document.getElementById("play--interval");
var myVar;
nextBtn.classList.add("active");
Numb0.classList.add("active");
var Num = 0;
myVar = setInterval(myTimer, 3000);

function myTimer() {
  Num++;

  if (Num === 2) {
    Num = 0;
  }
  if (Num < 1) {
    prevBtn.classList.remove("active");
    nextBtn.classList.add("active");

    Numb0.classList.add("active");
    Numb1.classList.remove("active");
  }
  if (Num > 0) {
    prevBtn.classList.add("active");
    nextBtn.classList.remove("active");

    Numb1.classList.add("active");
    Numb0.classList.remove("active");
  }
}

btnPlay.addEventListener("click", function() {
  myVar = setInterval(myTimer, 3000);
});

btnStop.addEventListener("click", function() {
  clearInterval(myVar);
});

prevBtn.addEventListener("click", function() {
  clearInterval(myVar);
  prevBtn.classList.remove("active");
  nextBtn.classList.add("active");

  Numb1.classList.remove("active");
  Numb0.classList.add("active");
  console.log("clickprev");
});

nextBtn.addEventListener("click", function() {
  clearInterval(myVar);
  prevBtn.classList.add("active");
  nextBtn.classList.remove("active");

  Numb0.classList.remove("active");
  Numb1.classList.add("active");
  console.log("clicknext");
});
