import Link from 'next/link';
import capitalize from 'lodash/capitalize'

const PostLink = props => (
  <li>
    <Link as={`/p/${props.id}`} href={`/post?id=${props.id}`}>
      <a>{capitalize(props.title)}</a>
    </Link>
  </li>
)

export default PostLink