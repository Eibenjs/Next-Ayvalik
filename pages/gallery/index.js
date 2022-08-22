import { useState } from 'react'
import Image from 'next/image'
import { db } from '../../components/firebase/firestoreApp'
import { collection, getDocs } from 'firebase/firestore'
import ImageModal from '../../components/ui/ImageModal'

function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Gallery(props) {
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {props.images.map((image) => (
          <BlurImage key={image[1]} image={image[0].link} />
        ))}
      </div>
    </div>
  )
}

function BlurImage({ image }) {
  const [isLoading, setLoading] = useState(true)
  const [isOpen, setOpen] = useState(false)

  const clickHandler = () => {
    setOpen((v) => !v)
    //
  }

  return (
    <div className="group">
      <ImageModal isOpen={isOpen} image={image} />
      <div className="aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200">
        <Image
          alt=""
          src={image}
          objectFit="cover"
          layout="fill"
          onClick={clickHandler}
          className={cn(
            'duration-700 ease-in-out group-hover:opacity-75',
            isLoading
              ? 'scale-110 blur-2xl grayscale'
              : 'scale-100 blur-0 grayscale-0'
          )}
          onLoadingComplete={() => setLoading(false)}
        />
      </div>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const querySnapshot = await getDocs(collection(db, 'images'))
  const images = []
  querySnapshot.forEach((m) => images.push([m.data(), m.id]))
  return {
    props: {
      images,
    },
  }
}

export default Gallery
