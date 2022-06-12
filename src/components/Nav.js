import React from 'react'
import Select from 'react-select'
import { BiFilter } from 'react-icons/bi';



export const Nav = () => {

    const nav = ['All', 'Animation', 'Branding', 'Illustration', 'Mobile', 'Print', 'Web']
    const options = [
        { value: 'Popular', label: 'Popular' },
        { value: 'Following', label: 'Following' },
        { value: 'Marketplace', label: 'Marketplace' }
      ]

    return (
        <>
            <div className='menu_nav'>
                <div className='box_option'>
                    <Select className='select'  options={options} />
                </div>
                <div className='nav'>
                {
                    nav.map(item => (
                        <ol key={item}> {item} </ol>
                    ))
                }
                </div>
                <div className='btn'>
                    <div className='icon_btn'>
                        <BiFilter className='filter' />
                    </div>
                    <button>
                        Filters
                    </button>
                </div>
                
            </div>
        </>
    )
}
