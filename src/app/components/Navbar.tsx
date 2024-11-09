"use client"

import React from 'react'
import { IoMenu } from "react-icons/io5";
import { useState } from 'react';
import { IoMdCloseCircle } from "react-icons/io";


const Navbar = () => {
  const [isMenuOpen , setIsMenuOpen] = useState(false)

    const toggelMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }

  return (
    <div className='container pt-8'>
        <div className='flex justify-between items-center'>
            <div><a href='#hero'><img className='h-[70px] w-[70px]' src='MainPic.png' alt='logo'></img></a></div>
            <ul className='gap-10 lg:gap-16 hidden md:flex'>
                <li className='menuLink'><a href='#hero'>Home</a></li>
                <li className='menuLink'><a href='#about'>About</a></li>
                <li className='menuLink'><a href='#sale'>Collection</a></li>
                <li className='menuLink'><a href='#contact'>Contact</a></li>
            </ul> 
            <div className='md:hidden' onClick={toggelMenu}>
              {isMenuOpen ? <IoMdCloseCircle/> :
              <IoMenu/>}
            </div>
        </div>
      
      {isMenuOpen && (
        <ul className='flex flex-col gap-4 md:hidden'>
          <li className='menuLink'>
            <a href='#hero' onClick={toggelMenu}>Home</a>
          </li>
          <li className='menuLink'>
            <a href='#about' onClick={toggelMenu}>About</a>
          </li>
          <li className='menuLink'>
            <a href='#skills' onClick={toggelMenu}>Skills</a>
          </li>
          <li className='menuLink'>
            <a href='#contact' onClick={toggelMenu}>Contact</a> 
          </li>
        </ul>
        )
      }
    </div>
      
  )
 }

export default Navbar
