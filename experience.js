const experiences = [
  {
    role: "Java Developer",
    company: "New Energy New York",
    companyUrl: "https://www.newenergynewyork.com/",
    location: "Binghamton, NY",
    duration: "Sep 2024 - Nov 2024",
    summary:
      "Consulted on platform APIs to harden access controls and automate outbound notifications for regional energy programs.",
    highlights: [
      "Added an optional roleId parameter and a global interceptor that strengthened permission validation across CRUD endpoints by 30%.",
      "Centralized filtering logic inside the interceptor, enforcing role-based access rules with zero schema changes and cutting authorization regressions by 25%.",
      "Built sendEmail and sendSMS alarm endpoints that wired SMTP and MSG91 delivery, improving stakeholder notification throughput by 91%.",
    ],
  },
  {
    role: "Software Engineer II",
    company: "Synopsys",
    companyUrl: "https://www.synopsys.com/",
    location: "Hyderabad, India",
    duration: "Nov 2021 - Jan 2024",
    summary:
      "Core member of the cloud scan team delivering features for Polaris, Cloud Native Coverity, Coverity Connect, and SCA.",
    highlights: [
      "Implemented a <a href=\"https://documentation.blackduck.com/bundle/coverity-docs/page/deploy-install-guide/topics/coverity_connect_system_and_database_tuning.html\" target=\"_blank\" rel=\"noopener noreferrer\">Coverity Connect</a> DB tuning model exposed via the cov-admin-db tune command, boosting application performance by 25%.",
      "Ported the tuning model to <a href=\"https://documentation.blackduck.com/bundle/coverity-docs/page/cnc/topics/basic_deployment_workflow.html#ariaid-title2\" target=\"_blank\" rel=\"noopener noreferrer\">Cloud Native Coverity (CNC)</a> with guardrails for AWS, Azure, and GCP deployments, ensuring multi-cloud parity on day one.",
      "Integrated PGPOOL2 middleware to load balance read traffic across replicas, cutting query wait time and eliminating double-load behaviour for customers.",
    ],
  },
  {
    role: "Software Engineer I",
    company: "Synopsys",
    companyUrl: "https://www.synopsys.com/",
    location: "Hyderabad, India",
    duration: "May 2019 - Nov 2021",
    summary:
      "Scaled scanning orchestration from legacy Java services to cloud-ready Go microservices and automation tooling.",
    highlights: [
      "Delivered feature upgrades and performance optimizations for the Autoscaler service while maintaining the production Java jobfarm pipeline.",
      "Led the migration of the jobfarm to the Go-based scanfarm-jobs-service, increasing throughput by 25% without sacrificing functional parity.",
      "Authored scanfarm-runner, a Go executable that executes <a href=\"https://documentation.blackduck.com/bundle/coverity-docs/page/deploy-install-guide/topics/coverity_connect_system_and_database_tuning.html\" target=\"_blank\" rel=\"noopener noreferrer\">Coverity</a> analysis in the cloud, doubling scan speed and seeding the cloud-native platform.",
      "Partnered with <a href=\"https://www.blackduck.com/software-composition-analysis-tools/black-duck-sca.html\" target=\"_blank\" rel=\"noopener noreferrer\">Synopsys SCA</a> and BDBA teams to roll out sister executables, harmonising scan behaviour across product lines.",
      "Built a Python utility to export production MongoDB data by date range, accelerating operations debugging by 4x.",
    ],
  },
  {
    role: "Software Engineer Intern",
    company: "Synopsys",
    companyUrl: "https://www.synopsys.com/",
    location: "Hyderabad, India",
    duration: "May 2018 - Apr 2019",
    summary:
      "Prototyped the first generation of cloud-native scanning infrastructure that now powers the Polaris platform.",
    highlights: [
      "Developed a horizontally scalable job processing system using Nomad batch workloads across Linux and Windows, guaranteeing 100% scan completion.",
      "Designed the GateKeeper and AutoScaler modules that made scanfarm reliable and production-ready, turning <a href=\"https://www.blackduck.com/platform.html\" target=\"_blank\" rel=\"noopener noreferrer\">Polaris</a> into a differentiated offering.",
      "Implemented GateKeeper throttling controls that cap customer concurrency, reducing observability support load by 80%.",
      "Wrote the AutoScaler component to right-size GCP compute resources in real time, lowering resource waste by 70%.",
    ],
  },
];

const experienceList = document.getElementById("experience-list");

if (experienceList) {
  experiences.forEach((experience) => {
    const card = document.createElement("article");
    card.classList.add("experience-card");

    const companyMarkup = experience.companyUrl
      ? `<a href="${experience.companyUrl}" target="_blank" rel="noopener noreferrer">${experience.company}</a>`
      : experience.company;

    card.innerHTML = `
      <h4 class="slide-title">${experience.role}</h4>
      <div class="slide-details experience-details">
        <p class="experience-meta">${companyMarkup} • ${experience.location}</p>
        <p class="experience-duration">${experience.duration}</p>
        <p class="experience-summary">${experience.summary}</p>
        <ul class="experience-list">
          ${experience.highlights.map((highlight) => `<li>${highlight}</li>`).join("")}
        </ul>
      </div>
    `;

    experienceList.appendChild(card);
  });
}
