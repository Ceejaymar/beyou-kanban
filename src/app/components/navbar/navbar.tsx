import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between w-full max-w-[1280px] p-4">
      <span>BeYou Kanban</span>
      <ul className="flex gap-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/backlog">Backlog</Link>
        </li>
      </ul>
    </nav>
  );
}
