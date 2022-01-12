import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { userLogout } from '../store/login'
import styles from './Header.module.css'

export default function Header() {
  const { user, token } = useSelector((state) => state.login)
  const loading = token.loading || user.loading
  const dispatch = useDispatch()

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mini Dogs</h1>
      <button
        aria-label="Logout"
        className={`
        ${styles.login} 
        ${loading ? styles.loading : ''}
        ${user.data ? styles.loaded : ''}
        `}
        onClick={() => dispatch(userLogout())}
      ></button>
    </header>
  )
}
