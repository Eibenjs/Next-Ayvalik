import { useEffect, useState, useRef } from 'react'

const Input = ({ label, ...props }) => {
  const [show, setShow] = useState(false)
  const [type, setType] = useState(props?.type || 'text')
  const inputRef = useRef()

  useEffect(() => {
    if (show) {
      setType('text')
    } else {
      setType('password')
    }
    inputRef.current.focus()
  }, [show])

  return (
    <label className="relative flex bg-zinc-50 border rounded-sm focus-within:border-gray-400 w-full">
      <input
        ref={inputRef}
        {...props}
        required={true}
        type={props?.type === 'password' ? type : null}
        className=" px-2 outline-none text-xs w-full h-[45px] valid:pt-[10px] peer"
      />
      <small className="absolute top-1/2 left-[9px] cursor-text pointer-events-none text-xs text-gray-400 -translate-y-1/2 transition-all peer-valid:text-[10px] peer-valid:top-2.5">
        {label}
      </small>
      {props?.type === 'password' && props?.value && (
        <button
          type="button"
          onClick={() => setShow((v) => !v)}
          className=" text-sm font-semibold pr-2 select-none"
        >
          {show ? 'Hide' : 'Show'}
        </button>
      )}
    </label>
  )
}

export default Input
