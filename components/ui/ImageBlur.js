import { useState } from 'react'
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

export default BlurImage
