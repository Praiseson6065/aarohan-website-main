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
    <div className="min-h-screen text-3xl">
      <div className="mt-10 mb-5">
        <li className="w-[30%] max-w-[60%] h-fit mx-auto flex items-center justify-evenly border border-red-500">
          <ul>DAY 1</ul>
          <ul>DAY 2</ul>
          <ul>DAY 3</ul>
        </li>
      </div>
      <div className="text-2xl">
        <div className="w-[25%] max-w-1/2 h-fit mx-auto flex items-center justify-evenly border border-blue-500">
          <div onClick={() => setEventToggle(true)}>EVENTS</div>
          <div onClick={() => setEventToggle(false)}>WORKSHOPS</div>
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
