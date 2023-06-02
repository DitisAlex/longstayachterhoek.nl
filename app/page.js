import Image from 'next/image'
import logo from "../public/logo.png"

export default function Home() {
  return (
    <div className="container h-screen flex flex-col justify-center items-center md:flex-row">
      <Image src={logo} alt="logo" width="500" height="500" className="w-3/4 md:w-fit"/>
      <div className="flex flex-col font-sans w-1/2 md:w-auto">
        <h1 className="uppercase text-3xl tracking-widest md:text-3xl">Longstay Achterhoek</h1>
        <h2 className="uppercase text-lg tracking-widest">Coming soon...</h2>
      </div>
    </div>
  )
}
