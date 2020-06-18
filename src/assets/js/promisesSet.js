let textInput = document.getElementById("text--input");
let p = document.getElementById("text");
console.log(p);

// textInput.addEventListener("keydown", function() {
//   function caserUpper(val) {
//     return new Promise((resolve, reject) => {
//       resolve(val.toUpperCase());
//       reject("cul");
//     });
//   }

//   async function msg(val) {
//     try {
//       const msg = await caserUpper(val);
//       p[0].innerText = msg;
//     } catch (err) {
//       console.log("Ohh no:", err.message);
//       p[0].innerText = err.message;
//     }
//   }
//   msg(this.value);
//   // msg("123123");
// });

//----------------------------------------
// textInput.addEventListener("keyup", function() {
//   var i = this.value;
//   console.log(i);

//   function yayOrNay(value) {
//     return new Promise((resolve, reject) => {
//       if (i === "5") {
//         resolve("Ok");
//       } else {
//         reject("Not Ok");
//       }
//     });
//   }

//   async function parrallel(x) {
//     try {
//       const msg = await yayOrNay();
//       console.log(msg);
//       x = msg;
//     } catch (err) {
//       console.error(err);
//       x = err;
//     }
//   }
//   parrallel(this.value);
// });
//-----------------------------------------
// const startTime = new Date().getTime();
// const timer = document.querySelector("#timer");
// const timerId = setInterval(() => refreshTimer(), 5);

// function refreshTimer() {
//   timer.innerText = `En cours depuis : ${new Date().getTime() -
//     startTime} millisecondes`;
// }

// function clearTimer() {
//   clearInterval(timerId);
//   timer.remove();
// }

// function afficherLeResultat(promesse, resultat, tenue) {
//   const div = document.createElement("div");
//   div.innerText = `La promesse ${promesse} retourne ${resultat}`;
//   div.classList.add(tenue ? "succes" : "echec");
//   document.querySelector("#app").append(div);
// }


// function rejectLeResultat(promesse, resultat, tenue) {
//     const div = document.createElement("div");
//     div.innerText = `La promesse ${promesse} retourne ${resultat}`;
//     div.classList.add(tenue ? "succes" : "echec");
//     document.querySelector("#app").append(div);
//   }

// function toggleLoader() {
//   const loader = document.querySelector(".loader");
//   loader.style.display = loader.display === "none" ? "" : "none";
// }
// var num = 4;
// //  Il suffit d'utiliser la flèche de rafraichissement pour relancer l'expérience :
// const fp1 = () => new Promise((resolve,reject) => {if (num === 5) {resolve(42)}else{reject(55)}});
// // const fp2 = () => new Promise((resolve,reject) => resolve(12));

// async function concurrent() {
//   try {
//     // let p1 = fp1();
//     // const p2 = fp2();
//     let val1 = await fp1();
//     afficherLeResultat("p1", val1, true);
//     // const val2 = await p2;
//     // afficherLeResultat("p2", val2, true);
//   } catch (err) {
//     // console.error(err);
//     rejectLeResultat("p1", err, true);
//   } finally {
//     toggleLoader();
//     clearTimer();
//   }
// }
// concurrent();
