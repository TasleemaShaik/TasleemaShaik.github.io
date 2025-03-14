document.addEventListener("DOMContentLoaded", function () {
    const projects = [
        { name: "LaunchPadClan4", url: "https://github.com/TasleemaShaik/LaunchPadClan4" },
        { name: "News-Articles-Text-Summarizer", url: "https://github.com/TasleemaShaik/Projects/tree/master/News-Articles-Text-Summarizer" },
        { name: "Tic-Tac-Toe", url: "https://github.com/TasleemaShaik/Projects/tree/master/Tic-Tac-Toe" }
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        let projectDiv = document.createElement("div");
        projectDiv.classList.add("project", "card", "p-3", "m-2", "shadow-sm");
        projectDiv.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${project.name} <i class="fas fa-code"></i></h5>
                <a href="${project.url}" class="btn btn-primary mt-2" target="_blank">
                    <i class="fas fa-external-link-alt"></i> View Project
                </a>
            </div>
        `;
        projectList.appendChild(projectDiv);
    });
});
