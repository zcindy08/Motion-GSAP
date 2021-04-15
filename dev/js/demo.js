import $ from "jquery";
import {gsap} from "gsap";

var redBox = $('.red-box');
var blueBox = $('.blue-box');
var orangeBox = $('.orange-box');

var boxArray = [redBox, blueBox, orangeBox];

// only here to make codeKit be quiet!
//console.log(gsap);

$(document).ready(function(){

  console.log('Page loaded');

  //gsap.to(target ,{vars});

//methods
//.to
//.from
//.fromTo
//.set

//gsap.to(redBox ,{duration:0.5, x:300});
//gsap.from(redBox ,{duration:0.5, x:300});
//gsap.fromTo(redBox ,{x:100},{duration:0.25, x:500});

//gsap.to(boxArray ,{duration:0.5, x:300, opacity:0.5});

//transforms : x, y, scale, scaleY, scaleX, rotations, skeX, skewY
//opacity, alpha, autoAlpha

//special properties
//	Duration, callbacks, delays, easing, staggers, repeat, yoyo, repeatDelay
//forever -1
//gsap.to(blueBox ,{duration:0.5, x:200, repeat:7, yoyo:true, repeatDelay:1});

//absolute vs relative
//gsap.set(redBox ,{ x:200});
//absolute
//gsap.to(redBox ,{duration:0.5, x:100});
//relative
//gsap.to(redBox ,{duration:0.5, x:"+=100"});

//Origin
//gsap.set(blueBox ,{ x:400});
//gsap.to(blueBox ,{duration:0.5, rotation:"200_ccw", transformOrigin:"200px 0px"});

//easing
//https://greensock.com/ease-visualizer
//in
//out
//inOut
//gsap.to(redBox ,{duration:2, x:400, ease:"elastic.out(1,0.3)"});

//stagger
gsap.to(boxArray ,{duration:0.5, x:300, opacity:0.5, stagger:{amount:0.5,from:"edges"}});

// gsap.to(redBox ,{duration:0.5, x:400, ease:"expo.out", delay:1.5});
// gsap.to(blueBox ,{duration:0.5, x:400, ease:"expo.out", delay:2});
// gsap.to(orangeBox ,{duration:0.5, x:400, ease:"expo.out", delay:1});

});
