import Layout from '../components/Layout';
import PostLink from '../components/PostLink';
import fetch from 'isomorphic-unfetch';
import map from 'lodash/map'

class Index extends React.Component {  
  render(){
    return(
      <Layout>
        <h4>Posts List</h4>
        <ul>
          {
            map(this.props.posts, post => <PostLink key={post.id} id={post.id} title={post.title} body={post.body} />)
          }
        </ul>
      </Layout>
    )
  }
}

Index.getInitialProps = async function() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await res.json()

  console.log(`Show data fetched. Count: ${data.length}`)

  return {
    posts: data
  }
}

export default Index