import NavbarComponent from "../components/Navbar.jsx";
import FooterComponent from "../components/Footer.jsx";
import Head from "next/head";
import Link from "next/link";
import { Card } from "flowbite-react";

export default function Advertisement() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Longstay Achterhoek</title>
        <meta
          name="description"
          content="Serviced apartments in s-Heerenberg by Longstay Achterhoek"
        />
      </Head>
      <NavbarComponent />

      <div className="flex-grow w-full p-2 py-36">
        <div className="max-w-[1240px] m-auto">
          <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
            Serviced apartments in s-Heerenberg
          </p>
          <p className="py-2 text-[--color-text]">
            Looking for a serviced apartment in s-Heerenberg? From short-term
            project work to long-term employee relocations, our serviced
            apartments offer the space, design, and comfort of a home.
          </p>
          <p className="py-2 text-[--color-text]">
            Space and Comfort: Our apartments are substantially larger than
            typical hotel rooms, providing separate living, dining, and sleeping
            areas. This extra space is essential for comfortable extended stays,
            enabling corporate guests to maintain a productive routine,
            entertain colleagues, and feel truly at home.
          </p>
          <p className="py-2 text-[--color-text]">
            Financial Value and Flexibility: Serviced apartments are a highly
            cost-effective option for long-term stays, particularly with fully
            equipped kitchens that allow for significant savings on meal
            expenses.
          </p>
          <div className="md:grid grid-cols-4  py-4">
            <Card className="col-span-1 py-2 m-2 md:mx-0 md:rounded-r-none">
              <h1 className="mb-4 text-xl font-medium text-gray-500 ">
                From 2 months
              </h1>
              <div className="flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  69
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 ">
                  /night
                </span>
              </div>
            </Card>
            <Card className="col-span-1 py-2 border-8 border-[--navbar-primary]">
              <h1 className="mb-4 text-xl font-medium text-gray-500 ">
                1 to 2 months
              </h1>
              <div className="flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  79
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 ">
                  /night
                </span>
              </div>
            </Card>
            <Card className="col-span-1 py-2 m-2 md:mx-0 md:rounded-none">
              <h1 className="mb-4 text-xl font-medium text-gray-500 ">
                14 days to 1 month
              </h1>
              <div className="flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  89
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 ">
                  /night
                </span>
              </div>
            </Card>
            <Card className="col-span-1 py-2 m-2 md:mx-0 md:rounded-l-none">
              <h1 className="mb-4 text-xl font-medium text-gray-500 ">
                7 days to 14 days
              </h1>
              <div className="flex items-baseline text-gray-900">
                <span className="text-5xl font-extrabold tracking-tight">
                  99
                </span>
                <span className="ml-1 text-xl font-normal text-gray-500 ">
                  /night
                </span>
              </div>
            </Card>
          </div>
          <p className="text-sm italic text-[--color-text]">
            Disclaimer: All prices are excluding 21% VAT and tourist tax € 1.25
            p.p.p.n.
          </p>
          <div className="py-4">
            <h2 className="text-2xl font-semibold">
              More information about our serviced apartments?
            </h2>
            Would you like to receive more information about renting an
            apartment for a longer period? <br />
            <br />
            Please contact us via{" "}
            <Link
              className="underline text-[--navbar-primary]"
              href={"/contact"}
            >
              the contact form.
            </Link>
          </div>
        </div>
      </div>
      <FooterComponent />
    </div>
  );
}
