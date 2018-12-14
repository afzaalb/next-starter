import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'

const Post = props => (
    <Layout>
       <h2 style={{marginTop:'0px'}}>{props.title}</h2>
       <p>{props.message}</p>
    </Layout>
)

Post.getInitialProps = async function (context) {
    const { id } = context.query
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const post = await res.json()

    console.log(`Fetched post: ${post.title}`)

    return { post }
}


export default Post
