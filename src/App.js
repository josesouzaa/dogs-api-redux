import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { autoLogin } from './store/login'
import Content from './components/Content'
import Header from './components/Header'

import './App.css'

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(autoLogin())
  }, [dispatch])

  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  )
}
