import React from 'react'
import classes from './Footer.module.css'

function Footer() {
  return (
    <footer className={classes.Footer}>
      <div className={classes.Links}>
        <a target="_blank" rel="noreferrer" href="https://github.com/grnbows">Github Профиль</a>
        <a target="_blank" rel="noreferrer" href="https://github.com/grnbows">Страница проекта</a>
      </div>
      <p className={classes.Rights}>All Rights Reserved | 2021 © Denis Putnov </p>
    </footer>
  )
}

export default Footer