import React from 'react'
import Ryt_1_card from './ryt_1_card'
import {useState,useEffect  } from "react";

export default function Rytbar() {
    const i =0;
    const [data,setData]=useState({})
    
    const url = 'https://shazam.p.rapidapi.com/songs/list-recommendations?key=484129036&locale=en-US';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '2716931fb1msh5693952f1b6a041p189cb2jsnf87ec135eaba',
		'X-RapidAPI-Host': 'shazam.p.rapidapi.com'
	}
};
    useEffect(() => {
        fetch(url,options)
        .then(response => response.json()).then(json => {
            // console.log("jsonnn",json)
            setData(json.tracks)
            // console.log(data)
        }).catch(e => {
            console.log("e",e)
        })
    },[])


  return (
    <div className='w-full shadow-md backdrop-blur-sm bg-blue/30 h-full rounded-lg'>
        <div className='flex flex-col flex-wrap w-full'>
            <div className='w-full flex justify-between flex-row'>
                <h2 className='font-bold text-purple-600 text-xl m-2'>Recommended</h2>
                <a href="" className='m-2  text-purple-600'>See more</a>
            </div>    
            <div className='flex flex-col gap-5 p-5 overflow-y-auto h-[37rem]'>
                
                {Array.from(data).map((song)=>(
                        <Ryt_1_card
                        name={song.subtitle}
                        title={song.title}
                        image={song.images.background}
                        />
                ))}

            </div>
        </div>
    </div>
  )
}
