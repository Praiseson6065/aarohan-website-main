"use client";
import React, { useState } from "react";
import EventCard from "@/components/EventCard/page";

const data = [
  {
    events: [
      {
        name: "Event 1",
        poster: "/assets/MainBG.png",
        venue: "LORDS ARENA",
        time: "04:00 P.M.",
        description: "",
      },
      {
        name: "Event 2",
        poster: "/assets/MainBG.png",
        venue: "LORDS ARENA",
        time: "05:00 P.M.",
        description: "",
      },
      {
        name: "Event 3",
        poster: "/assets/MainBG.png",
        venue: "LORDS ARENA",
        time: "06:00 P.M.",
        description: "",
      },
      {
        name: "Event 4",
        poster: "/assets/MainBG.png",
        venue: "LORDS ARENA",
        time: "06:00 P.M.",
        description: "",
      },
      {
        name: "Event 5",
        poster: "/assets/MainBG.png",
        venue: "LORDS ARENA",
        time: "06:00 P.M.",
        description: "",
      },
      {
        name: "Event 6",
        poster: "/assets/MainBG.png",
        venue: "LORDS ARENA",
        time: "06:00 P.M.",
        description: "",
      },
    ],
    workshops: [
      {
        name: "Workshop 1",
        poster: "/assets/MainBG.png",
        venue: "LORDS ARENA",
        time: "03:00 P.M.",
        description: "",
      },
    ],
  },
  {
    events: [],
    workshops: [],
  },
  {
    events: [],
    workshops: [],
  },
];

const events = () => {
  const [day, setDay] = useState(0);
  const [eventToggle, setEventToggle] = useState(true);

  return (
    <div className="w-screen min-h-screen text-base md:text-xl lg:text-2xl select-none ">
      <div className="mt-24 mb-5 px-24">
        <li className=" w-full md:w-[60%] lg:w-[35=8%] xl-[25%] h-fit mx-auto flex px-[10%] sm:px-[20%] md:px-0 items-center justify-between md:justify-evenly text-nowrap">
          <ul
            className={`${
              day === 0 ? "text-[#FF9500]" : ""
            } transition-all duration-300`}
            onClick={() => setDay(0)}
          >
            DAY 1
          </ul>
          <ul
            className={`${
              day === 1 ? "text-[#FF9500]" : ""
            } transition-all duration-300`}
            onClick={() => setDay(1)}
          >
            DAY 2
          </ul>
          <ul
            className={`${
              day === 2 ? "text-[#FF9500]" : ""
            } transition-all duration-300`}
            onClick={() => setDay(2)}
          >
            DAY 3
          </ul>
        </li>
      </div>
      <div className="w-full h-[36px] tracking-tighter sm:tracking-tight md:tracking-normal text-sm md:text-base cursor-default">
        <div className=" relative h-full w-[240px] sm:w-[250px] md:w-[33%] lg:w-[24%] xl:w-[20%] max-w-[350px] mx-auto flex justify-between px-5 py-1 border border-x-2 border-[#FF9500] rounded-4xl">
          <span
            className={`absolute w-1/2 h-[calc(100%-6px)] top-[3px] left-[3px] bg-[#C07A00] border rounded-4xl ${
              !eventToggle ? "translate-x-[calc(100%-6px)]" : ""
            } -z-10 transition-all duration-700 ease-out`}
          ></span>
          <div
            className="inline-block w-1/2 text-left pl-3 text-nowrap"
            onClick={() => setEventToggle(true)}
          >
            EVENTS
          </div>
          <div
            className="inline-block w-1/2 text-right pr-3 text-nowrap"
            onClick={() => setEventToggle(false)}
          >
            WORKSHOPS
          </div>
        </div>
      </div>

      <div className="mt-16 w-screen flex items-center justify-center p-0 md:p-5 lg:p-0">
        <ul className="w-full grid gap-x-[20px] md:grid-cols-2 xl:grid-cols-2">
          {(eventToggle ? data[day].events : data[day].workshops).map(
            (event, key) => (
              <li key={key}>
                <EventCard event={event} />
              </li>
            )
          )}
        </ul>
      </div>
    </div>
  );
};

export default events;
