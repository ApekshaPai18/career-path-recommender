import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar";

const Form = () => {
    const navigate = useNavigate();
  const [education, setEducation] = useState("");
  const [skills, setSkills] = useState("");
  const [interest, setInterest] = useState("");

  const handleSubmit = (e) => {
    navigate('/recommendations');
    e.preventDefault();
    localStorage.setItem(
      "careerForm",
      JSON.stringify({ education, skills, interest })
    );
    window.location.reload();
  };

  return (
    <>
    <Navbar/>
     <div className="w-full min-h-screen bg-gradient-to-bl from-sky-200 to-sky-900 flex flex-col px-4">
    
    <form
  onSubmit={handleSubmit}
  className="bg-white w-120 mt-24 p-8 max-w-lg mx-auto rounded-xl shadow-lg space-y-6  shadow-slate-500/100"
>
  <h2 className="text-2xl font-bold text-slate-800 text-center">Tell Us About Yourself</h2>

  {/* Education */}
  <div>
    <label className="block text-slate-700 font-medium mb-2">Education Level</label>
    <select
      className="w-full border border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={education}
      onChange={(e) => setEducation(e.target.value)}
      required
    >
      <option value="">Select education</option>
      <option value="B.Tech">B.Tech</option>
      <option value="M.Tech">M.Tech</option>
      <option value="MBA">MBA</option>
      <option value="BCA">BCA</option>
      <option value="MCA">MCA</option>
      <option value="Other">Other</option>
    </select>
  </div>

  {/* Skills */}
  <div>
    <label className="block text-slate-700 font-medium mb-2">Skills</label>
    <select
      className="w-full border border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={skills}
      onChange={(e) => setSkills(e.target.value)}
      required
    >
      <option value="">Select skill</option>
      <option value="Web Development">Web Development</option>
      <option value="UI/UX">UI/UX</option>
      <option value="Data Structures">Data Structures</option>
      <option value="Python">Python</option>
    </select>
  </div>

  {/* Interests */}
  <div>
    <label className="block text-slate-700 font-medium mb-2">Interests</label>
    <select
      className="w-full border border-slate-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
      value={interest}
      onChange={(e) => setInterest(e.target.value)}
      required
    >
      <option value="">Select interest</option>
      <option value="Research">Research</option>
      <option value="Design">Design</option>
      <option value="Business">Business</option>
      <option value="Teaching">Teaching</option>
    </select>
  </div>

  {/* Submit Button */}
  <div className="text-center">
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-md transition"
    >
      Recommend Career Paths
    </button>
  </div>
</form>
    </div>
    </>
  );
};

export default Form;
