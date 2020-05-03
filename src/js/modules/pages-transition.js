import gsap from "gsap";
import Swup from "swup";
import SwupJsPlugin from "@swup/js-plugin";

let options = [
    {
        from: "/",
        to: "/",
        in: function () {
            pageTransitionOut();
        },
        out: (next) => {
            pageTransitionIn();
            gsap.to(document.querySelector("#swup"), {
                onComplete: next,
            });
        },
    },
];

let linkClicked = null;
const projectLinks = document.querySelectorAll(".projects__item");

console.log(projectLinks);
projectLinks.forEach((link) => {
    link.addEventListener("click", () => {
        document.addEventListener("swup:clickLink", (event) => {
            console.log("Coucou");
            setTimeout(function () {
                console.log("Coucoufin");
            }, 5000);
        });
    });
});

const swup = new Swup({
    plugins: [new SwupJsPlugin(options)],
});

// Function to add and remove the page transition screen
function pageTransitionIn() {
    let tl = gsap.timeline();
    tl.to(".screen__white", { duration: 0.5, transform: "translateY(-100%)" });
    tl.to(".screen__black", { duration: 0.5, transform: "translateY(-100%)", delay: "-0.35" });
}
function pageTransitionOut() {
    let tl = gsap.timeline();
    tl.to(".screen__black", { duration: 0.5, transform: "translateY(-200%)", delay: 0.8 });
    tl.to(".screen__white", { duration: 0.5, transform: "translateY(-200%)", delay: "-0.35" });
    tl.set(".screen__black", { transform: "translateY(0)" });
    tl.set(".screen__white", { transform: "translateY(0)" });
}

function pageTransition2() {
    // const projectImg = linkClicked.querySelector(".project__img");
    // console.log(projectImg);

    let tl = gsap.timeline();
    // tl.set(projectImg, { duration: 0.5, clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" });
    tl.to(".screen__white", { duration: 0.5, transform: "translateY(-50%)", delay: 1 });
    tl.to(".screen__black", { duration: 0.5, transform: "translateY(-50%)", delay: "-0.35" });
    tl.to(".screen__black", { duration: 0.5, transform: "translateY(-100%)", delay: 0.8 });
    tl.to(".screen__white", { duration: 0.5, transform: "translateY(-100%)", delay: "-0.35" });
    tl.set(".screen__black", { transform: "translateY(0)" });
    tl.set(".screen__white", { transform: "translateY(0)" });
}

function image() {}
