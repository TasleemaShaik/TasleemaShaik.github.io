const education = [
    {
      degree: "MS in Computer Science",
      institution: "Binghamton University(State University of New York), USA",
      duration: "Jan 2024 – May 2025",
      gpa: "GPA: 3.770 / 4",
      url: "https://www.binghamton.edu/computer-science/graduate-programs/mscs/index.html"
    },
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Rajiv Gandhi University of Knowledge Technologies, Nuzvid, India",
      duration: "Aug 2015 – May 2019",
      gpa: "CGPA: 8.69 / 10",
      url: "https://rguktn.ac.in/departments/cse"
    },
    {
      degree: "Pre-University Course – MPC",
      institution: "Rajiv Gandhi University of Knowledge Technologies, Nuzvid, India",
      duration: "Aug 2013 – May 2015",
      gpa: "CGPA: 8.75 / 10",
      url: "https://rguktn.ac.in/academics/departments/puc/"
    },
    {
      degree: "Class 10th – Secondary School",
      institution: "Sri Chaitanya Techno School, Ibrahimpatnam, India",
      duration: "Jun 2012 – May 2013",
      gpa: "GPA: 9.80 / 10",
      url: "https://srichaitanyaschool.net/school/Ibrahimpatnam"
    }
  ];

  const educationGrid = document.getElementById("education-grid");

  education.forEach((entry) => {
    const div = document.createElement("div");
  
    // Default slide card values
    let image = "";
    let slideClass = "";
  
    if (entry.institution.includes("Binghamton")) {
      slideClass = "binghamton-slide-card";
      image = "assets/images/binghamton-bg.jpg";
    } else if (entry.degree.includes("B.Tech")) {
      slideClass = "btech-slide-card";
      image = "assets/images/btech-bg.jpg";
    } else if (entry.degree.includes("Pre-University")) {
      slideClass = "puc-slide-card";
      image = "assets/images/puc-bg.jpg";
    } else if (entry.degree.includes("Class 10th")) {
      slideClass = "ssc-slide-card";
      image = "assets/images/ssc-bg.jpg";
    }
  
    if (slideClass) {
      div.classList.add("education-entry", slideClass);
      div.innerHTML = `
        <h4 class="slide-title">${entry.degree}</h4>
        <div class="slide-image-container">
          <img src="${image}" alt="${entry.institution}">
          <div class="slide-overlay">
            <p><a href="${entry.url}" target="_blank"><strong>${entry.institution}</strong></a></p>
            <p>${entry.duration}</p>
            <p><em>${entry.gpa}</em></p>
          </div>
        </div>
      `;
    } else {
      // fallback
      div.classList.add("education-entry");
      div.innerHTML = `
        <h4>${entry.degree}</h4>
        <p><a href="${entry.url}" target="_blank"><strong>${entry.institution}</strong></a><br>${entry.duration}</p>
        <p><em>${entry.gpa}</em></p>
      `;
    }
  
    educationGrid.appendChild(div);
  }); 
  