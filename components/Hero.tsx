import Image from "next/image";
import { Cherry_Bomb_One } from "next/font/google";

const Hero = () => {
  return (
    <div className="relative">
      <div
        style={{
          backgroundImage: `url("/final-dl.beatsnoop 9.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
          height: "100vh", // Set the desired height for your hero section
        }}
      />

      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
        <div className="mt-28">
          <div
            className="text-red-700 text-4xl uppercase ms-40 "
            style={{ fontFamily: "Cherry Bomb One, sans-f" }}
          >
            Delight Your Taste <br /> Buds with Every Bite!
          </div>
          <p className="text-black ms-40 text-xl font-bold mt-3">
            Its always good time for the great taste of burgers.
          </p>
        </div>

        <div className="me-40 mt-12">
          <Image
            src={"/final-dl.beatsnoop 7.png"}
            alt="burger"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
