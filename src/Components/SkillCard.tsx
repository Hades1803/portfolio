import { Card, Text, Badge, Group } from '@mantine/core';
import React from 'react';

const SkillCard = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="
        !bg-bgColor 
        !border-primaryColor 
        border-2 
        transition-all 
        duration-300 
        ease-in-out 
        hover:scale-[1.03] 
        hover:shadow-[0_0_15px_#64FFDA50]
        hover:border-[#64FFDA]
        cursor-pointer
      "
    >
      <Text fw={600} className="!text-2xl !font-bold !text-white mb-3" lineClamp={1}>
        {title}
      </Text>

      <Group gap="xs" wrap="wrap" className='my-2'>
        {skills.map((skill, index) => (
          <Badge
            key={index}
            color="#64FFDA"
            variant="outline"
            className="transition-colors duration-200 hover:bg-[#64FFDA] hover:text-bgColor my-1"
          >
            {skill}
          </Badge>
        ))}
      </Group>
    </Card>
  );
};

export default SkillCard;
