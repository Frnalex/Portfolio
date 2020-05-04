import Highway from "@dogstudio/highway";

import Overlay from "./transitions/default.js";
import Project from "./transitions/project-transition.js";
import CustomRenderer from "./project-page.js";

const H = new Highway.Core({
    transitions: {
        default: Overlay,
        contextual: {
            project: Project,
        },
    },
    renderers: {
        project: CustomRenderer,
    },
});
