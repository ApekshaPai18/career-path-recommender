import React from "react";
import Navbar from "./Navbar";

// const skills=["Web Development", "UI/UX", "Data Structures","Python"];
// const interests=["Research","Design","Business","Teaching"];

// const recommendationsData={};

// skills.forEach(skill=>{
//     interests.forEach(interest=>{
//         const key=`${skill}_${interest}`;
//         recommendationsData[key]=[
//             {
//                 title:`${skill}+${interest}`,
//                 desc:`Explore career paths in ${skill} with a focus on ${interest}.`

//             },
//             {
//                 title:`${interest} in ${skill}`,
//                 desc:`Learn how ${interest.toLowerCase()} can enhance your ${skill.toLowerCase()} skills.`
//             }
//         ];
//     });
// });

const recommendationsData = {
  "Web Development_Research": [
    {
      title: "Frontend Developer",
      desc: "Build UI using HTML, CSS, JavaScript, React.",
      salary: "₹6-10 LPA",
      companies: ["Google", "Infosys", "Zoho"],
      roadmap: ["HTML/CSS", "JavaScript", "React", "Testing"],
      resources: [
        { name: "FreeCodeCamp", url: "https://www.freecodecamp.org/" },
        { name: "Frontend Masters", url: "https://frontendmasters.com/" },
      ],
    },
    {
      title: "Web Performance Analyst",
      desc: "Research and improve website performance and load times.",
      salary: "₹8-12 LPA",
      companies: ["Amazon", "Flipkart"],
      roadmap: ["Web Performance APIs", "Lighthouse", "Chrome DevTools"],
      resources: [{ name: "Google Web Dev", url: "https://web.dev/" }],
    },
    {
      title: "DevRel Engineer",
      desc: "Research tools and educate developers about new web frameworks.",
      salary: "₹10-20 LPA",
      companies: ["HashiCorp", "Netlify"],
      roadmap: ["Web Tech", "Public Speaking", "Docs Writing"],
      resources: [{ name: "DevRelX", url: "https://devrelx.com/" }],
    },
  ],

  "Web Development_Design": [
    {
      title: "UI Developer",
      desc: "Focus on building beautiful and functional user interfaces.",
      salary: "₹6-9 LPA",
      companies: ["Adobe", "Swiggy"],
      roadmap: ["Figma", "React", "Tailwind CSS"],
      resources: [
        { name: "Frontend Mentor", url: "https://www.frontendmentor.io/" },
      ],
    },
    {
      title: "Full-Stack Developer",
      desc: "Design and build complete web apps from frontend to backend.",
      salary: "₹7-14 LPA",
      companies: ["TCS", "Capgemini"],
      roadmap: ["React", "Node.js", "MongoDB"],
      resources: [
        { name: "The Odin Project", url: "https://www.theodinproject.com/" },
      ],
    },
  ],

  "Web Development_Business": [
    {
      title: "Technical Product Manager",
      desc: "Manage web products aligning with business goals.",
      salary: "₹12-22 LPA",
      companies: ["Microsoft", "Zoho"],
      roadmap: ["Web Tech Basics", "Agile", "Product Strategy"],
      resources: [
        { name: "Product School", url: "https://productschool.com/" },
      ],
    },
    {
      title: "Startup Web Tech Lead",
      desc: "Build and lead web platforms for startups.",
      salary: "₹15-25 LPA",
      companies: ["Startups", "Tech Incubators"],
      roadmap: ["Architecture", "DevOps", "Team Management"],
      resources: [
        { name: "Indie Hackers", url: "https://www.indiehackers.com/" },
      ],
    },
  ],

  "Web Development_Teaching": [
    {
      title: "Web Dev Instructor",
      desc: "Teach HTML, CSS, JS, and React to learners.",
      salary: "₹5-9 LPA",
      companies: ["Scaler", "Coding Ninjas"],
      roadmap: ["Web Fundamentals", "React", "Teaching Skills"],
      resources: [
        {
          name: "Coursera Instructor Guide",
          url: "https://teach.coursera.org/",
        },
      ],
    },
    {
      title: "Online Web Mentor",
      desc: "Guide students in building web development projects.",
      salary: "₹4-7 LPA",
      companies: ["UpGrad", "MentorCruise"],
      roadmap: ["Tech Mentoring", "Portfolio Projects"],
      resources: [{ name: "MentorCruise", url: "https://mentorcruise.com/" }],
    },
  ],

  "UI/UX_Research": [
    {
      title: "UX Researcher",
      desc: "Study user behavior to improve designs.",
      salary: "₹7-12 LPA",
      companies: ["Microsoft", "Cognizant"],
      roadmap: ["User Interviews", "A/B Testing", "Personas"],
      resources: [{ name: "NNGroup", url: "https://www.nngroup.com/" }],
    },
    {
      title: "HCI Analyst",
      desc: "Research how users interact with digital systems.",
      salary: "₹8-14 LPA",
      companies: ["IBM", "Accenture"],
      roadmap: ["Interaction Design", "Cognitive Psychology"],
      resources: [
        {
          name: "Interaction Design Foundation",
          url: "https://www.interaction-design.org/",
        },
      ],
    },
  ],

  "Data Structures_Research": [
    {
      title: "Algorithm Engineer",
      desc: "Design cutting-edge algorithms for large-scale systems.",
      salary: "₹10-18 LPA",
      companies: ["Google", "Microsoft"],
      roadmap: ["Sorting/Searching", "Graph Theory", "Dynamic Programming"],
      resources: [{ name: "CP-Algorithms", url: "https://cp-algorithms.com/" }],
    },
    {
      title: "CS Researcher",
      desc: "Conduct research in data structures and theoretical computer science.",
      salary: "₹9-16 LPA",
      companies: ["IITs", "TIFR"],
      roadmap: ["Research Papers", "Proof Techniques"],
      resources: [{ name: "ArXiv", url: "https://arxiv.org/" }],
    },
  ],

  "Data Structures_Design": [
    {
      title: "Software Engineer",
      desc: "Develop scalable applications using efficient DSA techniques.",
      salary: "₹8-15 LPA",
      companies: ["Amazon", "Google"],
      roadmap: ["Data Structures", "System Design", "OOP"],
      resources: [
        { name: "GeeksforGeeks", url: "https://www.geeksforgeeks.org/" },
      ],
    },
    {
      title: "System Architect",
      desc: "Design large-scale systems with performance in mind.",
      salary: "₹15-25 LPA",
      companies: ["Flipkart", "Oracle"],
      roadmap: ["Low-Level Design", "High-Level Design", "Databases"],
      resources: [
        {
          name: "System Design Primer",
          url: "https://github.com/donnemartin/system-design-primer",
        },
      ],
    },
  ],

  Python_Research: [
    {
      title: "AI Researcher",
      desc: "Use Python for machine learning and AI experiments.",
      salary: "₹12-25 LPA",
      companies: ["OpenAI", "Google AI"],
      roadmap: ["NumPy", "Pandas", "TensorFlow", "PyTorch"],
      resources: [
        { name: "Papers With Code", url: "https://paperswithcode.com/" },
      ],
    },
    {
      title: "Data Scientist",
      desc: "Use Python to gather, clean, and analyze data.",
      salary: "₹10-18 LPA",
      companies: ["Mu Sigma", "Fractal Analytics"],
      roadmap: ["EDA", "Modeling", "Visualization"],
      resources: [
        { name: "Kaggle Learn", url: "https://www.kaggle.com/learn" },
      ],
    },
  ],

  Python_Design: [
    {
      title: "Automation Engineer",
      desc: "Write Python scripts to automate tasks and workflows.",
      salary: "₹6-10 LPA",
      companies: ["TCS", "Wipro"],
      roadmap: ["Scripting", "APIs", "Task Scheduling"],
      resources: [{ name: "Real Python", url: "https://realpython.com/" }],
    },
    {
      title: "Visualization Developer",
      desc: "Build dashboards and data apps using Python libraries.",
      salary: "₹7-12 LPA",
      companies: ["Zoho", "Freshworks"],
      roadmap: ["Plotly", "Dash", "Matplotlib"],
      resources: [{ name: "Streamlit", url: "https://streamlit.io/" }],
    },
  ],
};

const Recommendations = () => {
  const formData = JSON.parse(localStorage.getItem('careerForm'));
  if (!formData) return null;

  const key = `${formData.skills}_${formData.interest}`;
  const matches = recommendationsData[key] || [
    {
      title: "Generalist",
      desc: "Explore more skills to specialize further!",
      salary: "N/A",
      companies: [],
      roadmap: [],
      resources: []
    }
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-bl from-sky-200 to-sky-900 px-4 py-10 text-black">
        <h2 className="text-3xl font-bold mb-6 text-center">Recommended Career Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {matches.map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
              <p className="mb-2 text-gray-700">{item.desc}</p>
              {item.salary && <p className="text-sm"><strong>💰 Salary:</strong> {item.salary}</p>}
              {item.companies?.length > 0 && (
                <p className="text-sm"><strong>🏢 Companies:</strong> {item.companies.join(', ')}</p>
              )}
              {item.roadmap?.length > 0 && (
                <>
                  <p className="text-sm mt-2"><strong>🛣️ Roadmap:</strong></p>
                  <ul className="list-disc list-inside ml-4 text-sm text-gray-800">
                    {item.roadmap.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                </>
              )}
              {item.resources?.length > 0 && (
                <>
                  <p className="text-sm mt-2"><strong>📚 Resources:</strong></p>
                  <ul className="list-disc list-inside ml-4 text-sm text-blue-700">
                    {item.resources.map((res, i) => (
                      <li key={i}>
                        <a href={res.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {res.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Recommendations;