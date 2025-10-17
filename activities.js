document.addEventListener("DOMContentLoaded", () => {
  const activities = [
    {
      title: "Volunteer Crisis Counselor",
      organization: "Crisis Text Line",
      url: "https://www.crisistextline.org/",
      duration: "Apr 2025 – Present"
    },
    {
      title: "Exam Proctor",
      organization: "Career Development & Placement Cell",
      url: "https://www.linkedin.com/company/cdpc-rguktn/",
      duration: "Jun 2017 – Apr 2018",
    },
    {
      title: "Branch Coordinator",
      organization: "International Alumni & Relations",
      url: "https://alumni.rguktn.ac.in/",
      duration: "Jun 2016 – Apr 2017",
    },
    {
      title: "Executive Committee Member",
      organization: "Helping Hands",
      url: "http://www.helpinghandsrguktnap.org/",
      duration: "Jun 2015 – Apr 2016",
    },
  ];

  const activitiesList = document.getElementById("activities-list");
  if (!activitiesList) return;

  activities.forEach((activity) => {
    const card = document.createElement("article");
    card.classList.add("activity-card");

    const orgMarkup = activity.url
      ? `<a href="${activity.url}" target="_blank" rel="noopener noreferrer">${activity.organization}</a>`
      : activity.organization;

    card.innerHTML = `
      <div class="activity-heading">
        <h3>${activity.title}</h3>
        <span class="activity-date">${activity.duration}</span>
      </div>
      <p class="activity-meta">${orgMarkup}</p>
    `;

    activitiesList.appendChild(card);
  });
});

