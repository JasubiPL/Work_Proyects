import { useEffect, useState } from "react"
import ArrowLeftIcon from "../icons/ArrowLeftIcoin"
import ArrowRightIcon from "../icons/ArrowRightIcon"

const images = [
  'https://etn.com.mx/img/ETN_GUAD_10+15.jpg',
  'https://etn.com.mx/img/dotersdobleetn.jpg',
  'https://etn.com.mx/img/ETN_Desc_Temp_BannerWEB.jpg',
  'https://etn.com.mx/img/ETN_Generico_Anticipaycompra_BannerWEB.jpg'
  ]

export default function Slider(){
const [slide, setSlide] = useState(0)

const prev = () => setSlide(slide => slide === 0 ? images.length - 1: slide - 1)
const next = () => setSlide(slide => slide === images.length - 1 ? 0 : slide + 1)

useEffect(() =>{
  const slideInterval = setInterval(next, 3000)
  return () => clearInterval(slideInterval)
},[])

  return(
    <div className=" overflow-hidden relative ">
      <div className="flex transition-transform ease-out duration-500" style={{transform: `translateX(-${slide * 100}%)`}}>
        {images.map(image =>(
          <img src={image} key={image} className="w-full"/>
        ))}
      </div>
      <div className="absolute inset-0 flex justify-between items-center">
        <button className="bg-etn-principal hover:bg-etn-principal/80 p-2" onClick={prev}>
          <ArrowLeftIcon />
        </button>
        <button className="bg-etn-principal hover:bg-etn-principal/80 p-2" onClick={next}>
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  )
}