document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      name: "Code AVP",
      url: "https://github.com/prembhajaj/HackBU",
      description: `<ul>
        <li>Developed a full-stack application during the HackBU hackathon using React.js for the frontend and Java Spring Boot for the backend.</li>
        <li>Created a code editor interface where users can write code, which is then processed to generate UML diagrams for visual representation.</li>
        <li>Integrated OpenAI's ChatGPT to analyze the code and provide specific improvement suggestions, enhancing code quality.</li>
        <li>Combined modern web development technologies and AI to create an intuitive and efficient platform.</li>
        <li>Successfully collaborated in a team environment to deliver an innovative project, receiving positive feedback for its practical application.</li>
      </ul>`,
      image: "assets/images/HackBU.png"
    },
    {
      "name": "OEVthDistraction",
      "url": "https://github.com/josharsh/100LinesOfCode/tree/master/OnlineExamWithADistraction",
      "description": "A concise web-based quiz application developed in under 100 lines of code as part of the 100LinesOfCode challenge. This single-page app features a full-screen YouTube video background to create a distracting environment, testing the user's focus. Questions are dynamically loaded from a JSON file, and users receive immediate feedback with their final score and a review of any incorrect answers.",
      "image": "assets/images/OnlineExamWithADistraction.png"
    },    
    {
      name: "LaunchPadClan4",
      url: "https://github.com/TasleemaShaik/LaunchPadClan4/blob/main/Chapter6/Assignment-1.mp4",
      "description": "A mini 3D game I did as a part of Outscal's Launchpad program. Launchpad is a 15-day long scholarship program where you learn to build a game from scratch. This game was built in Unity and explores mechanics like player movement, collectibles, physics interactions, and scene transitions. Each chapter incrementally added new features such as animations, UI design, and collision-based win logic—culminating in a polished, interactive mini-game experience.",
      image: "assets/images/LaunchPadClan4.png"
    },
    {
      name: "InstaDiff",
      url: "https://github.com/TasleemaShaik/InstaDiff",
      description: `InstaDiff is a Python-based tool that helps Instagram users analyze their followers and following lists by comparing them to detect:
      <ul>
        <li>Users who don’t follow you back</li>
        <li>Ghost followers (people who follow you, but you don’t follow back)</li>
        <li>Complete following audit for Instagram accounts</li>
      </ul>
      This tool works for both private and public accounts and does not require API access, Selenium, or automation login—making it a safe and reliable way to track your Instagram network.`,
      image: "assets/images/InstaDiff.png"
    },
    {
      name: "News-ATS",
      url: "https://github.com/TasleemaShaik/Projects/tree/master/News-Articles-Text-Summarizer",
      description: "A machine learning tool that summarizes lengthy news articles into concise summaries using Python summarization tools.",
      image: "assets/images/NewsArticleTextSummarizer.jpg"
    },
    {
      name: "Tic-Tac-Toe",
      url: "https://github.com/TasleemaShaik/Projects/tree/master/Tic-Tac-Toe",
      description: `Tic-Tac-Toe is one of the simple game, which is also called as noughts and crosses but in our local terms we called it as cross-zero game. Other may say differently this game but things are same. It is a pencil-and-paper game for two players, where player select X and O, as their playing item. It is played on the grid of 3×3. The player who succeeds in placing three respective marks in a horizontal, vertical, or diagonal row wins the game.`,
      image: "assets/images/Tic-Tac-Toe.jpg"
    }
  ];

  const projectList = document.getElementById("project-list");

  projects.forEach((project) => {
    let projectSection = document.createElement("div");
    projectSection.classList.add("project");

    projectSection.innerHTML = `
      <a href="${project.url}" target="_blank">
        <h3>${project.name}</h3>
      </a>
      <div class="image-container">
        <div class="door-placeholder"></div>
        <img src="${project.image}" alt="${project.name}">
      </div>
      <p>${project.description}</p>
    `;

    const door = projectSection.querySelector(".door-placeholder");
    door.addEventListener("click", function () {
      // Add crack effect
      const crack = document.createElement("div");
      crack.classList.add("crack-overlay");
      door.appendChild(crack);

      // Play glass breaking sound
      const sound = document.getElementById("glassSound");
      if (sound) sound.play();

      // Add shatter effect
      door.classList.add("shatter");

      // Generate shards
      for (let i = 0; i < 15; i++) {
        const shard = document.createElement("div");
        shard.classList.add("shard");
        shard.style.setProperty("--x", `${(Math.random() - 0.5) * 300}px`);
        shard.style.setProperty("--y", `${(Math.random() - 0.5) * 300}px`);
        door.appendChild(shard);
      }

      // Reveal image after animation
      setTimeout(() => {
        door.style.display = "none";
        door.nextElementSibling.style.display = "block";
        door.nextElementSibling.style.opacity = "1";
      }, 1000);
    });

    projectList.appendChild(projectSection);
  });
});
