import Link from 'next/link';

const Index = () => (
  <div>
    <p>Intro | Hello Next.js</p>
    <Link href="/about">
      <a style={{padding:'12px',background:'goldenrod'}}>About Us</a>
    </Link>
  </div>
)

export default Index