import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import map from 'lodash/map'

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Index = props => (
  <Layout>
    <h3>Posts List</h3>
    <ul>
      {
        map(props.posts, post => <PostLink key={post.id} id={post.id} title={post.title} body={post.body} />)
      }
    </ul>
  </Layout>
)

Index.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    posts: data
  }
}

export default Index