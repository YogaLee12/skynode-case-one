'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { useEffect } from 'react';

const links = [
  { name: 'Home', href: '/' },
  { name: 'Menu', href: '/menu' },
  { name: 'About', href: '/about' },
  { name: 'Reservation', href: '/reservation' },
];

type NavLinksProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export default function NavLinks({ menuOpen, setMenuOpen }: NavLinksProps) {
  const pathname = usePathname();

useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  setMenuOpen(false);
}, [pathname, setMenuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [  setMenuOpen]);

  return (
    <div className="ml-auto flex items-center space-x-6 -translate-y-4 z-50 w-full h-screen md:w-auto md:h-auto">
      {/* Desktop Nav */}
      <div className="hidden md:flex space-x-6 pr-10">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              'relative px-3 py-2 text-[#48351e] text-2xl font-light hover:font-bold',
              'after:absolute after:bottom-0.5 after:left-1/2 after:-translate-x-1/2',
              'after:h-[3px] after:bg-[#48351e] after:content-[""] after:rounded-full',
              'after:w-0 hover:after:w-[70%] after:transition-[width] after:duration-300 after:origin-center',
              { 'after:w-[70%]': pathname === link.href }
            )}
          >
            <span>{link.name}</span>
          </Link>
        ))}
      </div>
         
      {/* Mobile Menu Icon */}
      {!menuOpen&&(
        <button
        className="md:hidden text-[#48351e] text-5xl focus:outline-none z-30 pl-[90vw]"
        onClick={() => setMenuOpen(true)}
        aria-label="Open Menu"
      >
        ☰
      </button>
      )}

      {/* Fullscreen Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 flex flex-col items-center justify-center text-center h-[100vh] bg-[#48351e] z-50">
          {/* Close Icon */}
          <button
            className="absolute top-5 right-5 text-white text-8xl focus:outline-none"
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
          >
            ×
          </button>

          {/* Vertical Nav Links */}
          <nav className="flex flex-col h-screen items-center justify-center space-y-30">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white text-3xl font-light hover:font-bold"
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  );
}

