import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/login'

import styles from './Login.module.css'

export default function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()

  function handleSubmit(e) {
    e.preventDefault()
    dispatch(login({ username, password }))
  }

  return (
    <form onSubmit={handleSubmit} className="anime">
      <label htmlFor="username" className={styles.label}>
        Usuário
      </label>
      <input
        type="text"
        id="username"
        className={styles.input}
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />

      <label htmlFor="password" className={styles.label}>
        Usuário
      </label>
      <input
        type="password"
        id="password"
        className={styles.input}
        value={password}
        onChange={({ target }) => setPassword(target.value)}
      />
      <button className={styles.button}>Enviar</button>
    </form>
  )
}
