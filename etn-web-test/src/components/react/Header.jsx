import PrincipalNav from "./PrincipalNav";
import { useState } from "react";
import Search from "./Search";

export default function Header(){
  const [fristInputSelect, setFirstInputSelect] = useState('selectSerchActive')
  const [secondInputSelect, setSecondInputSelect] = useState('selectSerchInactive')
  const [thirdInputSelect, setThirdInputSelect] = useState('selectSerchInactive')
  const [searchActive, setSearchActive] = useState('first')

  function handleFirstInputSelect(){
    setFirstInputSelect('selectSerchActive')
    setSecondInputSelect('selectSerchInactive')
    setThirdInputSelect('selectSerchInactive')
    setSearchActive('first')
  }

  function handleSecondInputSelect(){
    setFirstInputSelect('selectSerchInactive')
    setSecondInputSelect('selectSerchActive')
    setThirdInputSelect('selectSerchInactive')
    setSearchActive('second')
  }

  function handleThirdInputSelect(){
    setFirstInputSelect('selectSerchInactive')
    setSecondInputSelect('selectSerchInactive')
    setThirdInputSelect('selectSerchActive')
    setSearchActive('third')
  }

  return(
    <header className='bg-etn-principal w-full relative py-3 flex flex-wrap justify-center'>
      <PrincipalNav />
      <section className="flex w-full max-w-screen-xl pt-2 flex-col">
        <div className=" w-full lg:w-full flex justify-center lg:justify-start">
          <div className="w-auto rounded-xl overflow-hidden flex my-3 lg:my-0">
            <button className={`bg-white px-2 py-1 text-xs font-bold lg:py-2 lg:px-6 border-x ${fristInputSelect}`} onClick={handleFirstInputSelect}>SOLO IDA</button>
            <button className={`bg-white px-2 py-1 text-xs font-bold lg:py-2 lg:px-6 border-x ${secondInputSelect}`} onClick={handleSecondInputSelect}>IDA Y VUELTA</button>
            <button className={`bg-white px-2 py-1 text-xs font-bold lg:py-2 lg:px-6 border-x ${thirdInputSelect}`} onClick={handleThirdInputSelect}>BOLETO ABIERTO</button>
          </div>
        </div>
        <Search inputSelected={searchActive} />
      </section>
    </header>
  )
}