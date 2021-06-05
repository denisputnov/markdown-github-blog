import React from 'react'
import classes from './MainPage.module.css'
import usePosts from '../../hooks/usePosts'
import { IPost } from '../../types/post'
import Post from '../PostCard/Post'
import { Link } from 'react-router-dom'

function MainPage() {
  const lastPosts = usePosts(6)

  console.log(lastPosts);
  

  return (
    <main className={classes.Main}>
      <h3 className={classes.Title} tabIndex={0}>Последние посты:</h3>
      <div className={classes.GridLastPosts}>
        {lastPosts.map((post: IPost, index: number) => 
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
      <div className={classes.Notice}>
        <Link to='/posts' aria-label="Посмотреть все посты">Все посты</Link>
      </div>
    </main>
  )
}

export default MainPage