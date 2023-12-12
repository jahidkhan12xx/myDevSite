import React from 'react';

import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {FaAtom, FaBook} from 'react-icons/fa'
import {BsClipboardData, BsBriefcase, BsChat} from 'react-icons/bs'
import { GrContact } from "react-icons/gr";

import { Link } from 'react-scroll'

const Nav = () => {
  return (
    <nav className=' fixed   bottom-2 md:right-8 md:top-[20%]'>
      <div className=' container mx-auto'>
        <div className=' md:w-28 w-full bg-black/20 md:h-full md:py-12 backdrop-blur-2xl rounded-full max-w-[460px] mx-auto  flex justify-center items-center md:flex-col md:gap-9 gap-3 text-2xl text-white/50'>
          <Link to='home'
          activeClass='active'
          smooth={true}
          spy={true}
             className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center  '>
          <BiHomeAlt></BiHomeAlt>

          </Link>
          <Link to='about'
          activeClass='active'
          smooth={true}
          spy={true}
             className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center  '>
          <BiUser></BiUser>

          </Link>
          <Link 
          to='skills'
          activeClass='active'
          smooth={true}
          spy={true}
             className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center  '>
          <FaAtom/>

          </Link >
          
          <Link 
          to='education'
          activeClass='active'
          smooth={true}
          spy={true}
             className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center  '>
          <FaBook/>

          </Link >
          <Link 
          to='projects'
          activeClass=' active'
          smooth={true}
          spy={true}
             className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center  '>
          <BsClipboardData/>

          </Link >
          <Link 
          to='contact'
          activeClass='active'
          smooth={true}
          spy={true}
             className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center  '>
          <GrContact/>

          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
