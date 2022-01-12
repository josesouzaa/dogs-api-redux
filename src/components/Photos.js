import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { loadNewPhotos } from '../store/photos'
import PhotosContent from './PhotosContent'
import PhotosLoadMore from './PhotosLoadMore'

export default function Photos() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadNewPhotos(1))
  }, [dispatch])

  return (
    <section>
      <PhotosContent />
      <PhotosLoadMore />
    </section>
  )
}
