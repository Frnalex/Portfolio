import barba from "@barba/core";
import gsap from "gsap";

function delay(n) {
    n = n || 2000;
    return new Promise((done) => {
        setTimeout(() => {
            done();
        }, n);
    });
}

let linkClicked = null;
const projectLinks = document.querySelectorAll(".projects__item");

projectLinks.forEach((link) => {
    link.addEventListener("click", () => {
        linkClicked = link;
    });
});

// Function to add and remove the page transition screen
function pageTransition() {
    let tl = gsap.timeline();
    tl.to(".screen__white", { duration: 0.5, transform: "translateY(-100%)" });
    tl.to(".screen__black", { duration: 0.5, transform: "translateY(-100%)", delay: "-0.35" });
    tl.to(".screen__black", { duration: 0.5, transform: "translateY(-200%)", delay: 0.8 });
    tl.to(".screen__white", { duration: 0.5, transform: "translateY(-200%)", delay: "-0.35" });
    tl.set(".screen__black", { transform: "translateY(0)" });
    tl.set(".screen__white", { transform: "translateY(0)" });
}

function pageTransition2() {
    const projectImg = linkClicked.querySelector(".project__img");
    console.log(projectImg);

    let tl = gsap.timeline();
    // tl.set(projectImg, { duration: 0.5, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" });
    tl.to(".screen__white", { duration: 0.5, transform: "translateY(-50%)", delay: 1 });
    tl.to(".screen__black", { duration: 0.5, transform: "translateY(-50%)", delay: "-0.35" });
    tl.to(".screen__black", { duration: 0.5, transform: "translateY(-100%)", delay: 0.8 });
    tl.to(".screen__white", { duration: 0.5, transform: "translateY(-100%)", delay: "-0.35" });
    tl.set(".screen__black", { transform: "translateY(0)" });
    tl.set(".screen__white", { transform: "translateY(0)" });
}

barba.init({
    transitions: [
        {
            name: "default-transition",
            leave(data) {
                pageTransition();
                return gsap.to(data.current.container, {});
            },
            enter(data) {},
        },
    ],
});
