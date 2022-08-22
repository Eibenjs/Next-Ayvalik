/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import React, { useState, useRef } from 'react'
import { Turn as Hamburger } from 'hamburger-react'
import Link from 'next/link'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'

const Burger = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <Hamburger toggled={isOpen} toggle={setOpen} />

      <div
        className={`-z-10 p-20  bg-slate-200 flex  w-screen h-screen dark:bg-slate-900 absolute -top-2 left-0 ${
          isOpen ? 'opacity-100 ' : 'opacity-0 pointer-events-none'
        } ease-in-out duration-300`}
      >
        <div className="flex w-full justify-center items-center flex-col gap-16 text-6xl ">
          <a
            href="/"
            className={`relative px-6 py-3 font-bold text-zinc-200 group ${
              isOpen ? 'translate-y-0' : 'translate-y-full'
            } ease-out duration-300`}
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-slate-700 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-slate-500"></span>
            <span className="relative">Ana Sayfa</span>
          </a>
          <a
            href="/gallery"
            className={`relative px-6 py-3 font-bold text-zinc-200 group ${
              isOpen ? 'translate-y-0' : 'translate-y-full'
            } ease duration-700`}
          >
            <span className="absolute inset-0 w-full h-full transition duration-300 ease-out transform -translate-x-2 -translate-y-2 bg-red-800 group-hover:translate-x-0 group-hover:translate-y-0"></span>
            <span className="absolute inset-0 w-full h-full border-4 border-slate-500"></span>
            <span className="relative">Galeri</span>
          </a>
          <div
            className={`flex gap-4 font-bold ${
              isOpen ? 'translate-y-0' : 'translate-y-full'
            } ease-in-out duration-700`}
          >
            <span className="dark:bg-white w-4 bg-black"></span>
            <h1 className="text-2xl">Sosyal Medya Hesaplarimiz</h1>
          </div>
          <div
            className={`${
              isOpen ? 'translate-y-0' : 'translate-y-full'
            } ease-in-out duration-700`}
          >
            <a
              href="https://www.facebook.com/moonayvalik/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook />
            </a>
            <a
              href="https://www.instagram.com/moonayvalik/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.tripadvisor.com.tr/Profile/moonayvalik"
              target="_blank"
              rel="noreferrer"
            >
              <FaTripadvisor />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Burger
