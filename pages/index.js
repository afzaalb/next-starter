import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}&message=${props.message}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <h3>Posts List</h3>
    <ul>
      <PostLink title="First" message="This is first post." />
      <PostLink title="Second" message="This is second post." />
      <PostLink title="Third" message="This is third post." />
    </ul>
  </Layout>
)

export default Index