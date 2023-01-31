import React, {useState} from 'react'
import { useDispatch , useSelector} from 'react-redux'
import { postAdded } from './postsSlice'

import { addNewPost } from './postsSlice'
import { selectAllUsers } from '../users/usersSlice'

const AddPostForm = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [userId, setUserId] = useState('')
  const [addRequestStatus, setAddRequestStatus] = useState('idle')

  const users = useSelector(selectAllUsers)

  const onTitleChanged = e => setTitle(e.target.value)
  const onContentChanged = e => setContent(e.target.value)
  const onAuthorChanged = e => setUserId(e.target.value)


  
  const canSave = [title, content, userId].every(Boolean) && addRequestStatus === 'idle';

  const onSavePostClicked = () => {
      if (canSave) {
          try {
              setAddRequestStatus('pending')
              dispatch(addNewPost({ title, body: content, userId })).unwrap()

              setTitle('')
              setContent('')
              setUserId('')
          } catch (err) {
              console.error('Failed to save the post', err)
          } finally {
              setAddRequestStatus('idle')
          }
      }

  }

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