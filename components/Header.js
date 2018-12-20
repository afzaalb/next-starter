import Link from './ActiveHeaderLink';

const Header = () => (
  <header>
    <nav>
      <Link href="/">
        <a className="btn">Home</a>
      </Link>
      <Link href="/about">
        <a className="btn">About Us</a>
      </Link>
      <Link href="/contact">
        <a className="btn">Contact Us</a>
      </Link>
      <Link href="/team">
        <a className="btn">Team</a>
      </Link>
    </nav>
    <style jsx>{`
      header{
        background: #ffffff;
        padding: 0 0 20px;
      }
      nav{
        display: flex;
        justify-content: center;
      }
    `}</style>
    <style global jsx>{`
      nav a{
        margin: 0 6px;
      }
    `}
    </style>
  </header>
)

export default Header;
