'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    {
      name: 'about',
      href: '#about',
    },
    {
      name: 'work experience',
      href: '#experience',
    },
    {
      name: 'restricted work',
      href: '#restricted-work',
    },
    {
      name: 'public work',
      href: '#public-work',
    },
    {
      name: 'blog',
      href: 'blog',
    },
  ];

  return open ? (
    <div className="fixed flex flex-col justify-between w-screen h-screen text-right backdrop-blur bg-black/60">
      <div>
        <Image
          className="ml-auto cursor-pointer"
          alt=""
          width={132}
          height={132}
          onClick={() => setOpen(false)}
          src="/close-nav.svg"
        />
        <div className="pr-12 md:pr-[100px]">
          <h2 className="pb-5">Petros Chantzopoulos</h2>
          <p className="leading-10">petros.chantz [at] gmail [dot] com</p>
          <p className="leading-10">+31 XXXXXXXX XXX</p>
          <a className="leading-10" href="https://www.linkedin.com/in/petroschantz/">LinkedIn</a>
        </div>
      </div>
      <div className="pr-12 md:pr-[100px] leading-tight pb-12">
        {links.map((link) => (
          <Link passHref scroll={false} key={link.href} onClick={() => setOpen(false)} href={link.href}>
            <h1 className={'text-orange leading-tight'}>{link.name}</h1>
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <div className="fixed top-0 right-0 text-right cursor-pointer">
      <Image width={132} height={132} alt="" onClick={() => setOpen(true)} src="/open-nav.svg" />
    </div>
  );
};
