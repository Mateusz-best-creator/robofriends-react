import React from 'react';
import './SearchBox.css';

const SearchBox = ({onChangeFunction}) => {
    return (
        <div className='tc content-element'>
            <h1>RoboFriends</h1>
            <input type="search" onChange={onChangeFunction}/>
        </div>
    )
}

export default SearchBox