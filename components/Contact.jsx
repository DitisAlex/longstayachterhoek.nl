import React, { useRef, useState } from "react";
import { Button, Label, TextInput, Textarea, Alert } from "flowbite-react";

import { HiMail } from "react-icons/hi";
import { IoLocationSharp, IoPersonCircleSharp } from "react-icons/io5";
import { FaPhoneAlt, FaBuilding, FaClock } from "react-icons/fa";
import { TbHexagonLetterKFilled } from "react-icons/tb";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdSmsFailed } from "react-icons/md";

import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [successAlert, setSuccessAlert] = useState(false);
  const [failureAlert, setFailureAlert] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    try {
      emailjs
        .sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID,
          process.env.NEXT_PUBLIC_TEMPLATE_ID,
          form.current,
          {
            publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
          }
        )
        .then((result) => {
          if (result) {
            setSuccessAlert(true);
            e.target.reset();
          }
        });
    } catch (error) {
      setFailureAlert(true);
      e.target.reset();
    }
  };

  return (
    <div id="contact" className="w-full p-2 py-24">
      <div className="max-w-[1240px] m-auto">
        <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
          Contact
        </p>
        <p className="py-2 text-[--color-text]">
          Vul de onderstaande gegevens in indien u in contact wilt komen met
          ons.
        </p>
        <form
          className="py-4 md:grid grid-cols-2 gap-4"
          ref={form}
          onSubmit={submitForm}
        >
          <div className="col-span-1">
            <p className="uppercase my-2 border-b-2 border-gray-300">
              Persoonlijke Gegevens
            </p>
            <div className="mb-2 ring-0">
              <div className="block uppercase">
                <Label htmlFor="name" value="Naam*" />
              </div>
              <TextInput
                name="name"
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
                name="email"
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
                name="adress"
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
                name="tel"
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
                name="companyname"
                type="text"
                icon={FaBuilding}
                placeholder="Longstay Achterhoek B.V."
              />
            </div>
            <div className="mb-2">
              <div className="block uppercase">
                <Label htmlFor="companyadress" value="Adres" />
              </div>
              <TextInput
                name="companyadress"
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
                name="kvk"
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
                name="duration"
                type="text"
                icon={FaClock}
                placeholder="Twee nachten"
              />
            </div>
          </div>
          <div className="col-span-2">
            <div className="mb-2">
              <div className="block uppercase">
                <Label htmlFor="extra" value="Eventuele extra opmerkingen" />
              </div>
              <Textarea name="extra" rows={4} />
            </div>
          </div>
          <Button
            className="border border-transparent bg-[--navbar-primary] outline outline-2 text-white focus:ring-2 focus:ring-[--color-bg] enabled:hover:bg-[--navbar-button-hover] col-span-2 w-full md:justify-self-center md:w-1/2"
            type="submit"
          >
            Vestuur bericht
          </Button>
          <Alert
            className={`fixed bottom-0 right-0 m-4 ease-in-out ${
              successAlert ? "block" : "hidden"
            }`}
            color="success"
            icon={IoIosCheckmarkCircle}
            withBorderAccent
            onDismiss={() => setSuccessAlert(false)}
          >
            <span className="font-xs md:font-medium">
              Het bericht is succesvol verzonden! <br />
              <br className="md:hidden" />
              Wij nemen zo spoedig mogelijk contact met u op.
            </span>
          </Alert>
          <Alert
            className={`fixed bottom-0 right-0 m-4 ease-in-out ${
              failureAlert ? "block" : "hidden"
            }`}
            color="failure"
            icon={MdSmsFailed}
            withBorderAccent
            onDismiss={() => setFailureAlert(false)}
          >
            <span className="font-xs md:font-medium">
              Er is iets misgegaan! <br />
              <br className="md:hidden" />
              Probeer later uw bericht opnieuw te versturen.
            </span>
          </Alert>
        </form>
      </div>
    </div>
  );
}
