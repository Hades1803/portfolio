import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandFacebook,
  IconBrandInstagram,
  IconMail,
} from '@tabler/icons-react';
import React from 'react';

const Social = () => {
  const socials = [
    { icon: <IconBrandGithub size={28} />, url: 'https://github.com/yourusername' },
    { icon: <IconBrandLinkedin size={28} />, url: 'https://linkedin.com/in/yourusername' },
    { icon: <IconBrandFacebook size={28} />, url: 'https://facebook.com/yourusername' },
    { icon: <IconBrandInstagram size={28} />, url: 'https://instagram.com/yourusername' },
    { icon: <IconMail size={28} />, url: 'mailto:anhquoc3241@gmail.com' },
  ];

  return (
    <div className="hidden lg:flex items-center gap-10 text-textColor fixed bottom-72 -left-40 rotate-90">
      {socials.map((item, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primaryColor hover:-translate-x-2 transition transform duration-300 ease-in-out -rotate-90"
        >
          {item.icon}
        </a>
      ))}
      <hr className="border-[2px] bg-textColor border-textColor w-40 rounded-full" />
    </div>
  );
};

export default Social;