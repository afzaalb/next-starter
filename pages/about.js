import Link from 'next/link';

const About = () => (
  <div>
    <p>This is the about page</p>
    <Link href="/">
      <a style={{padding:'12px',background:'red'}}>Go Back</a>
    </Link>
  </div>
)

export default About