/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { MdDarkMode } from 'react-icons/md'
import { BsFillSunFill } from 'react-icons/bs'

const ThemeBtn = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null
  return (
    <button
      className="fixed bottom-2 left-2 text-4xl z-20"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      {theme === 'dark' ? <MdDarkMode /> : <BsFillSunFill />}
    </button>
  )
}

export default ThemeBtn
