import React,{useState} from 'react';
import "./Search.css";

function Search({handleChange}) {
    return (
        <div className='search'>
            <input  placeholder='search your favourite breed' id='searchbar'  onChange={(e)=>{handleChange(e.target.value)}}/>
        </div>
    );
}

export default Search;