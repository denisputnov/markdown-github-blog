import React from 'react'
import usePosts from '../../hooks/usePosts'
import Post from '../PostCard/Post'
import {IPost} from '../../types/post'
import classes from './AllPostsPage.module.css'

function AllPostsPage() {
  const posts = usePosts()
  
  return (
    <div className={classes.Posts}>
      {posts.map((post: IPost, index: number) => 
        <Post 
          key={index} 
          img={post.img} 
          title={post.title}
          tags={post.tags}
          preview={post.preview}
          author={post.author}
          url={post.url}
        />
      )}
    </div>
  )
}

export default AllPostsPage
