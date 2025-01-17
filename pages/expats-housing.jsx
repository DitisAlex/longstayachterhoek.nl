import NavbarComponent from "../components/Navbar.jsx";
import FooterComponent from "../components/Footer.jsx";
import Head from "next/head";
import Link from "next/link";

import { FaKey, FaWifi, FaBed, FaShower } from "react-icons/fa";
import { TbDesk } from "react-icons/tb";
import { MdAutorenew, MdKitchen, MdLocalLaundryService } from "react-icons/md";
import { FaCouch } from "react-icons/fa6";

export default function Advertisement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Longstay Achterhoek</title>
        <meta name="description" content="Longstay Achterhoek" />
      </Head>
      <NavbarComponent />

      <div className="flex-grow w-full p-2 py-36">
        <div className="max-w-[1240px] m-auto">
          <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
            Expats Housing
          </p>
          <p className="py-2 text-[--color-text]">
            If you&#39;re looking for a unique expat housing experience in the
            Achterhoek, the Netherlands, Longstay Achterhoek is the perfect
            place for you! We offer rental properties designed specifically for
            long-term stays, and our communal spaces are perfect for connecting
            with locals and other guests. Whether you&#39;re looking to work or
            just immerse yourself in Dutch culture, Longstay Achterhoek is the
            perfect place to feel home. Longstay Achterhoek is located nearby
            the A12 to Arnhem and the A3 to Germany. We offer a safe and
            comfortable environment for expats who come to us to work or just
            experience the Dutch culture. Need more information? Feel free to
            give us a call or send us an e-mail. We are happy to help you!
          </p>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">
              What is included in the price?
            </h2>
            <ul>
              <li className="flex items-center space-x-2 py-1">
                <FaBed className="text-2xl" />
                <span>
                  uniquely designed hotel room with a comfortable bed with a
                  quality mattress, fluffy duvet and pillows;
                </span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <FaShower className="text-2xl" />
                <span>
                  private en suite bathroom with shower and amenities;
                </span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <MdKitchen className="text-2xl" />
                <span>
                  a wardrobe and adjacent pantry with your own fridge, own hob,
                  own dishwasher, combi oven, coffee machine and water cooker;
                </span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <TbDesk className="text-2xl" />
                <span>workspace in your room;</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <FaCouch className="text-2xl" />
                <span>living room;</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <FaWifi className="text-2xl" />
                <span>fast Wi-Fi;</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <MdLocalLaundryService className="text-2xl" />
                <span>fully equipped laundry facility;</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <FaKey className="text-2xl" />
                <span>digital key;</span>
              </li>
              <li className="flex items-center space-x-2 py-1">
                <MdAutorenew className="text-2xl" />
                <span>weekly cleaning, fresh sheets and towels.</span>
              </li>
            </ul>
          </div>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">
              More information about expats housing?
            </h2>
            Feel free to contact us{" "}
            <Link
              className="underline text-[--navbar-primary]"
              href={"/contact"}
            >
              here
            </Link>{" "}
            for more information!
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
