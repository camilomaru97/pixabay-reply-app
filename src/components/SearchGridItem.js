import React from 'react'
import { FaHeart, FaEye } from 'react-icons/fa';

export const SearchGridItem = ({
    title,
    img,
    user_imagen,
    likes,
    views,
    user
}) => {

    return (
        <>
            <div className='box'>
                <div className='box_img'>
                    <img
                        src={img}
                    />
                </div>
                <div className='box_info'>
                    <div className='img_info'>
                        <img
                            className='img'
                            src={user_imagen}
                        />
                    </div>
                    <div className='box_user'>
                        <h3> {user} </h3>
                    </div>
                    <div className='box_likes'>
                        <FaHeart className='like' />
                        <p> {likes} </p>
                    </div>
                    <div className='box_views'>
                        <FaEye className='view' />
                        <p> {views} </p> 
                    </div>

                </div>

            </div>
        </>
    )
}
