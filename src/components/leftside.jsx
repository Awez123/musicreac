import React from 'react'
import Songcard from "./Songcard";
import {useState,useEffect  } from "react";
import {useSelector , useDispatch} from "react-redux";
import { fetchTopCharts } from '../reducers/subRed';

export default function (props) {
    const state = useSelector((state) => state);
    const dispatch = useDispatch();
    console.log('State' ,state);
    
    const i =0;
    const [data,setData]=useState({})
    
    const url = 'https://shazam.p.rapidapi.com/charts/track?locale=en-US&pageSize=20&startFrom=0';
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

//     useEffect(() => {
//     const fetchData = async () => {
        
//             const response = await fetch(url, options);
//             const result = await response.json();
//             setData(result)
//             console.log(data);
//             console.log(result)
//             return result;
        

// } 
// fetchData()
// },[]);
    

  return (

    <div className='w-full h-full overflow-y-auto overflow-x-hidden' onClick={e => dispatch(fetchTopCharts())}>
        <div className='w-full flex flex-col'>
            <h1 className='text-3xl font-bold  text-purple-600 m-3 w-full text-center'> Discover</h1>
            <div className='flex flex-wrap justify-center gap-7 my-5 rounded-md'>
                {Array.from(data).map(song=>(
                    <Songcard 
                    song={song.subtitle}
                    title={song.title}
                    image={song.images}
                    />
                ))}
            </div>
            {/* {console.log(value)} */}

        </div>
    </div>
  )
}
