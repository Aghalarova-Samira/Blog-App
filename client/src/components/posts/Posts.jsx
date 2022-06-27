import React from 'react'
import Post from '../post/Post'
import "./posts.css"

const Posts = ({posts}) => {
  return (
    <div className='posts'>
      <div className='flex-wrap'>
        {posts.map(p => (
          <Post post={p}/>
        ))}
    
      </div>
  
    </div>
  )
}

export default Posts
