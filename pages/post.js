import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import capitalize from 'lodash/capitalize'

const Post = props => (
    <Layout>
        <h4>{capitalize(props.title)}</h4>
        <p>{capitalize(props.body)}</p>
    </Layout>
)

Post.getInitialProps = async function (context) {
    const { id } = context.query
    
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()
    console.log(post);

    return post
}


export default Post
