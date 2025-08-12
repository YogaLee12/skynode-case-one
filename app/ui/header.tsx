'use client';
import Link from 'next/link';
import Image from 'next/image';
import clsx from 'clsx';
import { useEffect, useState, useRef } from 'react';
import NavLinks from './nav-link';
import logoHorizontal from '@/public/logo-horizontal.svg';

export default function TopNav() {

  const [isScrolling, setIsScrolling] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHasScrolled(scrollY > 0);
      setIsScrolling(true);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => setIsScrolling(false), 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, []);



const headerClass = clsx(
  'fixed top-0 left-0 w-screen h-[10vh] md:h-[100px] pt-[2%] pb-0 transition-all duration-300',
  {
    'ww-screen h-screen': menuOpen,
    'z-[60]': !menuOpen,
    'z-[30]': menuOpen,
    'bg-[#ecc994]': hasScrolled,
    'bg-[#ecc994]/80 backdrop-blur-md': isScrolling,
    'bg-transparent': (!isScrolling && !hasScrolled),
    
  }
);

  return (
    <>
      <header className={headerClass}>
       <nav className="max-w-full mx-auto h-full  flex flex-col md:flex-row md:items-center justify-between">
          <Link href="/#">
            <Image
              src={logoHorizontal}
              alt="Logo"
              className="md:h-25 w-auto md:mb-10 hidden md:block"
            />
          </Link>
          <NavLinks menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        </nav>
      </header>
    </>
  );
}
