document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      name: "ExAdvisor",
      url: "https://github.com/TasleemaShaik/exadvisor",
      tech: ["TypeScript", "OpenAI API"],
      date: "Oct 2025",
      description:
        "ExAdvisor is a tiny, privacy-first chatbot that helps you decide if and how to reach out to someone from your past. You enter a short profile for each person (TQI, time-to-reply/initiate, where you met, time spent, strengths/weaknesses, contact status). Sensitive notes never leave your machine: when the optional LLM is invoked we send only a redacted summary (contact streaks, toxicity score, rule outcome) so personal identifiers and free-form notes remain local.",
      image: "assets/images/exadvisor.png",
    },
    {
      name: "PathSpotter.AI",
      url: "https://www.kaggle.com/code/tasleemasm/pathspotter-ai-campus-navigator",
      tech: ["Python", "Computer Vision"],
      date: "Apr 2025",
      description: `Created a vision-language-powered campus navigator built using Google's Gemini API, featuring multimodal reasoning for map parsing, routing, and navigation with robust JSON extraction that improved efficiency by 25%.
Applied techniques for overlaying AI-generated annotations (dots and routes) onto real images using OpenCV and Matplotlib.`,
      image: "assets/images/PathSpotterAI.png",
    },
    {
      name: "Code AVP",
      url: "https://github.com/prembhajaj/HackBU",
      tech: ["React", "Spring Boot"],
      date: "Feb 2024",
      description: `<ul>
        <li>Developed a full-stack application during the HackBU hackathon using React.js for the frontend and Java Spring Boot for the backend.</li>
        <li>Created a code editor interface where users can write code, which is then processed to generate UML diagrams for visual representation.</li>
        <li>Integrated OpenAI's ChatGPT to analyze the code and provide specific improvement suggestions, enhancing code quality.</li>
        <li>Combined modern web development technologies and AI to create an intuitive and efficient platform.</li>
        <li>Successfully collaborated in a team environment to deliver an innovative project, receiving positive feedback for its practical application.</li>
      </ul>`,
      image: "assets/images/HackBU.png",
    },
    {
      name: "OEVthDistraction",
      url: "https://github.com/josharsh/100LinesOfCode/tree/master/OnlineExamWithADistraction",
      tech: ["HTML", "JavaScript"],
      date: "Mar 2025",
      description:
        "A concise web-based quiz application developed in under 100 lines of code as part of the 100LinesOfCode challenge. This single-page app features a full-screen YouTube video background to create a distracting environment, testing the user's focus. Questions are dynamically loaded from a JSON file, and users receive immediate feedback with their final score and a review of any incorrect answers.",
      image: "assets/images/OnlineExamWithADistraction.png",
    },
    {
      name: "InstaDiff",
      url: "https://github.com/TasleemaShaik/InstaDiff",
      tech: ["Python", "Pandas"],
      date: "Mar 2025",
      description: `InstaDiff is a Python-based tool that helps Instagram users analyze their followers and following lists by comparing them to detect:
      <ul>
        <li>Users who don't follow you back</li>
        <li>Ghost followers (people who follow you, but you don't follow back)</li>
        <li>A complete following audit for Instagram accounts</li>
      </ul>
      This tool works for both private and public accounts and does not require API access, Selenium, or automation login—making it a safe and reliable way to track your Instagram network.`,
      image: "assets/images/InstaDiff.png",
    },
    {
      name: "LaunchPadClan4",
      url: "https://github.com/TasleemaShaik/LaunchPadClan4/blob/main/Chapter6/Assignment-1.mp4",
      tech: ["Unity", "C#"],
      date: "Jun 2022",
      description:
        "A mini 3D game I built as part of Outscal's Launchpad program. The project explores mechanics like player movement, collectibles, physics interactions, and scene transitions, with each chapter adding animations, UI layers, and collision-based win logic for a polished experience.",
      image: "assets/images/LaunchPadClan4.png",
    },
    {
      name: "News-ATS",
      url: "https://github.com/TasleemaShaik/Projects/tree/master/News-Articles-Text-Summarizer",
      tech: ["Python", "NLP"],
      date: "Jan 2018",
      description:
        "As things were changing automation was one of the biggest industry, we started to learn python which provides multiple inbuilt libraries to access APIs, to do the things in a much more easier way. We have come up with an idea of summarizing the news from all websites and displaying it in our screen with less unnecessary content. We need to provide list of URLs and boom we have summaries from their latest column of their news. It's just built with some built-in 5 websites as of now, But it could be enhanced to be more dynamic and versatile.",
      image: "assets/images/NewsArticleTextSummarizer.jpg",
    },
    {
      name: "Tic-Tac-Toe",
      url: "https://github.com/TasleemaShaik/Projects/tree/master/Tic-Tac-Toe",
      tech: ["Core Java", "Applets"],
      date: "Aug 2017",
      description:
        "The continued interest in java has made us do a fun project which is very popular multiplayer game(tic-tac-toe), to take the user's move as an input & analyze it as a win/lose.",
      image: "assets/images/Tic-Tac-Toe.jpg",
    },
  ];

  const projectList = document.getElementById("project-list");

  projects.forEach((project) => {
    const projectSection = document.createElement("div");
    projectSection.classList.add("project");

    const hasRichMarkup = /<\s*(ul|ol|div|p)[^>]*>/i.test(project.description);
    const descriptionMarkup = hasRichMarkup
      ? project.description
      : `<p>${project.description}</p>`;

    const techMarkup = project.tech && project.tech.length
      ? `<span class="project-tech">${project.tech.join(", ")}</span>`
      : "";

    const dateMarkup = project.date
      ? `<span class="project-date">${project.date}</span>`
      : "";

    projectSection.innerHTML = `
      <div class="image-container">
        <div class="door-placeholder"></div>
        <img src="${project.image}" alt="${project.name}">
      </div>
      <div class="project-content">
        <div class="project-heading">
          <h3>
            <a href="${project.url}" target="_blank" rel="noopener noreferrer">${project.name}</a>
            ${techMarkup}
          </h3>
          ${dateMarkup}
        </div>
        ${descriptionMarkup}
      </div>
    `;

    const door = projectSection.querySelector(".door-placeholder");
    door.addEventListener("click", () => {
      const crack = document.createElement("div");
      crack.classList.add("crack-overlay");
      door.appendChild(crack);

      const sound = document.getElementById("glassSound");
      if (sound) sound.play();

      door.classList.add("shatter");

      for (let i = 0; i < 15; i++) {
        const shard = document.createElement("div");
        shard.classList.add("shard");
        shard.style.setProperty("--x", `${(Math.random() - 0.5) * 300}px`);
        shard.style.setProperty("--y", `${(Math.random() - 0.5) * 300}px`);
        door.appendChild(shard);
      }

      setTimeout(() => {
        door.style.display = "none";
        door.nextElementSibling.style.display = "block";
        door.nextElementSibling.style.opacity = "1";
      }, 1000);
    });

    projectList.appendChild(projectSection);
  });
});

