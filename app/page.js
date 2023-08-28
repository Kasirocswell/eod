import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div>
      <div
        className="w-screen h-screen"
        style={{
          backgroundImage: "url(/backgrounds/cover2.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />
        <section className="relative flex mt-[-25px]">
          <div className="content-container space-y-4 md:flex md:flex-row md:ml-[-100px] md:space-y-0">
            <div className="text-container md:pl-[150px] md:text-center md:mt-[150px]">
              <div className="text-xl font-bold ml-[100px] md:text-6xl">
                Echoes of Dominion
              </div>
              <div className="mt-2 text-center md:ml-[125px] md:text-xl">
                From Earth's ashes, the universe awaits: Humanity's conquest has
                just begun.
              </div>
              <button className="w-[50px] h-[40px] bg-green-400 ml-[175px] rounded-lg mt-2 md:mr-[75px]">
                Buy
              </button>
            </div>
            <div className="image-container md:pt-[-100px]">
              <Image
                src="/aisha.png"
                width={500}
                height={800}
                alt="Picture of the book cover"
                className="md:w-[700px] md:h-[700px]"
              />
            </div>
          </div>
        </section>
      </div>
      <div>
        <section className="md:relative md:flex">
          <div className="md:flex md:flex-row md:my-4 md:mx-auto md:space-x-4">
            <div className="md:flex md:flex-row">
              <Image
                src="/backgrounds/cover4.png"
                width={500}
                height={800}
                alt="Picture of the book cover"
              />
            </div>
            <div className="mx-2 text-center mt-4 mb-4 md:w-[500px] md:h-[800px] md:text-left md:text-lg">
              In a world teetering on the precipice of its own demise, the
              remnants of humanity are confronted with an unprecedented threat:
              a formidable invasion from beyond the stars. Cities crumble,
              societies shatter, and amidst the chaos, Malik, Zara, and a
              resilient group of survivors rise to mount a desperate resistance.
              Yet, as they navigate the ruins of their civilization and engage
              in fierce battles against the extraterrestrial invaders, they
              stumble upon revelations that shake the very core of their
              understanding. The Earth, with its diverse landscapes and rich
              history, was never merely a sanctuary for human life. Hidden
              beneath the layers of wars, politics, and human endeavors, lay a
              profound secret: Earth was a meticulously designed training
              ground, preparing humanity for a destiny far grander than they
              could have ever imagined. As the boundaries between friend and foe
              become increasingly indistinct, Malik, Zara, and their allies find
              themselves ensnared in a vast cosmic play, where the rules are
              constantly changing. Journey with them across interstellar
              expanses, through battles that rage not just on land, but in the
              very fabric of reality. Witness alliances forged in the heat of
              combat, love blossoming amidst despair, and sacrifices made for
              the greater good. At the heart of this epic tale lies a question
              that has haunted humanity since its inception: What is our true
              purpose? Dive deep into a narrative that intertwines war, love,
              betrayal, and the indomitable spirit of humanity as they grapple
              with their place in the universe and the price of ultimate power.
            </div>
          </div>
        </section>
      </div>
      <div
        className="w-screen h-screen flex"
        style={{
          backgroundImage: "url(/backgrounds/cover3.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <section className="md:relative md:flex">
          <div className="md:flex md:flex-row md:mx-[200px] md:mt-8">
            <div className="text-center mt-4 mb-4 md:h-[500px] md:w-[500px] md:text-3xl md:text-left">
              Kasi Reeves, born amidst the vibrant culture of Japan and nurtured
              in the eclectic vibes of the Bay Area, is a dynamic force in the
              realms of sci-fi, video games, and anime. Drawing inspiration from
              luminaries like Hunter S. Thompson's rebellious spirit, George
              Lucas's visionary world-building, and Donald Glover's multifaceted
              genius, Kasi weaves narratives that resonate with both heart and
              imagination. Beyond the written word, Kasi's diverse passions
              paint a portrait of a storyteller unafraid to traverse boundaries,
              always eager to explore the vast expanse of creative expression.
              Dive into Kasi's world, and discover tales that transcend time and
              space.
            </div>
            <div>
              <Image
                src="/author.PNG"
                width={500}
                height={500}
                alt="Picture of the book cover"
                className="rounded-full"
              />
              <div className="invisible ml-[145px] mt-2 text-2xl md:visible md:text-3xl md:text-black md:ml-[160px]">
                Kasi Reeves
              </div>
              <div className=" invisible ml-[160px] mt-2 md:text-2xl md:visible md:text-black md:ml-[168px]">
                War Machine
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
