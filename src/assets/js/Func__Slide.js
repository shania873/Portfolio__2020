

    // and here's the trick (works everywhere)
// function r(f){/in/.test(document.readyState)?setTimeout('r('+f+')',9):f()}
// use like


  function SliderFunc(){
    console.log('test');

  var Numb0 = document.querySelectorAll(".Numb0");
  var Numb1 = document.querySelectorAll(".Numb1");
  
  var prevBtn = document.getElementById("btn--prev");
  var nextBtn = document.getElementById("btn--next");
  
  var btnStop = document.getElementById("stop--interval");
  var btnPlay = document.getElementById("play--interval");
  var myVar;
  
  // console.log(Numb0);
  // console.log(Numb1);
  
  nextBtn.classList.add("active");
  
  Numb0.forEach(element => {
      // console.log(element);
      element.classList.add("active");    
  });
  
  
  
  
  var Num = 0;
  myVar = setInterval(myTimer, 3000);
  
  function myTimer() {
    Num++;
  
  //   console.log(Numb0);
  
    if (Num === 2) {
      Num = 0;
    }
  
    if (Num < 1) {
      prevBtn.classList.remove("active");
      nextBtn.classList.add("active");
  
      Numb0.forEach(element => {
          element.classList.add("active");   
          // console.log(element); 
      });
      Numb1.forEach(element => {
          element.classList.remove("active");
          // console.log(element);
      });  
    }
  
    if (Num > 0) {
      prevBtn.classList.add("active");
      nextBtn.classList.remove("active");
  
      Numb0.forEach(element => {
          element.classList.remove("active");  
          // console.log(element);
      });
      Numb1.forEach(element => {
          element.classList.add("active");
          // console.log(element);
      });
    }
  }
  
  btnPlay.addEventListener("click", function() {
    myVar = setInterval(myTimer, 3000);
    console.log(myVar);
  });
  
  btnStop.addEventListener("click", function() {
    clearInterval(myVar);
    console.log(myVar);
  });
  
  prevBtn.addEventListener("click", function() {
    clearInterval(myVar);
    prevBtn.classList.remove("active");
    nextBtn.classList.add("active");
  
   
      Numb0.forEach(element => {
          console.log(element);
          element.classList.add("active");    
      });
      Numb1.forEach(element => {
          console.log(element);
          element.classList.remove("active");
      });  
    console.log("clickprev");
    console.log(myVar);
  });
  
  nextBtn.addEventListener("click", function() {
    clearInterval(myVar);
    prevBtn.classList.add("active");
    nextBtn.classList.remove("active");
    console.log(myVar);
  
      Numb0.forEach(element => {
          console.log(element);
          element.classList.remove("active");  
      });
      Numb1.forEach(element => {  
          console.log(element);
          element.classList.add("active");
      });
    console.log("clicknext");
  });
  
  }
  
  SliderFunc();