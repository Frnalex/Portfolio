import Highway from "@dogstudio/highway";

import Overlay from "./transitions/default.js";
import Project from "./transitions/project-transition.js";

const H = new Highway.Core({
    transitions: {
        default: Overlay,
        contextual: {
            project: Project,
        },
    },
});
