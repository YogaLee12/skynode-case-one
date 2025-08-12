'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'About', href: '#about' }, // 锚点
    { name: 'Reservation', href: '/reservation' },
];

export default function NavLinks({ onClick }: { onClick?: () => void }) {
    const pathname = usePathname();

return (
    <>
        {links.map((link) => (
            <Link
            key={link.name}
            href={link.href}
            onClick={onClick}
            className={clsx(
                'text-lg hover:underline underline-offset-4 decoration-[#D5B378]',
                {
                'underline decoration-[#D5B378]': pathname === link.href,
                }
            )}
            style={{ fontFamily: '"Jersey_15", sans-serif' }}
            >
            {link.name}
            </Link>
        ))}
        </>
    );
}