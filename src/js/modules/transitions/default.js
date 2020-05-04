// Import Highway
import Highway from "@dogstudio/highway";

// GSAP Library
import gsap from "gsap";

// Overlay
class Overlay extends Highway.Transition {
    out({ done }) {
        // Animation
        const tl = gsap.timeline();
        tl.to(".screen__white", { duration: 0.4, transform: "translateY(-100%)" });
        tl.to(".screen__black", { duration: 0.4, transform: "translateY(-100%)", delay: "-0.25", onComplete: done });
    }

    in({ from, done }) {
        // Reset Scroll
        window.scrollTo(0, 0);

        // Remove Old View
        from.remove();

        // Animation
        const tl = gsap.timeline();
        tl.to(".screen__black", { duration: 0.4, transform: "translateY(-200%)", delay: 0.2 });
        tl.to(".screen__white", { duration: 0.4, transform: "translateY(-200%)", delay: "-0.25", onComplete: done });
        tl.set(".screen__black", { transform: "translateY(0)" });
        tl.set(".screen__white", { transform: "translateY(0)" });
    }
}

export default Overlay;
