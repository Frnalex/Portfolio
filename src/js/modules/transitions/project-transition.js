import Highway from "@dogstudio/highway";
import gsap from "gsap";

// Overlay
class Project extends Highway.Transition {
    out({ done, trigger }) {
        // Animation
        const projectsList = document.querySelector(".projects__list");
        const projectsLink = document.querySelectorAll(".projects__list li");
        const projectsItems = document.querySelectorAll(".projects__link a");
        const triggerBloc = trigger.parentNode.parentNode;
        const triggerImg = triggerBloc.querySelector(".project__img");
        let lineHeight = projectsLink[0].clientHeight;

        triggerImg.classList.add("clicked");

        const tl = gsap.timeline();
        tl.to(projectsItems, { duration: 0.2, transform: "translateY(100%)", ease: "power3.in" });
        tl.to(trigger, { duration: 0.2, transform: "translateY(0)", ease: "power3.in", delay: "-0.2" });
        tl.to(projectsLink, { duration: 0, lineHeight: 0, delay: 0.4 });
        tl.to(trigger, { duration: 0, lineHeight: lineHeight + "px" });
        tl.to(projectsList, { duration: 0.35, height: "100%", maxHeight: window.innerHeight + "px", ease: "power4.Out" });
        tl.to(triggerBloc, { duration: 0.35, position: "relavive", lineHeight: window.innerHeight + "px", ease: "power4.Out", delay: "-0.35" });
        tl.to(".project__img", { ClipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", delay: "-0.6" });

        tl.to(".screen__white", { duration: 0.4, transform: "translateY(-100%)", ease: "power1.inOut", delay: 0.7 });
        tl.to(".screen__black", { duration: 0.4, transform: "translateY(-100%)", ease: "power1.inOut", delay: "-0.25", onComplete: done });
    }

    in({ from, done }) {
        // Reset Scroll
        window.scrollTo(0, 0);

        // Remove Old View
        from.remove();

        // Animation
        const title = document.querySelector(".project__title h1 span");

        const tl = gsap.timeline();
        tl.to(".screen__black", { duration: 0.4, transform: "translateY(-200%)", ease: "power1.inOut" });
        tl.to(".screen__white", { duration: 0.4, transform: "translateY(-200%)", ease: "power1.inOut", delay: "-0.25", onComplete: done });
        tl.from(title, { duration: 0.4, transform: "translateY(100%)", ease: "power3.out", delay: "-.05" });
        tl.set(".screen__black", { transform: "translateY(0)" });
        tl.set(".screen__white", { transform: "translateY(0)" });
    }
}

export default Project;
