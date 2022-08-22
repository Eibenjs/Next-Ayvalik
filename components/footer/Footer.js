/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useEffect, useState } from 'react'
import { AiFillFacebook, AiFillInstagram } from 'react-icons/ai'
import { FaTripadvisor } from 'react-icons/fa'

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

const Footer = () => {
  const [weatherInfo, setWeatherInfo] = useState()

  useEffect(() => {
    const data = fetchData()
      .then((mess) => {
        setWeatherInfo(mess)
      })
      .catch((er) => console.log(er))
  }, [])
  return (
    <div className="w-full h-auto p-16 justify-between items-center bg-zinc-50 dark:bg-slate-800">
      <div className=" justify-center items-center mb-8 font-bold sm:hidden flex">
        {weatherInfo}
      </div>
      <div className="flex w-full justify-center items-center flex-col gap-16 text-6xl ">
        <div className={`flex gap-4 font-bold `}>
          <span className="dark:bg-white w-4 bg-black"></span>
          <h1 className="text-2xl">Sosyal Medya Hesaplarimiz</h1>
        </div>
        <div className="flex ">
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
      <div className="flex justify-center items-center mt-4">
        <span>Tüm hakları saklıdır © 2022</span>
      </div>
    </div>
  )
}

export default Footer
