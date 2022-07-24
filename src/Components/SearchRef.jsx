import React from 'react'
import { useRef } from 'react';

const SearchRef = () => {

    const searcherRef = useRef();

    return (
        <div className='searcher'>
            <input type="text" class="searcherInput" id="search" placeholder="What are you serching?" onChange={() => console.log(searcherRef.current.value)} ref={searcherRef} />
        </div>

    )
}

export default SearchRef
