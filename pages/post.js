import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch'
import capitalize from 'lodash/capitalize'

const Post = props => (
    <Layout>
        <h2>{capitalize(props.title)}</h2>
        <p>{capitalize(props.body)}</p>
        <style jsx>{`
            h2{
                margin: 0 0 15px;
                line-height: 1.2;
            }
            p{
                margin: 0;
            }
        `}</style>
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
