gsap.defaults({ duration: 1 });
let button = document.querySelector(".btn");
gsap.to(".wrapper", { autoAlpha: 1 });
gsap.set(".bar", { scaleX: 0, transformOrigin: "left center" });
let exitTime = 0;

const tl = gsap.timeline({ paused: true }).to(".bar", { scaleX: 1 }).addPause();
exitTime = tl.duration();
tl.to(".bar", { x: 200 });

// const enter = gsap.timeline({paused:true})
// enter.to(".bar", {scaleX:1})

// let exit = gsap.timeline({paused:true})
// exit.to(".bar", {x:200})

button.addEventListener("mouseenter", () => {
  if (tl.time() < exitTime) {
    tl.play();
  } else {
    tl.restart();
  }
});
button.addEventListener("mouseleave", () => {
  if (tl.time() < exitTime) {
    tl.reverse();
  } else {
    tl.play();
  }
});
