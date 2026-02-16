const education = [
  {
    degree: "MS in Computer Science",
    institution: "Binghamton University(State University of New York), USA",
    duration: "Jan 2024 - Dec 2025",
    gpa: "GPA: 3.770 / 4",
    url: "https://www.binghamton.edu/computer-science/graduate-programs/mscs/index.html",
    image: "assets/images/binghamton-bg.jpg",
  },
  {
    degree: "BS in Computer Science",
    institution: "Rajiv Gandhi University of Knowledge Technologies, Nuzvid, India",
    duration: "Aug 2015 - May 2019",
    gpa: "CGPA: 8.69 / 10",
    url: "https://rguktn.ac.in/departments/cse",
    image: "assets/images/btech-bg.jpg",
  },
  {
    degree: "Pre-University Course - MPC",
    institution: "Rajiv Gandhi University of Knowledge Technologies, Nuzvid, India",
    duration: "Aug 2013 - May 2015",
    gpa: "CGPA: 8.75 / 10",
    url: "https://rguktn.ac.in/academics/departments/puc/",
    image: "assets/images/puc-bg.jpg",
  },
  {
    degree: "Class 10th - Secondary School",
    institution: "Sri Chaitanya Techno School, Ibrahimpatnam, India",
    duration: "Jun 2012 - May 2013",
    gpa: "GPA: 9.80 / 10",
    url: "https://srichaitanyaschool.net/school/Ibrahimpatnam",
    image: "assets/images/ssc-bg.jpg",
  },
];

const educationGrid = document.getElementById("education-grid");

education.forEach((entry) => {
  const div = document.createElement("div");
  const image = entry.image;

  if (image) {
    div.classList.add("education-entry", "education-slide-card");
    div.innerHTML = `
      <h4 class="slide-title">${entry.degree}</h4>
      <div class="slide-image-container">
        <img src="${image}" alt="${entry.institution}">
      </div>
      <div class="slide-details">
        <p><a href="${entry.url}" target="_blank" rel="noopener noreferrer">${entry.institution}</a></p>
        <p>${entry.duration}</p>
        <p><em>${entry.gpa}</em></p>
      </div>
    `;
  } else {
    div.classList.add("education-entry", "education-slide-card");
    div.innerHTML = `
      <h4 class="slide-title">${entry.degree}</h4>
      <div class="slide-details">
        <p><a href="${entry.url}" target="_blank" rel="noopener noreferrer">${entry.institution}</a></p>
        <p>${entry.duration}</p>
        <p><em>${entry.gpa}</em></p>
      </div>
    `;
  }

  educationGrid.appendChild(div);
});
