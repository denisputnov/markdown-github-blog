import React from 'react'
import { useParams } from 'react-router'
import usePostContent from '../../hooks/usePost'
import { IPostContent } from '../../types/post'
import classes from './Post.module.css'
import ReactMarkdown from 'react-markdown'

function Post() {
  const { postname }: { postname: string } = useParams()
  const post: IPostContent = usePostContent(postname)

  return (
    <div className={classes.Post}>
      <div className={classes.Header} aria-label={post.title} tabIndex={0}>
        <img className={classes.Image} src={post.img} alt={post.title}/>
        <div className={classes.HeaderContent}>
          <h1 className={classes.Title}>{post.title}</h1>
          <span className={classes.Tags}>{post.tags.join(', ')}</span>
        </div>
      </div>
      <time className={classes.Date}>{post.date}</time>
      <div className={classes.PostContent}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  )
}

export default Post
