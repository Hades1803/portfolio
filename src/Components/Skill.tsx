import React from 'react';
import SkillCard from './SkillCard';
import { SkillInfo } from '../User';


const Skills = () => {
  return (
    <div id='skills'  className="px-16 mx-20 my-20 font-mono" data-aos="fade-up" data-aos-duration="800" data-aos-easing="ease-in-sine">
      <h1 className="text-4xl mb-5 font-bold text-white text-center"><span className="text-primaryColor">03.&nbsp;</span><span>Skill & Technologies</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SkillInfo.map((skill, index) => (
          <SkillCard
            key={index}
            title={skill.title}
            skills={skill.skills}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;