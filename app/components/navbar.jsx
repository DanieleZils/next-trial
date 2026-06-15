'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const links = [
  { href: '/about', label: 'About' },
  { href: '/voh-cabaret-concert', label: 'VoH Cabaret Concert' },
  { href: '/media', label: 'Media' },
  { href: '/community-engagement', label: 'Community Engagement' },
  { href: '/teaching', label: 'Teaching' },
  { href: '/upcoming-events', label: 'Upcoming Events' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  function handleClick() {
    setNav(!nav);
  }

  return (
    <header
      className={`fixed z-50 w-full flex justify-between items-center h-20 px-5 md:px-12 transition-colors duration-500 ${
        scrolled
          ? 'bg-background/85 backdrop-blur-md border-b border-border'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <Link
        href="/"
        className="font-serif text-2xl md:text-3xl font-medium tracking-tight text-foreground"
      >
        Becca Kasdan
      </Link>

      <nav className="hidden lg:flex items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="link-underline text-xs uppercase tracking-[0.18em] text-foreground/80 hover:text-foreground transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        onClick={handleClick}
        aria-label={nav ? 'Close menu' : 'Open menu'}
        className="block lg:hidden text-foreground"
      >
        {nav ? <AiOutlineClose size={26} /> : <AiOutlineMenu size={26} />}
      </button>

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-[82%] max-w-sm bg-card border-l border-border z-50 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          nav ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between px-6 h-20 border-b border-border">
          <Link
            onClick={handleClick}
            className="font-serif text-2xl font-medium tracking-tight"
            href="/"
          >
            Becca Kasdan
          </Link>
          <button onClick={handleClick} aria-label="Close menu">
            <AiOutlineClose size={24} />
          </button>
        </div>
        <ul className="flex flex-col px-6 py-4">
          {links.map((link) => (
            <li key={link.href} className="border-b border-border/70">
              <Link
                href={link.href}
                onClick={handleClick}
                className="block py-4 text-sm uppercase tracking-[0.16em] text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Backdrop */}
      {nav && (
        <div
          onClick={handleClick}
          className="fixed inset-0 bg-foreground/30 backdrop-blur-sm z-40 lg:hidden"
          aria-hidden="true"
        />
      )}
    </header>
  );
}
