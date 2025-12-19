document.addEventListener("DOMContentLoaded", () => {
  const certifications = [
    {
      name: "5-Day AI Agents By Google",
      issuer: `<a href="https://www.kaggle.com/learn-guide/5-day-agents" target="_blank">Google</a>`,
      date: "Dec 2025",
      url: "https://www.kaggle.com/certification/badges/tasleemasm/105"
    },
    {
      name: "Quantum Machine Learning",
      issuer: `<a href="https://quantum.cloud.ibm.com/learning/en/courses/quantum-machine-learning" target="_blank">IBM</a>`,
      date: "Oct 2025",
      url: "https://www.credly.com/badges/e9199aa7-d58b-4f9e-8761-e5dc02e2c370",
    },
    {
      name: "Fundamentals of Quantum Algorithms",
      issuer: `<a href="https://quantum.cloud.ibm.com/learning/en/courses/fundamentals-of-quantum-algorithms" target="_blank">IBM</a>`,
      date: "June 2025",
      url: "https://www.credly.com/badges/7894d9de-b578-4104-882f-725970407256",
    },
    {
      name: "Basics of Quantum Computing",
      issuer: `<a href="https://quantum.cloud.ibm.com/learning/en/courses/basics-of-quantum-information" target="_blank">IBM</a>`,
      date: "May 2025",
      url: "https://www.credly.com/badges/bc420aaa-4388-480b-b2f3-113ddcec6122",
    },
    {
      name: "5-Day Gen AI By Google Through Kaggle",
      issuer: `<a href="https://www.kaggle.com/learn-guide/5-day-genai" target="_blank">Google</a>`,
      date: "Apr 2025",
      url: "https://www.kaggle.com/certification/badges/tasleemasm/96",
    },
    {
      name: "Introduction To Virtual Reality",
      issuer: `<a href="https://www.london.ac.uk/" target="_blank">University of London</a>`,
      date: "Mar 2022",
      url: "https://www.coursera.org/account/accomplishments/verify/UQJACME5WPJE",
    },
  ];

  const list = document.getElementById("certifications-list");
  if (!list) return;

  certifications.forEach((cert) => {
    const card = document.createElement("article");
    card.classList.add("cert-card");

    const nameMarkup = cert.url
      ? `<a href="${cert.url}" target="_blank" rel="noopener noreferrer">${cert.name}</a>`
      : cert.name;

    card.innerHTML = `
      <div class="cert-heading">
        <h3>${nameMarkup}</h3>
        <span class="cert-date">${cert.date}</span>
      </div>
      <p class="cert-meta">${cert.issuer}</p>
    `;

    list.appendChild(card);
  });
});
