import React from 'react'

export default function progressbar(props) {
    console.log(props.song)
    console.log("hello")
  return (
    <div  className=' w-full h-16 flex justify-between items-center absolute bottom-0 text-center bg-white/30 backdrop-blur-md p-2'>
        <div className=''>
            <h2 className='text-2xl'>{props.song}</h2>
        </div>
        <div className='flex flex-col'>
            <button type="button" className='text-2xl w-full flex justify-center items-center mb-1'>
                <div className=' w-9 pt-1 pl-[.2rem] hover:backdrop-blur-lg hover:bg-black/30 rounded-full'>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </button>
            <input type="range" name="" id="" className='mx-3  w-[30rem]
             bg-transparent cursor-pointer appearance-none disabled:opacity-50 disabled:pointer-events-none focus:outline-none
            [&::-webkit-slider-thumb]:w-2.5
            [&::-webkit-slider-thumb]:h-2.5
            [&::-webkit-slider-thumb]:-mt-0.5
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:bg-white
            [&::-webkit-slider-thumb]:shadow-[0_0_0_4px_rgba(37,99,235,1)]
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:transition-all
            [&::-webkit-slider-thumb]:duration-150
            [&::-webkit-slider-thumb]:ease-in-out
            [&::-webkit-slider-thumb]:dark:bg-slate-700
            
            [&::-moz-range-thumb]:w-2.5
            [&::-moz-range-thumb]:h-2.5
            [&::-moz-range-thumb]:appearance-none
            [&::-moz-range-thumb]:bg-white
            [&::-moz-range-thumb]:border-4
            [&::-moz-range-thumb]:border-blue-600
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:transition-all
            [&::-moz-range-thumb]:duration-150
            [&::-moz-range-thumb]:ease-in-out
            
            [&::-webkit-slider-runnable-track]:w-full
            [&::-webkit-slider-runnable-track]:h-2
            [&::-webkit-slider-runnable-track]:bg-gray-100
            [&::-webkit-slider-runnable-track]:rounded-full
            [&::-webkit-slider-runnable-track]:dark:bg-gray-700
            
            [&::-moz-range-track]:w-full
            [&::-moz-range-track]:h-2
            [&::-moz-range-track]:bg-gray-100
            [&::-moz-range-track]:rounded-full" id="steps-range-slider-usage" min="0" max="5" step="0.5"' />
        </div>
    </div>
  )
}
