import React from 'react';
import Card from './Card';
import "./cardList.css"

function cardList({filteredDogs,handleClickedPopup}) {
    return (
        <div className='cardList'>
            {
                filteredDogs.map((dog)=>{
                    
                    return <Card dog={dog} key={Math.random()} handleClickedPopup={handleClickedPopup}  />
                })
            }
            
        </div>
    );
}

export default cardList;