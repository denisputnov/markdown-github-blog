import React from 'react'
import { Link } from 'react-router-dom'
import classes from './Header.module.css'

function Header() {
  return (
    <header className={classes.Header}>
      <Link to='/' className={classes.Logo} aria-label="Перейти на главную страницу" />
      <div>
        <a
          target="_blank"
          rel="noreferrer"
          href='https://t.me/prog_way_blog'
          className={classes.Link}
          aria-label="Открыть телеграм канал"
        >
          Телеграмм канал
        </a>
      </div>
    </header>
  )
}

export default Header