import Image from "next/image";
import logo from "../public/logo.jpg";
import Link from "next/link";

export default function Landing() {
  return (
    <div className="h-screen flex flex-col justify-center items-center md:flex-row shadow-lg">
      <div className="flex h-full w-full items-center justify-center bg-gray-950">
        <Image
          src={logo}
          alt="Logo"
          width={1000}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="relative z-10 max-w-3xl space-y-6 px-4 text-center text-gray-50 md:px-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Welkom bij Longstay Achterhoek
          </h1>
          <p className="text-sm md:text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius
            ducimus nam non tenetur fuga!
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="#about"
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-50 px-6 text-sm font-medium text-gray-900 shadow-sm transition-colors hover:bg-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-950 dark:text-gray-50 dark:hover:bg-gray-800 dark:focus-visible:ring-gray-300"
            >
              Lees Meer
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-50 bg-transparent px-6 text-sm font-medium text-gray-50 transition-colors hover:bg-gray-50/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:hover:bg-gray-800/10 dark:focus-visible:ring-gray-300"
            >
              Suites
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
