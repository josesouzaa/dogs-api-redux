import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { loadNewPhotos } from '../store/photos'
import Loading from './helper/Loading'
import styles from './PhotosLoadMore.module.css'

export default function PhotosLoadMore() {
  const { pages, infinite, loading } = useSelector((state) => state.photos)
  const dispatch = useDispatch()

  function handleClick() {
    dispatch(loadNewPhotos(pages + 1))
  }

  if (loading) return <Loading />
  if (!infinite) return null
  return (
    <button className={styles.button} onClick={handleClick}>
      +
    </button>
  )
}
