let circlesContainer = document.querySelector(".circles");

function creatCircles(numCircles, radius) {
  for (var i = 0; i < numCircles; i++) {
    let circle = document.createElement("div");
    let circleParent = document.createElement("div");
    let rotationRadius = i * (360 / numCircles);
    circle.setAttribute("class", "circle");
    circleParent.setAttribute("class", "circleParent");

    gsap.set(circle, {
      x: radius - 40,
      y: -4,
      transformOrigin: "40px 8px",
      rotation: -rotationRadius,
    });
    gsap.set(circleParent, {
      transformOrigin: "left center",
      width: radius,
      height: 4,
      rotation: rotationRadius,
      left: "50%",
      top: "50%",
    });

    circlesContainer.append(circleParent);
    circleParent.append(circle);
  }
}

creatCircles(12, 250);
gsap.set(circlesContainer, { autoAlpha: 1 });

let circleAnimation = gsap.timeline();
circleAnimation
  .to(circlesContainer, {
    rotation: 360,
    duration: 4,
    ease: "none",
  })
  .to(".circle", { rotation: "-=360", duration: 4, ease: "none" }, 0);
