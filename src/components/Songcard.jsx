import React from 'react'
import { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";

export default function Songcard(song) {
  const [togged,isTogged] = useState(false);
  
  

    
  return (
    <Card className="w-[12rem] rounded-md p-4 backdrop-blur-sm bg-black/30 hover:bg-white/30 transition delay-100 ease-in-out">
      <CardHeader shadow={false} floated={false} className="h-40 bg-transparent rounded-md">
        <img
          src={song.image.background}
          alt="card-image"
          className="h-full w-full object-cover rounded-sm"
        />
      </CardHeader>
      <CardBody>
        <div className="mb-2 flex items-center  justify-between w-full text-center">
          <Typography color="blue-gray" className="font-medium m-2">
            {song.song}
          </Typography>
        
        </div>
      </CardBody>
      <CardFooter className=" text-white-600 pt-0">
        <Button
          ripple={false}
          fullWidth={true}
          className="bg-blue-gray-900/10  text-purple-400 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
        >
          {song.title}
        </Button>
        
      </CardFooter>
    </Card>
  )
}
