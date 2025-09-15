import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between w-full max-w-[1280px] p-4">
      <span className="font-bold text-2xl">BeYou Kanban</span>
      <ul className="flex gap-4">
        {[
          { href: '/', label: 'Home' },
          { href: '/backlog', label: 'Backlog' }
        ].map((link) => (
          <li
            key={link.href}
            className="text-neutral-900 hover:text-neutral-600 transition duration-300"
          >
            <Link href={link.href}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
