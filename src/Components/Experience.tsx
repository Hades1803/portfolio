import { Timeline, Text, Badge } from '@mantine/core';
import { IconGitBranch } from '@tabler/icons-react';
import { ExperienceInfo } from '../User';

const Experience = () => {
  return (
    <div 
      id='experience'
      className="px-4 xs:px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 mx-4 xs:mx-6 sm:mx-8 md:mx-12 lg:mx-16 xl:mx-20 my-6 sm:my-8 md:my-10 font-mono" 
      data-aos="fade-up" 
      data-aos-duration="800" 
      data-aos-easing="ease-in-sine"
    >
      {/* Title Section */}
      <h1 className="text-2xl xs:text-3xl sm:text-4xl mb-4 xs:mb-5 font-bold text-white text-center">
        <span className="text-primaryColor">04.&nbsp;</span>
        <span>Experience</span>
      </h1>

      {/* Timeline */}
      <Timeline 
        active={ExperienceInfo.length} 
        bulletSize={20} 
        className="sm:!bullet-size-24"
        lineWidth={2}
      >
        {ExperienceInfo.map((exp, index) => (
          <Timeline.Item
            key={index}
            bullet={<IconGitBranch size={14} className="sm:!size-16 text-primaryColor" />}
          >
            <div className="border-2 border-primaryColor p-3 xs:p-4 rounded-lg mx-2 xs:mx-0">
              {/* Job Title & Company */}
              <Text className='!text-white !text-lg xs:!text-xl sm:!text-2xl font-bold mb-1 leading-tight'>
                {exp.title} @ {exp.company}
              </Text>
              
              {/* Description */}
              <Text c="dimmed" size="sm" className="m-1 xs:m-2 !text-justify !text-xs xs:!text-sm leading-relaxed">
                {exp.desc}
              </Text>
              
              {/* Technologies */}
              <div className="flex flex-wrap gap-1 xs:gap-2 my-2 xs:my-2">
                {exp.technologies.map((tech, i) => (
                  <Badge 
                    key={i} 
                    color="#64FFDA" 
                    variant="outline"
                    size="xs"
                    className="!text-xs xs:!text-sm"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
              
              {/* Period */}
              <Text size="xs" c="dimmed" className="!text-xs xs:!text-sm">
                {exp.period}
              </Text>
            </div>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default Experience;