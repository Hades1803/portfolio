import { IconHexagonLetterQ } from '@tabler/icons-react';
import React from 'react';
import SideBar from './SideBar';

// Mảng 5 chuỗi link đơn giản
const links = ['about', 'projects', 'skills',  'experience','contact'];

const navLinks = () => {
  return links.map((link, index) => {
    return (
      <a 
        key={link}
        href={`#${link}`} 
        className='text-textColor text-lg font-mono hover:text-primaryColor'
      >
        <span className='text-primaryColor'>0{index + 1}.</span>
        {link.charAt(0).toUpperCase() + link.slice(1)}
      </a>
    )
  });
};

const Header = () => {
  return (
    <nav className="flex bg-bgColor px-10 dm-mono-regular justify-between h-[15vh] items-center">
      <IconHexagonLetterQ size={48} color="#64FFDA" stroke={1.5} className='z-10'/>
      <div className="md:flex gap-8 hidden">
        {navLinks()}
      </div>
      <SideBar />
    </nav>
  );
};

export default Header;
export { navLinks }