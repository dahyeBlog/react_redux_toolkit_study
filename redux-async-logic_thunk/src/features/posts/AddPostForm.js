import React, {useState} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { postAdded } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'

const AddPostForm = () => {
  const dispatch = useDispatch()
  
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')

  const users = useSelector(selectAllUsers)

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)


  const onSavePostClicked = () => {
    if(title && content) {
      dispatch(
          postAdded(title, content, userId) 
          // postsSlice 에서 전처리 코드를 작성했기 때문에 값만 넘기면 됨.
        )
        setTitle('')
        setContent('')
        setUserId('')
    }
  }


  const canSave = Boolean(title) && Boolean(content) && Boolean(userId)

  const usersOptions = users.map(user => (
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    ))


  return (
    <section>
      <h2>새로운 Post 등록하기</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input type="text" name='postTitle' id='postTitle' onChange={onTitleChanged} value={title} />

        <label htmlFor="postAuthor">Author:</label>
        <select id="postAuthor" value={userId} onChange={onAuthorChanged}>
          <option value=""></option>
          {usersOptions}
        </select>

        <label htmlFor="postContent">Content:</label>
        <textarea name="postContent" id="postContent" value={content} onChange={onContentChanged}>
        </textarea>
        <button onClick={onSavePostClicked} type='button' disabled={!canSave}>Post 저장</button>

      </form>
    </section>
  )
}

export default AddPostForm