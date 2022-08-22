/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function BasicModal(props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(props.isOpen)
  }, [props.isOpen])

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div
      className={`fixed left-0 top-0 w-screen h-screen flex justify-center z-40  items.center ${
        open ? 'block' : 'hidden'
      }`}
    >
      <div
        className="w-screen h-screen z-50 absolute top-0 left-0"
        onClick={handleClose}
      ></div>
      <div className="w-screen h-screen z-30 absolute top-0 left-0 bg-black opacity-50"></div>
      <div className="m-auto sm:w-1/4 w-2/3 h-auto z-40">
        <img alt="" src={props.image} className="object-cover" />
      </div>
    </div>
  )
}
