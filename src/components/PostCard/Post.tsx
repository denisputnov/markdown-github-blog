import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Post.module.css'
import { IPost } from '../../types/post'

function Post({ img, title, author, tags, preview, url }: IPost) {
  return (
    <Link itemScope to={`/${url === undefined ? "404" : url}`} className={classes.Post} aria-label={title}>
      <div className={classes.BorderedBlock} />
      <article className={classes.MainContentBlock}>
        <div className={classes.ImageWrapper}>
          <img src={img} alt={title}/>
        </div>
        <div className={classes.Content}>
          <h5 className={classes.Title}>{title}</h5>
          <p className={classes.Preview}>{preview}</p>
          <div className={classes.AdditionalInfo}>
            <span className={classes.Author}>{author}</span>
            <span className={classes.Tags}>{tags.join(', ')}</span>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Post