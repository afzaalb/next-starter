import Link from 'next/link';

const Header = () => (
  <header>
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About Us</a>
      </Link>
      <Link href="/contact">
        <a>Contact Us</a>
      </Link>
      <Link href="/team">
        <a>Team</a>
      </Link>
    </nav>
    <style jsx>{`
      header{
        background: #ffffff;
        padding: 0 0 20px;
      }
      a{
        font-weight: 700;
        margin: 0 10px;
        text-transform: uppercase;
      }
      nav{
        display: flex;
        justify-content: center;
      }
    `}</style>
  </header>
)

export default Header;
