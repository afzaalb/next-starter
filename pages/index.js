import Layout from '../components/Layout';
import Link from 'next/link';

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = () => (
  <Layout>
    <h3>Posts List</h3>
    <ul>
      <PostLink id={1} title="First" />
      <PostLink id={2} title="Second" />
      <PostLink id={3} title="Third" />
    </ul>
  </Layout>
)

export default Index