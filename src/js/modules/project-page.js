import Highway from "@dogstudio/highway";
import ScrollMagic from "scrollmagic";

class CustomRenderer extends Highway.Renderer {
    onEnterCompleted() {
        const controller = new ScrollMagic.Controller();

        var projectImages = document.querySelectorAll(".project__images img");

        projectImages.forEach((image) => {
            new ScrollMagic.Scene({
                triggerElement: image,
                triggerHook: 1,
            })
                .setClassToggle(image, "active")
                .addTo(controller);
        });

        const firstImage = document.querySelector(".project__images img");

        new ScrollMagic.Scene({
            triggerElement: firstImage,
            triggerHook: 0.5,
        })
            .setClassToggle(".project__infos", "asleep")
            .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: firstImage,
            triggerHook: 0.5,
        })
            .setClassToggle(".project__link", "asleep")
            .addTo(controller);

        new ScrollMagic.Scene({
            triggerElement: firstImage,
            triggerHook: 0.1,
        })
            .setClassToggle(".project__title", "asleep")
            .addTo(controller);
    }
}

// Don`t forget to export your renderer
export default CustomRenderer;
