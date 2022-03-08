import React, { useEffect, useState } from 'react';

import CardList from '../Card/cardList'
import "./HomePage.css"
import Search from './Search';
import PopuP from '../Popup/Popup'
import Navbar from '../Navbar/Navbar';

function HomePage(props) {
    const[dogimage,setDogimage]=useState([])
    const[search,setSearch]=useState('')
    const [clickedDog,setclickedDog]=useState({});
    const[Popup,setPopup]=useState(false);
    
    useEffect(()=>{
        const fetchingData=async()=>{
            const data=await fetch(`https://dog.ceo/api/breeds/list/all`)
            const fetchedData= await data.json();
                
            let arrOfDogNames=Object.keys(fetchedData.message);
            
            let imagearray=[];
            await Promise.all(arrOfDogNames.map(async (dogname) => {
                const data= await fetch(`https://dog.ceo/api/breed/${dogname}/images`);
                const pics= await data.json();
                    
                const obj={label:dogname,url:pics.message}
                imagearray.push(obj);
                
            }
            ));
            setDogimage(imagearray);
        }
        fetchingData();  
    },[])
    const handleChange=(mess)=>{
        setSearch(mess);
       }
       const filteredDogs=dogimage.filter((dog) => {
        return dog.label.toLowerCase().includes(search.toLowerCase())
      })
    
    const handleClickedPopup=(selectedDog)=>{
        setPopup(true);
        setclickedDog(selectedDog);
    }
    const handleClose=()=>{
        setPopup(false);
        setclickedDog({})
    }
    return (
        <div >
            <div className='navbar'><Navbar dogImages={dogimage}/></div>
            <Search  handleChange={handleChange}/>
           
            <div className='cardlist'>
            
            {Popup&& <PopuP handleClose={handleClose} clickedDog={clickedDog} filteredDogs={filteredDogs} />}
                <ul className='cardlist'>
                    
                
                    <CardList  filteredDogs={filteredDogs} handleClickedPopup={handleClickedPopup} />
                    
                </ul>
            </div>
            
           
        </div>
    );
}

export default HomePage;