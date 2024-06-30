import { Button, Label, TextInput, Textarea } from "flowbite-react";
import { HiMail } from "react-icons/hi";
import { IoLocationSharp, IoPersonCircleSharp } from "react-icons/io5";
import { FaPhoneAlt, FaBuilding, FaClock } from "react-icons/fa";
import { TbHexagonLetterKFilled } from "react-icons/tb";

export default function Contact() {
  return (
    <div id="contact" className="w-full p-2 py-24">
      <div className="max-w-[1240px] m-auto">
        <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
          Contact
        </p>
        <p className="py-2 text-[--color-text]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          eius, ea similique qui dignissimos nemo quod cupiditate sunt quidem
          incidunt vel ullam reiciendis praesentium maxime quae repellendus
          doloribus, voluptates quos.
        </p>
        <form className="py-4 md:grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <p className="uppercase my-2 border-b-2 border-gray-300">
              Persoonlijke Gegevens
            </p>
            <div className="mb-2 ring-0">
              <div className="block uppercase">
                <Label htmlFor="name" value="Naam*" />
              </div>
              <TextInput
                id="name"
                type="text"
                icon={IoPersonCircleSharp}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-2">
              <div className="block uppercase">
                <Label htmlFor="email" value="Email*" />
              </div>
              <TextInput
                id="email"
                type="email"
                icon={HiMail}
                placeholder="info@longstayachterhoek.nl"
                required
              />
            </div>
            <div className="mb-2">
              <div className="block uppercase">
                <Label htmlFor="adress" value="Adres*" />
              </div>
              <TextInput
                id="adress"
                type="text"
                icon={IoLocationSharp}
                placeholder="Straat 123, 1234 AB Plaats"
                required
              />
            </div>
            <div className="mb-2">
              <div className="block uppercase">
                <Label htmlFor="tel" value="Telefoonnummer*" />
              </div>
              <TextInput
                id="tel"
                type="number"
                icon={FaPhoneAlt}
                placeholder="+31 6 12345678"
                required
              />
            </div>
          </div>
          <div className="col-span-1">
            <p className="uppercase my-2 border-b-2 border-gray-300">
              Bedrijfsgegevens <br className="md:hidden" />
              <span className="italic text-sm">(indien van toepassing)</span>
            </p>
            <div className="mb-2">
              <div className="block uppercase">
                <Label htmlFor="companyname" value="Bedrijfsnaam" />
              </div>
              <TextInput
                id="companyname"
                type="text"
                icon={FaBuilding}
                placeholder="Longstay Achterhoek B.V."
              />
            </div>
            <div className="mb-2">
              <div className="block uppercase">
                <Label htmlFor="adress" value="Adres" />
              </div>
              <TextInput
                id="adress"
                type="text"
                icon={IoLocationSharp}
                placeholder="Straat 123, 1234 AB Plaats"
              />
            </div>
            <div className="mb-2">
              <div className="block uppercase">
                <Label htmlFor="kvk" value="KVK nummer" />
              </div>
              <TextInput
                id="kvk"
                type="number"
                icon={TbHexagonLetterKFilled}
                placeholder="12345678"
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-2">
              <div className="block uppercase">
                <Label htmlFor="duration" value="Verblijfsduratie" />
              </div>
              <TextInput
                id="duration"
                type="text"
                icon={FaClock}
                placeholder="Twee nachten"
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-2">
              <div className="block uppercase">
                <Label htmlFor="duration" value="Eventuele extra opmerkingen" />
              </div>
              <Textarea id="duration" icon={TbHexagonLetterKFilled} rows={4} />
            </div>
          </div>
          <Button
            className="border border-transparent bg-[--navbar-primary] outline outline-2 text-white focus:ring-2 focus:ring-[--color-bg] enabled:hover:bg-[--navbar-button-hover] col-span-2 w-full md:justify-self-center md:w-1/2"
            type="submit"
          >
            Vestuur bericht
          </Button>
        </form>
      </div>
    </div>
  );
}
