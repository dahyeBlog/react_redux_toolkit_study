import { useSelector } from "react-redux";
// 이 Hook은 스토어의 상태값을 반환해주는 역할을 한다. 
// 리덕스 스토어의 상태값이 바뀐 경우 바뀐 스토어의 상태값을 다시 가져와 컴포넌트를 렌더링 시킨다. 
import { selectAllPosts } from "./postsSlice";

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  const renderedPosts = posts.map(post => (
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0,100)}</p>
      </article>
    ))

  return (
    <section>
      <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsList