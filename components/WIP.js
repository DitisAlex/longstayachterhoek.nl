import Image from 'next/image';
import logo from "../public/logo.png";

export default function WIP() {
  return (
    <div className="h-screen flex flex-col justify-center items-center md:flex-row">
      <Image src={logo} alt="logo" width="500" height="500" className="w-3/4 md:w-fit"/>
      <div className="flex flex-col px-4">
        <h1 className="uppercase text-3xl tracking-widest md:text-3xl italic">Coming soon..</h1>
      </div>
    </div>
  )
}
