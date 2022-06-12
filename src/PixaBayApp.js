import React, { useState } from 'react'
import { AddSearch } from './components/AddSearch';
import { SearchGrid } from './components/SearchGrid';

export const PixaBayApp = () => {

    const [searching, setSearching] = useState(['Medellin'])

    return (
        <>
            <header>
                <AddSearch setSearching = { setSearching } />
            </header>

            <ol>
                {

                    searching.map(searching => (
                        < SearchGrid
                            key={searching}
                            searching={searching}
                        />
                    ))
                }

            </ol>

        </>
    )
}
