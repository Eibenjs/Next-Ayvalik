import { useEffect, useState, useRef } from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const ImageUi = (props) => {
  const spanHandler = () => {
    props.onDelete(props.propKey)
  }

  return (
    <div
      className="flex p-2 justify-between gap-4 mt-4 text-black items-center"
      key={props.propKey}
    >
      <div className="flex flex-col gap-2 overflow-auto">
        <span>
          {props.values.tr.length > 50
            ? props.values.tr.substr(0, 50) + '...'
            : props.values.tr}
        </span>
        <span>
          {props.values.en.length > 50
            ? props.values.en.substr(0, 50) + '...'
            : props.values.en}
        </span>
        <span>{props.values.image.substr(0, 50)}...</span>
      </div>
      <div></div>
      <span className="cursor-pointer" onClick={spanHandler}>
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
