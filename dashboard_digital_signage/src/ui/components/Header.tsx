export const Header = () =>{
  return(
    <header className="py-0 px-6 flex justify-end items-center bg-white border-b-[1px] border-gray-300">
      <section className="flex items-center gap-3">
        <span>
          webmaster2@gho.mx
        </span>
        <span className="flex w-14 rounded-full aspect-square overflow-hidden">
        <img className="w-full object-cover" src="/users/admin.jpg" alt="perfil del administrador" />
        </span>
      </section>
    </header>
  )
}