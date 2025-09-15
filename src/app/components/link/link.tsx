import { type PropsWithChildren } from 'react';
import Link from 'next/link';

type Link = PropsWithChildren<{
  href: string;
  className?: string;
}>;

export default function NavLink({ children, href, className }: Link) {
  return (
    <Link
      href={href}
      className={`cursor-pointer text-neutral-500 hover:underline hover:text-neutral-900 transition duration-300 ${className}`}
    >
      {children}
    </Link>
  );
}
