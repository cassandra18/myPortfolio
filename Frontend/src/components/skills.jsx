import React from "react";
import { FaReact, FaHtml5, FaCss3, FaJs } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiVite } from "react-icons/si";
import { FaNodeJs, FaPython } from "react-icons/fa"; // For backend skills
import { SiFigma } from "react-icons/si"; // For UI/UX design skills
import { DiDocker, DiAws } from "react-icons/di"; // For DevOps skills
import { FiCode } from 'react-icons/fi';

const Card = ({ title, skills }) => {
  return (
    <div
      style={{
        //border: "1px solid #EF6D09",
        borderRadius: "5px",
        border: "double 1px transparent",
        backgroundImage:
          "linear-gradient(#051120, #051120), linear-gradient(to bottom,  #EF6D09, #05FFC9)",
        backgroundOrigin: "border-box",
        backgroundClip: "content-box, border-box",
      }}
    >
      <h1 className="text-center text-xl font-bold px-1 py-2">
      <span className="text-white">{title.split(' ')[0]}</span>{' '}
        <span className="text-orange-500">{title.split(' ').slice(1).join(' ')}</span>
        
      </h1>

      <div className="grid grid-cols-1 gap-4 p-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center">
            <div className="mr-6 green-color">
              {skill.icon} {/* Render the skill icon */}
            </div>
            <span className="text-white">{skill.name}</span>{" "}
            {/* Render the skill name */}
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const frontEndSkills = [
    { name: "React", icon: <FaReact style={{ color: "#03f8fc"}}/> },
    { name: "HTML5", icon: <FaHtml5 style={{ color: "#fc3903"}}/> },
    { name: "CSS3", icon: <FaCss3  style={{ color: "blue"}}/> },
    { name: "JavaScript", icon: <FaJs style={{ color: "#fcd303"}} /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss style={{ color: "#03f8fc"}} /> },
    { name: "NextJs", icon: <SiNextdotjs style={{ color: "white"}}/> },
    { name: "Vite", icon: <SiVite  style={{ color: "#ec03fc"}}/> },
  ];

  const backendSkills = [
    { name: "Node.js", icon: <FaNodeJs style={{ color: "#05781e"}}/> },
    { name: "Python", icon: <FaPython style={{ color: "#058ee3"}}/> },
    { name: "C", icon: <FiCode style={{ color: "#3c0185"}}/>}
  ];

  const uiUxDesignSkills = [
    { name: "Figma", icon: <SiFigma style={{ color: "#f525e0"}} /> },
    
  ];

  const devOpsSkills = [
    { name: "Docker", icon: <DiDocker style={{ color: "#058ee3"}}/> },
    { name: "AWS", icon: <DiAws style={{ color: "#b55604"}}/> },
  ];

  return (
    <div className=" px-16 m-auto mb-28">
      <h1
        id="skills"
        className="text-white text-4xl py-8 text-center font-bold"
      >
        My <span className="text-orange-500">Skills</span>
      </h1>
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-5 my-12">
        <Card title="Front-end Skills" skills={frontEndSkills} />
        <Card title="Backend Skills" skills={backendSkills} />
        <Card title="UI/UX Design Skills" skills={uiUxDesignSkills} />
        <Card title="DevOps Skills" skills={devOpsSkills} />
      </div>
    </div>
  );
};

export default Skills;
