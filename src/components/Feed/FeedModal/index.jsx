import React, { useEffect } from 'react'
import useFetch from '../../../hooks/useFetch'
import Error from '../../Helper/Error'
import Loading from '../../Helper/Loading'
import styles from './FeedModal.module.css'
import { PHOTO_GET } from '../../../api'
import PhotoContent from '../../Photo/PhotoContent'

const FeedModal = ({ photo, setModalPhoto }) => {
  const { data, error, loading, request } = useFetch()

  useEffect(() => {
    const { url, options } = PHOTO_GET(photo.id)
    request(url, options)
  }, [photo, request])

  const handleOutsideClick = (evento) => {
    if (evento.target === evento.currentTarget) setModalPhoto(null)
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </div>
  )
}

export default FeedModal
