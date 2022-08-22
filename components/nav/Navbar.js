/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react'
import fetch from 'node-fetch'
import Burger from '../ui/Burger'
import SelectAutoWidth from './SelectAutoWidth'

const api = {
  key: '5fb70131628dda34ac897dcd7ea37786',
  base: 'http://api.openweathermap.org/data/2.5/',
}

const getToday = () => {
  var today = new Date()
  var dd = String(today.getDate()).padStart(2, '0')
  var mm = String(today.getMonth() + 1).padStart(2, '0') //January is 0!
  var yyyy = today.getFullYear()

  today = mm + '/' + dd + '/' + yyyy
  return today
}

function getValueBeforeDecimal(num) {
  const beforeDecimalStr = num.toString().split('.')[0]
  return Number(beforeDecimalStr)
}

const fetchData = async () => {
  const data = await fetch(
    `${api.base}weather?q=ayvalik&units=metric&lang=tr&APPID=${api.key}`
  )
    .then((m) => {
      return m.json()
    })
    .then((weather) => {
      if (weather.cod === '404') {
        return
      }
      const temp = getValueBeforeDecimal(weather.main.temp)
      const curr = weather.weather[0].main
      let text = 'Ayvalık | ' + temp + '°C ' + curr + ' | ' + getToday()
      return text
    })

  return data
}

const Navbar = () => {
  const [weatherInfo, setWeatherInfo] = useState()

  useEffect(() => {
    const data = fetchData()
      .then((mess) => {
        setWeatherInfo(mess)
      })
      .catch((er) => console.log(er))
  }, [])

  return (
    <nav className="z-20 fixed w-full top-2 h-[82px] backdrop-blur p-2 flex justify-between">
      <img
        className=" h-full object-contain"
        src="https://i.imgur.com/NjgT9g2.png"
        alt="imgfromnav"
      />

      <div className="flex items-center gap-4">
        <span className="-z-20 sm:block hidden">{weatherInfo}</span>
        <Burger />
      </div>
    </nav>
  )
}

export default Navbar
