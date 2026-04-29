import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
           🍛 Terranga<span>Food</span>
        </Link>
        <nav className="header-nav">
          <Link href="/">Restaurants</Link>
        </nav>
      </div>
    </header>
  );
}
