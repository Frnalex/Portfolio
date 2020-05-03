const projectLinks = document.querySelectorAll(".projects__item a");

console.log(projectLinks);

projectLinks.forEach((link) =>
    link.addEventListener("click", (e) => {
        console.log(e);
        // e.preventDefault();
    })
);
