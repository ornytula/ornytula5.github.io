var play = document.querySelector("#play,#play1");
var pause = document.querySelector("#pause");
var resume = document.querySelector("#resume");
var reverse = document.querySelector("#reverse,#revers1");
var restart = document.querySelector("#restart");

var tl = gsap.timeline({paused: true});

gsap.to(".box1", {duration: 1,scale:10,opacity:1})
gsap.to(".box2", {duration: 1,scale:10,opacity:1})
gsap.to(".box3", {duration: 1,scale:10,opacity:1})
gsap.to(".box4", {duration: 1.9, scale:10,opacity:1,})
  gsap.to(".slider-iteams", {opacity:0,y:200, duration:2.9})

play.onclick = function() {
  tl.play();
}

pause.onclick = function() {
  tl.pause();
}

resume.onclick = function() {
  tl.resume();
}

reverse.onclick = function() {
  tl.reverse();tl.revers1();
}

restart.onclick = function() {
  tl.restart();
 tl.restart1();
}