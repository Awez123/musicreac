import React from 'react'
import Searchbar from "./searchbar";

export default function header() {
    
  return (
    <div className="shadow-md w-full fixed top-0 left-0 backdrop-blur-sm bg-white/30">
        <div className="flex py-2 justify-between">
            
        <h2 className="text-2xl text-pink-400 font-bold flex items-center">
            <span className='text-3xl px-3 flex item-center'><ion-icon name="pause-circle-outline"></ion-icon></span>
            MusicFree
        </h2>
        <Searchbar/>
        

        </div>

    </div>
  )
}
