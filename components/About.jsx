import Image from "next/image";
import logo from "../public/logo.jpg";

export default function About() {
  return (
    <div id="about" className="w-full p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="font-semibold uppercase text-2xl tracking-widest text-[--navbar-primary] py-2">
            Over Ons
          </p>
          <p className="py-2 text-[--color-text]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
            eius, ea similique qui dignissimos nemo quod cupiditate sunt quidem
            incidunt vel ullam reiciendis praesentium maxime quae repellendus
            facere iste ex tempore, veritatis labore asperiores suscipit et
            alias. A libero, eligendi itaque culpa quia nulla optio beatae
            explicabo iusto autem natus quam facere. Perferendis, quod laborum
            dolore delectus voluptatem unde accusantium labore mollitia in
            necessitatibus eligendi aperiam nisi distinctio laboriosam corrupti
            enim! Eaque earum reprehenderit cumque vitae praesentium fugit
            consequuntur fugiat, ipsam excepturi, animi iure tempora quod!
            Doloremque eos adipisci amet ullam delectus eius assumenda excepturi
            laborum eligendi eveniet, perspiciatis consequuntur!
          </p>
        </div>
        <div className="py-4">
          <Image
            src={logo}
            alt="Logo"
            width={1000}
            height={1000}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
