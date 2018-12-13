import { withRouter } from 'next/router'
import Layout from '../components/Layout'

const Post = withRouter((props) => (
    <Layout>
       <h2 style={{marginTop:'0px'}}>{props.router.query.title}</h2>
       <p>{props.router.query.message}</p>
    </Layout>
))

export default Post
