document.addEventListener("DOMContentLoaded", () => {
  const categories = [
    {
      name: "Frontend",
      items: ["Angular", "Unity", "React"],
    },
    {
      name: "Tools",
      items: ["Git", "GitHub", "GitLab", "Jenkins", "Jira", "Confluence"],
    },
    {
      name: "Backend",
      items: ["Spring Boot", "Hibernate", "Node.js", "TypeScript", "Express"],
    },
    {
      name: "Methodologies & Practices",
      items: ["CI/CD", "DevOps", "Agile", "SDLC", "Data Pipelines", "NumPy"],
    },
    {
      name: "Databases",
      items: ["NoSQL", "PostgreSQL", "MongoDB"],
    },
    {
      name: "Machine Learning",
      items: ["Pandas", "TensorFlow", "PyTorch"],
    },
    {
      name: "Cloud & Infrastructure",
      items: [
        "AWS",
        "GCP",
        "Azure",
        "GKE",
        "Docker",
        "Kubernetes",
        "Terraform",
        "Nomad",
        "Vault",
        "Minio",
        "Protocol Buffers",
        "gRPC",
        "Helm",
        "AKS",
      ],
    },
    {
      name: "Languages",
      items: ["Golang", "Java", "Python", "C", "C#", "JavaScript", "SQL", "PowerShell", "Bash", "HTML/CSS"],
    },
    {
      name: "Technologies",
      items: ["Distributed Systems", "Unit Testing", "Prototyping"],
    },
    {
      name: "Other",
      items: ["Open-source Technologies", "Elasticsearch", "API Design"],
    },
  ];

  const iconMap = {
    Angular: "devicon-angularjs-plain colored",
    Unity: "devicon-unity-original colored",
    React: "devicon-react-original colored",
    Git: "devicon-git-plain colored",
    GitHub: "devicon-github-original colored",
    GitLab: "devicon-gitlab-plain colored",
    Jenkins: "devicon-jenkins-plain colored",
    Jira: "devicon-jira-plain colored",
    Confluence: "devicon-confluence-original colored",
    "Spring Boot": "devicon-spring-plain colored",
    Hibernate: "devicon-hibernate-plain colored",
    "Node.js": "devicon-nodejs-plain colored",
    TypeScript: "devicon-typescript-plain colored",
    Express: "devicon-express-original",
    "CI/CD": "fas fa-sync-alt",
    DevOps: "fas fa-infinity",
    Agile: "fas fa-running",
    SDLC: "fas fa-diagram-project",
    "Data Pipelines": "fas fa-stream",
    NumPy: "devicon-numpy-original colored",
    NoSQL: "fas fa-database",
    PostgreSQL: "devicon-postgresql-plain colored",
    MongoDB: "devicon-mongodb-plain colored",
    Pandas: "devicon-pandas-original",
    TensorFlow: "devicon-tensorflow-original colored",
    PyTorch: "devicon-pytorch-original colored",
    AWS: "devicon-amazonwebservices-plain colored",
    GCP: "devicon-googlecloud-plain colored",
    Azure: "devicon-azure-plain colored",
    GKE: "fas fa-network-wired",
    Docker: "devicon-docker-plain colored",
    Kubernetes: "devicon-kubernetes-plain colored",
    Terraform: "devicon-terraform-plain colored",
    Nomad: "fas fa-route",
    Vault: "fas fa-shield-alt",
    Minio: "fas fa-box-open",
    "Protocol Buffers": "fas fa-code",
    "gRPC": "fas fa-plug",
    Helm: "fas fa-anchor",
    AKS: "fas fa-cloud",
    Golang: "devicon-go-plain colored",
    Java: "devicon-java-plain colored",
    Python: "devicon-python-plain colored",
    C: "devicon-c-plain colored",
    "C#": "devicon-csharp-plain colored",
    JavaScript: "devicon-javascript-plain colored",
    SQL: "fas fa-table",
    PowerShell: "devicon-windows8-original",
    Bash: "devicon-bash-plain colored",
    "HTML/CSS": "devicon-html5-plain colored",
    "Distributed Systems": "fas fa-project-diagram",
    "Unit Testing": "fas fa-vial",
    Prototyping: "fas fa-flask",
    "Open-source Technologies": "fas fa-code-branch",
    Elasticsearch: "devicon-elasticsearch-plain colored",
    "API Design": "fas fa-sitemap",
  };

  const skillsList = document.getElementById("skills-list");
  if (!skillsList) return;

  categories.forEach((category) => {
    const card = document.createElement("article");
    card.classList.add("skill-card");

    const itemsMarkup = category.items
      .map((item) => {
        const iconClass = iconMap[item];
        if (iconClass && iconClass.includes("devicon")) {
          return `<span class="skill-chip"><i class="${iconClass}"></i><span>${item}</span></span>`;
        }
        if (iconClass) {
          return `<span class="skill-chip"><i class="${iconClass}"></i><span>${item}</span></span>`;
        }
        const initial = item.charAt(0).toUpperCase();
        return `<span class="skill-chip skill-chip--placeholder"><span>${initial}</span><span>${item}</span></span>`;
      })
      .join("");

    card.innerHTML = `
      <h3>${category.name}</h3>
      <div class="skill-chip-grid">
        ${itemsMarkup}
      </div>
    `;

    skillsList.appendChild(card);
  });
});
