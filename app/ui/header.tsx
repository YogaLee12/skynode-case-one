'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState} from 'react';
import NavLinks from './nav-link';
import logoHorizontal from '@/public/logo-horizontal.svg';

export default function TopNav() {
        const [isOpen, setIsOpen] = useState(false);


    return (
    <header className="bg-[#FFF0D7] border-b-2 border-[#D5B378]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4 text-black">
            {/* Logo */}
            <Link href="/#">
            <Image
                src={logoHorizontal}
                alt="Logo"
                className="md:h-25 w-auto "
                />
            </Link>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-8 text-black">
            <NavLinks />
            </nav>
            
            {/* Mobile Menu Button */}
            <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
            >
            {isOpen ? '✖' : '☰'}
            </button>
        </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden flex flex-col space-y-4 px-4 pb-4 text-black">
                <NavLinks onClick={() => setIsOpen(false)} />
                </nav>
            )}
        </header>
    );
}
