import Image from "next/image";
import logo from "../public/logo.jpg";
import { Button, Card } from "flowbite-react";
import { Flowbite } from "flowbite-react";

export default function Suites() {
  const customTheme = {
    button: {
      color: {
        success:
          "border border-transparent bg-[--navbar-primary] outline outline-2 text-white focus:ring-2 focus:ring-[--color-bg] enabled:hover:bg-[--navbar-button-hover]",
      },
    },
  };

  return (
    <div id="suites" className="w-full p-2 py-16 bg-gray-200">
      <div className="max-w-[1240px] m-auto">
        <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
          Suites
        </p>
        <p className="py-2 text-[--color-text]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
          eius, ea similique qui dignissimos nemo quod cupiditate sunt quidem
          incidunt vel ullam reiciendis praesentium maxime quae repellendus
          doloribus, voluptates quos.
        </p>
        <Flowbite theme={{ theme: customTheme }}>
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              className="max-w-sm"
              renderImage={() => (
                <Image
                  width={500}
                  height={500}
                  src={logo}
                  alt="image 1"
                  className="rounded-md"
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-[--color-text]">
                Deluxe Suite XL
              </h5>
              <p className="font-normal text-[--color-text-light]">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id,
                dolorum repellat odit dolores ea atque facilis ipsum voluptate
                maiores modi?
              </p>
              <Button color="success" className="font-semibold tracking-wider">
                Lees Meer
              </Button>
            </Card>
            <Card
              className="max-w-sm"
              renderImage={() => (
                <Image
                  width={500}
                  height={500}
                  src={logo}
                  alt="image 1"
                  className="rounded-md"
                />
              )}
            >
              <h5 className="text-2xl font-bold tracking-tight text-[--color-text]">
                Huis Bergh Suite
              </h5>
              <Button color="success" className="font-semibold tracking-wider">
                Lees Meer
              </Button>
            </Card>
          </div>
        </Flowbite>
      </div>
    </div>
  );
}
