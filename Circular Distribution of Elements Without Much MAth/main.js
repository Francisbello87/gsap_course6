let circlesContainer = document.querySelector(".circles");

function creatCircles(numCircles, radius) {
  for (var i = 0; i < numCircles; i++) {
    let circle = document.createElement("div");
    let circleParent = document.createElement("div");
    circle.setAttribute("class", "circle");
    circleParent.setAttribute("class", "circleParent");
    circle.textContent = "F";
    gsap.set(circle, {x:100})
    gsap.set(circleParent, {transformOrigin:'left 0', rotation: i * (360 / numCircles)})
    // gsap.set(circle, {
    //   x: radius,
    //   transformOrigin: `${-radius}px 0`,
    //   rotation: i * (360 / numCircles),
    // });
    circlesContainer.append(circleParent);
    circleParent.append(circle)
  }
}

creatCircles(15, 100);

let circleAnimation = gsap.timeline();
circleAnimation.from(".circle", {
  x:0,
  scale:0,
  duration: 0.5,
  stagger: { each: 0.1 },
})
.to('.circle', { rotation:360,})
