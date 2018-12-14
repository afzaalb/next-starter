import Link from 'next/link';

const headerStyles = {
  padding: '0 0 20px',
  background: '#ffffff'
}

const Header = () => (
  <header style={headerStyles}>
    <nav>
      <Link href="/">
        <a style={{margin:'12px'}}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{margin:'12px'}}>About Us</a>
      </Link>
      <Link href="/contact">
        <a style={{margin:'12px'}}>Contact Us</a>
      </Link>
      <Link href="/team">
        <a style={{margin:'12px'}}>Team</a>
      </Link>
    </nav>
  </header>
)

export default Header;
