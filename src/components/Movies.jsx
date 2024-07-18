import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard';
import searchIcon from './search.svg'
function Movies() {
    const API_URL='http://omdbapi.com?apikey=c032e2d7';
    const [searchBox, setSearchBox] = useState('');
    const searchMovies=async(title)=>{
        const respone= await fetch (`${API_URL}&s=${title}`)
        const data= await respone.json()
        setMoviies(data.Search)
    }
    
    const [moviies,setMoviies]=useState([])

    useEffect(()=>{
        searchMovies('') 
    },[])
  return (
    <div className='app'>
        <h1>Movies Hub</h1>
        <div className="search">
            <input className='border-2 border-black'
                type="text"  
                placeholder='Movie name' 
                value={searchBox} 
                onChange={(e)=>{setSearchBox(e.target.value)}}
            />
            <img src={searchIcon} alt="search" 
            onClick={()=>searchMovies(searchBox)}/>
        </div>
    
        {   moviies?.length>0
        ?
        (
            <div className="container">
                {moviies.map((movie)=>{ 
                    return(
                        <MovieCard movie={movie}/>
                    )
                })
                }
            </div>
        ):
        (<div className="empty">
            <h2>No movies found for</h2>
            
        </div>)
        }
    </div>
  )
}

export default Movies