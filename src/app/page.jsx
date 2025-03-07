"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      "#textAnimate",
      { opacity: 1, scale: 0.5 },
      {
        opacity: 1,
        scale: 1.5,
        duration: 5,
        scrollTrigger: {
          trigger: "#heroID",
          start: "top top",
          end: "+=500",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <>
      <div
        id="heroID"
        className='min-h-screen flex justify-center items-center py-48 md:py-24 bg-[url("/assets/MainBG.png")] bg-cover bg-center'
      >
        <div className="self-end text-center text-amber-600" id="textAnimate">
          <div>
            <h1 className="text-4xl md:text-7xl font-bold ">Aarohan</h1>
          </div>
          <div className="text-[0.6em] flex w-full justify-between">
            <div>March 20-23</div>
            <div>Lords Arena</div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex items-center py-12 "></div>
    </>
  );
}
