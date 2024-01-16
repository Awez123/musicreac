import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
  } from "@material-tailwind/react";

export default function ryt_1_card(song) {
  return (
    <Card className="w-full max-w-[48rem] flex-row rounded-full bg-none backdrop-blur-sm bg-white/30 hover:bg-black/30 transition delay-100 ease-in-out">
      <CardHeader
        shadow={false}
        floated={false}
        className="m-0 w-2/5 shrink-0 rounded-r-none bg-transparent"
      >
        <img
          src={song.image}
          alt="card-image"
          className="h-full p-1 w-full object-cover rounded-full"
        />
      </CardHeader>
      <CardBody>
        <Typography color="gray" className="m-2 uppercase text-start">
          {song.name}
        </Typography>
        <Typography color="blue-gray" className="m-2">
          {song.title}
        </Typography>
        
      </CardBody>
    </Card>


  )
}
