"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Home() {
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      textRef.current,
      { opacity: 1, scale: 0.5 },
      {
        opacity: 1,
        scale: 2,
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
        className='min-h-screen flex justify-center items-center py-12 md:py-24 bg-[url("/assets/MainBG.png")] bg-cover bg-center'
      >
        <div className="self-end">
          <h1 ref={textRef} className="text-4xl font-bold text-amber-600">
            Aarohan
          </h1>
        </div>
      </div>
      <div className="min-h-screen flex items-center py-12 "></div>
    </>
  );
}
