import React, { useState } from 'react'
import Image from 'next/image'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

function BlurImage({ image }) {
  const [isLoading, setLoading] = useState(true)

  return (
    <div className="w-full h-full">
      <Image
        alt=""
        src={image}
        objectFit="cover"
        layout="fill"
        className={cn(
          'duration-700 ease-in-out group-hover:opacity-75',
          isLoading
            ? 'scale-110 blur-2xl grayscale'
            : 'scale-100 blur-0 grayscale-0'
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  )
}

const MainPageItem = (props) => {
  return (
    <div className=" h-100 flex gap-8 flex-col md:flex-row justify-between items-center p-16 bg-zinc-100 dark:bg-[#131417]">
      <div className="relative h-[50vh] md:w-1/2 w-full border-t-16 border-l-16 border-regal shadow-3xl">
        <BlurImage image={props.data[0]} />
      </div>
      <div className=" p-8 h-ful md:w-1/2 w-full flex flex-col gap-4">
        <h1 className="font-bold text-2xl tracking-wider">{props.data[2]}</h1>
        <hr className="border-2" />
        <p className="text-lg">{props.data[3]}</p>
      </div>
    </div>
  )
}

export default MainPageItem
