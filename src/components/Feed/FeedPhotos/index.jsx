import React, { useEffect } from 'react';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import FeedphotosItem from './FeedPhotosItem';
import useFetch from '../../../hooks/useFetch';
import { PHOTOS_GET } from '../../../api';
import styles from './FeedPhotos.module.css';

const FeedPhotos = ({page, user,  setModalPhoto, setInfinite }) => {

    const { data, loading, error, request } = useFetch();

    useEffect(() => {
        const fetchPhotos = async () => {
            const total = 3
            const { url, options } = PHOTOS_GET({ page, total: 3, user })
            const { response, json } = await request(url, options)
            console.log('Request>', json);
            if(response && response.ok && json.length < total) setInfinite(false)
        }
        fetchPhotos()
    }, [request, user])

    if (error) return <Error error={error} />
    if (loading) return <Loading />
    if (data)
        return (
            <ul className={`${styles.feed} animeLeft`}>
                {data.map((photo) => (
                    <FeedphotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto} />
                ))}

            </ul>
        )
    else return null
}

export default FeedPhotos
