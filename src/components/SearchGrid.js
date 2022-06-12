import React, { useEffect, useState } from 'react'
import { getImages } from '../helpers/getImages';
import { Nav } from './Nav';
import { SearchGridItem } from './SearchGridItem';

export const SearchGrid = ({ searching }) => {

    const [images, setImages] = useState(['']);

    useEffect(() => {
        getImages ( searching )
            //.then ( imagen => setImages(imgagen) )
            .then ( setImages )
    }, [])

    /* const getImages = async () => {
   
        const url = `https://pixabay.com/api/?key=27697443-1338a563d541fa6de163e7505&q=${encodeURI(searching)}&image_type=photo`
        const resp = await fetch(url);
        const { hits } = await resp.json();

        const images = hits.map(img => {
            return {
                id: img.id,
                likes: img.likes,
                views: img.views,
                user: img.user,
                user_imagen: img.userImageURL,
                title: img.tags,
                img: img.largeImageURL
            }
        })

        setImages(images)
    } */

    return (
        <>
            <div className='text_box'>
                <h1> {searching} </h1>
                <h4>Browse {searching} designs, illustrations, and graphic elements</h4>
            </div>

            <Nav />

            <div className='box_section'>
                {
                    images.map(img => (
                        <SearchGridItem
                            key={String(img.id)}
                            {...img}
                        />
                    ))

                }
            </div>
        </>

    )
}
