import { useSelector } from "react-redux";
// 이 Hook은 스토어의 상태값을 반환해주는 역할을 한다. 
// 리덕스 스토어의 상태값이 바뀐 경우 바뀐 스토어의 상태값을 다시 가져와 컴포넌트를 렌더링 시킨다. 
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostsList = () => {
  const posts = useSelector(selectAllPosts)

  // 최근에 포스팅한 순으로 정렬하는 코드
  const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
  
  const renderedPosts = orderedPosts.map(post => (    
      <article key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.content.substring(0,100)}</p>
        <p className="postCredit">
          <PostAuthor userId={post.userId} />
          <TimeAgo timestamp={post.date} />
        </p>
        <ReactionButtons post={post} />
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