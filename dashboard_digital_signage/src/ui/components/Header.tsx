

type User = {
  email: string,
  area: string,
  image: string,
  name: string
}

export const Header = () =>{

  const userData = localStorage.getItem("login")
  const user:User  = JSON.parse(userData!)

  return(
    <header className="py-2 px-6 flex justify-end items-center bg-white ">
      <section className="flex items-center gap-3">
        <p className="font-semibold flex flex-col items-end">
          <span>Hola { user.name}</span>
          <small className="text-[10px] text-gray-400">{ user.area }</small>
        </p>
        <span className="flex h-12 rounded-full aspect-square overflow-hidden">
        <img className="w-full object-cover" src={user.image} alt="perfil del administrador" />
        </span>
      </section>
    </header>
  )
}