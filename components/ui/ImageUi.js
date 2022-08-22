import { useEffect, useState, useRef } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const ImageUi = (props) => {
  const spanHandler = () => {
    console.log(props)
    props.onDelete(props.propKey)
  }

  return (
    <div
      className="flex p-2 justify-between gap-4 w-full md:w-1/2 bg-zinc-300 text-black items-center"
      key={props.propKey}
    >
      <span className="overflow-auto">{props.children}</span>
      <span onClick={spanHandler} className="cursor-pointer transition">
        <AiFillCloseCircle
          size={30}
          onMouseOver={({ target }) => (target.style.color = 'purple')}
          onMouseOut={({ target }) => (target.style.color = 'black')}
        />
      </span>
    </div>
  )
}

export default ImageUi
