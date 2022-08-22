import { useState, useEffect, useRef } from 'react'

import { db } from '../components/firebase/firestoreApp'
import { collection, getDocs } from 'firebase/firestore'
import MainPageItem from '../components/ui/MainPageItem'
import Image from 'next/image'

function Home(props) {
  return (
    <div className="overflow-x-hidden m-0">
      <div className="relative flex justify-center items-center w-screen h-screen">
        <div className="w-screen h-screen object-cover absolute top-0 ">
          <BlurImage image={'https://i.imgur.com/s4NoLIC.jpg'} />
        </div>
      </div>
      <div className="transition bg-rose-100 dark:bg-[#1E1F26] dark:border-slate-800 w-screen p-24 border-l-2 border-t-2 flex flex-col gap-8">
        <h1 className="font-bold text-4xl border-l-2 dark:border-zinc-200  border-slate-900 p-2">
          Bizler
        </h1>
        <div className="text-xl">Doğanın içinden bir yer...</div>
      </div>
      <div className="h-100 w-screen">
        {props.mainImages.map((item) => {
          return <MainPageItem data={item} key={item[1]} />
        })}
      </div>
      <div className="w-screen h-[35vh] p-12">
        <iframe
          className="w-full h-full"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=39.30117997355784,%2026.67259971222999&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const links = []
  try {
    const querySnapshot = await getDocs(collection(db, 'main'))
    querySnapshot.forEach((m) => {
      const data = m.data()
      links.push([data.image, m.id, data.trbaslik, data.tr])
    })
  } catch (er) {
    console.log(er)
  }
  return {
    props: {
      mainImages: links,
    },
  }
}

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

export default Home
// {t('common:Main')}
