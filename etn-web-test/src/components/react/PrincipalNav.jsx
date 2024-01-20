import { useState } from "react"
import BillIcon from "../icons/BillIcon";
import CloseIcon from "../icons/CloseIcon";
import HomeIcon from "../icons/HomeIcon";
import MenuIcon from "../icons/MenuIcon";
import PackageIcon from "../icons/PackageIcon";
import PrinterIcon from "../icons/PrinterIcon";

export default function PrincipalNav(){
  const [imgLang, setImgLang] = useState('https://etn.com.mx/img/flag-usa.jpg');
  const [lang, setLang] = useState('es');

  const [billOptions, setBillOptions] = useState('h-0')
  const [listenBillOptions, setListenBillOptions] = useState(true);

  const [showDotersModal, setShowDotersModal] = useState('')

  function handleBillOptions(){
    if(listenBillOptions){
      setListenBillOptions(false)
      setBillOptions('')
    }else{
      setListenBillOptions(true)
      setBillOptions('h-0')
    }
  }

  function changeLang(){
    if(lang === 'en'){
      setImgLang('https://etn.com.mx/img/flag-usa.jpg');
      setLang('es')
    }else if(lang === 'es'){
      setImgLang('https://etn.com.mx/english/img/bandera-mexico.webp')
      setLang('en')
    }
  }

  return(
    <>
      {showDotersModal}
      <nav className="bg-white py-3 flex lg:justify-between w-full items-center">
        <div className="w-full flex gap-2 lg:gap-12">
          <img src="https://etn.com.mx/img/logo-etnturistar.png" alt="ETN logo" className="h-5 w-28 lg:h-5 lg:w-64" />
          <ul className="flex gap-6 text-xs items-center text-etn-principal font-sans font-extrabold">
            <a href="">
              <li><HomeIcon width='18' height='18'/>HOME</li>
            </a>
            <a href="" className="hidden lg:flex">
              <li><PackageIcon width='20' height='20'/> PAQUETERIA</li>
            </a>
            <a className="cursor-pointer hidden lg:flex" onClick={handleBillOptions} >
              <li className=" relative">
                <BillIcon width='18' height='18'/> 
                FACTURE SU VIAJE  &#9662;
                <ul className={`grid absolute w-40 mt-36 font-normal text-sm overflow-hidden ${billOptions}`}>
                  <a href="" className="bg-etn-secundary py-3 rounded-sm mb-1">
                    <li className="hover:bg-white w-full p-1">FACTURA AQUÍ</li>
                  </a>
                  <a href="" className="bg-etn-secundary py-3 rounded-sm">
                    <li className="hover:bg-white w-full py-1 px-2">¿Que datos nececito?</li>
                  </a>
                </ul>
              </li>
            </a>
            <a href="" className="hidden lg:flex">
              <li><PrinterIcon width='20' height='20'/> IMPRIMIR PASE DE ABORDAJE</li>
            </a>
            <a href="" className="hidden lg:flex">
              <li><BillIcon width='18' height='18' /> MODIFIQUE SU ITINERARIO</li>
            </a> 
          </ul>
        </div>
        <div className="w-full px-3 flex justify-between lg:w-1/3 lg:gap-32 items-center">
          <img src="https://etn.com.mx/img/icons/doters_logo_header5.png" alt="Doters-Logo" className="h-12 cursor-pointer" onClick={() => setShowDotersModal(<DotersModal setState={setShowDotersModal} />)}/>
          <PrincipalNavSubMenu />
          <img src={imgLang} alt={lang} className="hidden h-6 cursor-pointer lg:flex" onClick={changeLang}/>
        </div>
      </nav>
    </>
  )
}

export function PrincipalNavSubMenu(props){
  const [subMenu, setSubMenu] = useState('h-0')
  const [listenSubMenu, setListenSubMenu] = useState(true);

  function handleSubMenu(){
    if(listenSubMenu){
      setListenSubMenu(false)
      setSubMenu('pb-5')
    }else{
      setListenSubMenu(true)
      setSubMenu('h-0')
    }
  }
  return(
    <nav className="lg:relative z-10">
      <div onClick={handleSubMenu}>
      <MenuIcon width='30' height='30'/>
      </div>
      <ul className={`grid absolute bg-white lg:w-60 px-7 mt-3 lg:-left-20 font-sans font-bold text-sm text-etn-principal ${subMenu} overflow-hidden
      top:0; left-0 w-full gap-7 lg:gap-3`}>
        <ul className="grid font-sans font-bold text-sm text-etn-principal gap-7 lg:hidden">
          <a href="" className="flex items-center gap-2">
            <HomeIcon width='18' height='18'/>
            BOLETOS DE AUTOBUS
          </a>
          <a href="" className="flex items-center gap-2">
            <PackageIcon width='18' height='18'/>
            PAQUETERIA
          </a>
          <a href="" className="flex items-center gap-2">
            <BillIcon width='18' height='18'/>
            FACTURE SU VIAJE
          </a>
          <a href="" className="flex items-center gap-2">
            <PrinterIcon width='18' height='18'/>
            IMPRIMIR PASE DE ABORDAJE
          </a>
          <a href="" className="flex items-center gap-2">
            <BillIcon width='18' height='18'/>
            MODIFIQUE SU ITINERARIO
          </a>
        </ul>
        <a href="">BOLETOS DE AUTOBUS</a>
        <a href="">RENTA DE AUTOBUSES</a>
        <a href="">DESTINOS</a>
        <a href="">TERMINALES</a>
        <a href="">SALIDAS DEL AEROPUERTO CDMX</a>
        <a href="">SERVICIOS A BORDO</a>
        <a href="">PROMOCIONES</a>
        <a href="">AGENCIAS</a>
        <a href="">PAGOS REFERENCIADOS</a>
        <a href="">VIAJERO ANTICIPADO</a>
        <a href="">VIAJO PROTEGIDO</a>
        <a href="">VIAJO PROTEGIDO CDMX</a>
        <a href="">BLOG</a>
        <a href="">OTROS SERVICIOS</a>
      </ul>
    </nav>
  )
}

export function DotersModal({setState}){
  return(
    <div className="fixed w-screen h-screen top-0 left-0 bg-black/50 flex justify-center z-10 ">
      <section className="bg-white w-80 h-64 rounded-md mt-10 overflow-hidden">
        <div className="bg-doters-green py-4 px-3 flex justify-between items-center cursor-pointer">
        <img src="https://etn.com.mx/img/logos/logo-doters.svg" alt="Doters-Logo" className="h-8"/>
        <button onClick={() => setState('')}>
          <CloseIcon width='15' height='15'/>
        </button >
        </div>
        <p className="border-bottom border-b-2 py-5 font-sans font-semibold text-lg text-etn-principal px-2">Únete a Doters</p>
        <div className="flex justify-around py-4">
          <button className="bg-doters-green-light py-1 px-2 rounded-full text-etn-principal">Únete gratis</button>
          <button className="border border-etn-principal py-1 px-2 rounded-full text-etn-principal"> Inicia Secion</button>
        </div>
        <p className="text-sm text-etn-principal ml-2">¿Queres saber más sobre el programa?</p>
        <p className="text-xs text-etn-principal mr-2 text-right py-2 underline decoration-solid"><a href="#">Da Click Aquí</a></p>
      </section>
    </div>
  )
}