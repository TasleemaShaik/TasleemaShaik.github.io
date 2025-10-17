document.addEventListener("DOMContentLoaded", () => {
  const awards = [
    {
      title: "Synopsys SIG R&D All Stars Award",
      organization: "Synopsys",
      date: "May 2019",
      image: "assets/files/SIG_R&D_All-Stars_Award.jpeg",
      url: "https://www.synopsys.com/"
    },
    {
      title: "First Place, Music Masti, TechnoStart2K17",
      organization: "RGUKT-Nuzvid-CSE Department",
      date: "Apr 2017",
      image: "assets/files/Music_Masti_TechnoStart2K17_Certificate.jpg",
      url: "https://rguktn.ac.in/academics/departments/cse/"
    }
  ];

  const list = document.getElementById("awards-list");
  if (!list) return;

  awards.forEach((award) => {
    const card = document.createElement("article");
    card.classList.add("award-card");

    const hyperlink = award.image || award.url;
    const titleLink = hyperlink
      ? `<a href="${hyperlink}" target="_blank" rel="noopener noreferrer">${award.title}</a>`
      : award.title;

    const orgMarkup = award.url
      ? `<a href="${award.url}" target="_blank" rel="noopener noreferrer">${award.organization}</a>`
      : award.organization;

    card.innerHTML = `
      <div class="award-heading">
        <h3>${titleLink}</h3>
        <span class="award-date">${award.date}</span>
      </div>
      <p class="award-meta">${orgMarkup}</p>
    `;

    list.appendChild(card);
  });
});
