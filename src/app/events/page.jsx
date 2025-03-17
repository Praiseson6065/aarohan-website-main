"use client"
import React, { useState } from "react";
import EventCard from "@/components/EventCard/page";

const data = [
  {
    events: [
      {
        name: "Event 1",
        poster: "/assets/MainBG.png",
        venue: "LORDS ARENA",
        time: "",
        description: "",
      },
      {
        name: "Event 2",
        poster: "/assets/MainBG.png",
        venue: "LORDS ARENA",
        time: "",
        description: "",
      },
      {
        name: "Event 3",
        poster: "/assets/MainBG.png",
        venue: "LORDS ARENA",
        time: "",
        description: "",
      },
    ],
    workshops: [
      {
        name: "Workshop 1",
        poster: "/assets/MainBG.png",
        venue: "LORDS ARENA",
        time: "",
        description: "",
      }
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
    <div className="min-h-screen text-2xl select-none">
      <div className="mt-10 mb-5">
        <li className="w-[30%] max-w-[60%] h-fit mx-auto flex items-center justify-evenly">
          <ul className={`${day===0?'text-[#FF9500]':''} transition-all duration-300`} onClick={() => setDay(0)}>DAY 1</ul>
          <ul className={`${day===1?'text-[#FF9500]':''} transition-all duration-300`} onClick={() => setDay(1)}>DAY 2</ul>
          <ul className={`${day===2?'text-[#FF9500]':''} transition-all duration-300`} onClick={() => setDay(2)}>DAY 3</ul>
        </li>
      </div>
      <div className="text-base cursor-default">
        <div className="relative w-[18%] max-w-1/2 h-fit mx-auto px-5 py-1 flex items-center justify-between border border-x-2 border-[#FF9500] rounded-4xl">
          <span className={`absolute w-[50%] h-[calc(100%-6px)] top-[3px] left-[3px] bg-[#C07A00] border rounded-4xl ${!eventToggle? 'translate-x-[calc(100%-6px)]':''} -z-10 transition-all duration-700 ease-out`}></span>
          <div className="w-1/2 text-center" onClick={() => setEventToggle(true)}>EVENTS</div>
          <div className="w-1/2 text-center" onClick={() => setEventToggle(false)}>WORKSHOPS</div>
        </div>
      </div>

      <div className="mt-16">
        <div className="w-screen">
            <ul className="w-full flex items-center justify-evenly">
            {(eventToggle?data[day].events:data[day].workshops).map((event, key) => <li key={key}><EventCard event={event}/></li>)}
            </ul>
        </div>
      </div>
    </div>
  );
};

export default events;
