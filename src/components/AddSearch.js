import React, { useState } from 'react'
import { BiSearch } from 'react-icons/bi';
import { IoIosCloseCircle } from 'react-icons/io';
import PropTypes from "prop-types";

export const AddSearch = ({setSearching}) => {


    const [inputValue, setinputValue] = useState('Medellin');

    const handleInputChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if( inputValue.trim().length > 2 ){
            setSearching( search => [inputValue, ...search] );
            //setinputValue('');
        }
    }

    return (
        <>
            <div className='form'>
                <form
                    onSubmit={ handleSubmit }
                >
                    <input
                        type='text'
                        value={inputValue}
                        onChange = { handleInputChange }
                    />
                    <BiSearch className='search-icon' />
                    <IoIosCloseCircle className='close-icon' />
                </form>
            </div>
        </>
    )
}

AddSearch.propTypes = {
    setSearching: PropTypes.func.isRequired
}
