import React from 'react'
import Button from '../utilities/Button'
import { FaAngleDown, FaArrowRightLong } from "react-icons/fa6";
import { HEADER } from '@/lib/nav-links';
import Logo from "@/public/logo.svg"
import Image from 'next/image';
import Link from 'next/link';
import NavCard from './NavCard';

const Header = () => {
  return (
    <header className='w-full flex justify-center items-center bg-black fixed z-50 top-0'>
        <main className='max-w-[1440px] w-full flex items-center justify-between h-[80px] px-10'>
            <Link href="/" className='w-2/12'>
              <Image src={Logo} alt='Logo' />
            </Link>

            <nav className='flex items-center gap-x-5 text-white'>
              {HEADER.map((navItem, index) => (
                <div key={index} className='group relative'>
                  <Link href={navItem.menuUrl}>
                    <p className='flex items-center gap-x-2 font-light cursor-pointer'>{navItem.menuTitle} {navItem.menu && navItem.menu.length > 0 && <FaAngleDown />}</p>

                    {navItem.menu && navItem.menu.length > 0 &&
                      <div className='absolute opacity-0 top-14 -left-68 transition-all duration-300 group-hover:opacity-100'>
                        <NavCard 
                          title={navItem.menuTitle}
                          navItems={navItem.menu}
                        />
                      </div>
                    }
                  </Link>
                </div>
              ))}
            </nav>
            
            <div className='h-full flex items-center'>
                <Button text='Log in' white />
                <Button text='Get Started' filled white icon={<FaArrowRightLong />} />
            </div>
        </main>
    </header>
  )
}

export default Header