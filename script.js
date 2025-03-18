document.addEventListener("DOMContentLoaded", function () {
    const projects = [
      { 
        name: "LaunchPadClan4", 
        url: "https://github.com/TasleemaShaik/LaunchPadClan4/blob/main/Chapter6/Assignment-1.mp4",
        description: `A mini 3D game I did as a part of Outscal's Launchpad program. Launchpad is a 15-day long scholarship program where you learn to build a game from scratch. Best fit for those who want to explore careers in game development. This scholarship is 100% free on selection, where you learn and build a game from scratch in live interactive sessions with Outscal mentors. Launchpad is the only way to get admission in our 7 months job guarantee program : <a href="https://bit.ly/3uKDY8KA" target="_blank">Link</a>`,
        image: "assets/images/LaunchPadClan4.png"
      },
      { 
        name: "Tic-Tac-Toe", 
        url: "https://github.com/TasleemaShaik/Projects/tree/master/Tic-Tac-Toe",
        description: `Tic-Tac-Toe is one of the simple game, which is also called as noughts and crosses but in our local terms we called it as cross-zero game. Other may say differently this game but things are same. It is a pencil-and-paper game for two players, where player select X and O, as their playing item. It is played on the grid of 3×3. The player who succeeds in placing three respective marks in a horizontal, vertical, or diagonal row wins the game.`,
        image: "assets/images/Tic-Tac-Toe.jpg"
      },
      { 
        name: "InstaDiff", 
        url: "https://github.com/TasleemaShaik/InstaDiff",
        description: `InstaDiff is a Python-based tool that helps Instagram users analyze their followers and following lists by comparing them to detect:
        * Users who don’t follow you back
        * Ghost followers (people who follow you, but you don’t follow back)
        * Complete following audit for Instagram accounts
        This tool works for both private and public accounts and does not require API access, Selenium, or automation login—making it a safe and reliable way to track your Instagram network.`,
        image: "assets/images/InstaDiff.png"
      },
      { 
        name: "News-Articles-Text-Summarizer", 
        url: "https://github.com/TasleemaShaik/Projects/tree/master/News-Articles-Text-Summarizer",
        description: "A machine learning tool that summarizes lengthy news articles into concise summaries using Python summarization tools.",
        image: "assets/images/NewsArticleTextSummarizer.jpg"
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
            <div class="door-placeholder" onclick="
              this.style.display='none';
              this.nextElementSibling.style.display='block';
              this.nextElementSibling.style.opacity='1';
            "></div>
            <img src="${project.image}" alt="${project.name}" style="display:none; opacity:0;">
          </div>
          <p>${project.description}</p>
        `;
        projectList.appendChild(projectSection);
      });      
  });
  