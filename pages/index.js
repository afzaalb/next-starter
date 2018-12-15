import Layout from '../components/Layout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import map from 'lodash/map'
import capitalize from 'lodash/capitalize'

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      <a>{capitalize(props.title)}</a>
    </Link>
  </li>
)

const Index = props => (
  <Layout>
    <h2>Posts List</h2>
    <ul>
      {
        map(props.posts, post => <PostLink key={post.id} id={post.id} title={post.title} body={post.body} />)
      }
    </ul>
    <style jsx>{`
      ul{
        list-style-type: inside;
        padding-left: 18px;
        margin: 0;
      }
      h2{
        margin: 0 0 15px;
        line-height: 1.2;
      }
    `}</style>
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