"use client";
import React, { useEffect, useState } from "react";
import EventCard from "@/components/EventCard/page";
import { fetchGoogleSheetData, processSheetData } from "./util";

const data = [
  {
    events: [
      {
        name: "Event 1",
        poster: "/assets/MainBG.png",
        venue: "LORDS ARENA",
        time: "04:00 P.M.",
        description:
          "loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsumloremipsum loremipsumloremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsumloremipsum loremipsumloremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsumloremipsum loremipsumloremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsum loremipsumloremipsum loremipsumloremipsum loremipsum",
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
        poster:
          "https://instagram.fccu9-4.fna.fbcdn.net/v/t51.29350-15/484966507_2887918864704185_3581177697945092104_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fccu9-4.fna.fbcdn.net&_nc_cat=105&_nc_oc=Q6cZ2QGwWrcLa10_a7yB9z9EwAXW5mlg-4E49I-u0fEW-gaRyDg0eTm4lftAGoGVRWipsK8OYX3CyBechi60v188a_uS&_nc_ohc=Ic6lCLeEE_MQ7kNvgGvVeHe&_nc_gid=RKMynpVMk1SH0WGCW7qboA&edm=APs17CUBAAAA&ccb=7-5&ig_cache_key=MzU5MDgwMDk0MTExMjYwMjE0MA%3D%3D.3-ccb7-5&oh=00_AYGICA0nTrCy4rsEhaPOCOQGTMOFp0L-x3clxYUnARKVWQ&oe=67E08948&_nc_sid=10d13b",
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
  const [dataE, setDataE] = useState({ events: [], workshops: [] });
  const [eventToggle, setEventToggle] = useState(true);
  useEffect(() => {
    const getData = async () => {
      const sheetData = await fetchGoogleSheetData();
      setDataE(processSheetData(sheetData));
    };
    getData();
  },[]);
  return (
    <div className="w-screen min-h-screen text-base md:text-xl lg:text-2xl select-none bg-[url('/assets/MainBG.png')] bg-cover bg-center ">
      <div className="mt-24 mb-5">
        <ul className="w-[350px] sm:w-[640px] md:w-[700px] lg:w-[800px] xl:w-[900px] h-fit mx-auto flex items-center justify-evenly text-nowrap">
          <li
            className={`${
              day === 0 ? "text-[#FF9500]" : ""
            } transition-all duration-300`}
            onClick={() => setDay(0)}
          >
            DAY 1
          </li>
          <li
            className={`${
              day === 1 ? "text-[#FF9500]" : ""
            } transition-all duration-300`}
            onClick={() => setDay(1)}
          >
            DAY 2
          </li>
          <li
            className={`${
              day === 2 ? "text-[#FF9500]" : ""
            } transition-all duration-300`}
            onClick={() => setDay(2)}
          >
            DAY 3
          </li>
        </ul>
      </div>
      <div className="w-full h-[36px] tracking-tighter sm:tracking-tight md:tracking-normal text-[10px] sm:text-sm lg:text-base cursor-default">
        <div className="relative box-border h-full w-[200px] sm:w-[280px] md:w-[320px] lg:w-[340px] xl:w-[380px] mx-auto flex items-center justify-between px-5 py-1 border border-x-2 border-[#FF9500] rounded-4xl">
          <span
            className={`absolute w-1/2 h-[calc(100%-6px)] top-[3px] left-[3px] bg-[#C07A00] border rounded-4xl ${
              !eventToggle ? "translate-x-[calc(100%-6px)]" : ""
            } z-0 transition-all duration-500 ease-out`}
          ></span>
          <div
            className="inline-block w-1/2 text-left pl-2 sm:pl-4 md:pl-6.5 lg:pl-7 xl:pl-9 text-nowrap z-10"
            onClick={() => setEventToggle(true)}
          >
            EVENTS
          </div>
          <div
            className="inline-block w-1/2 text-right pr-3 text-nowrap pl-2 sm:pl-3 md:pl-5 lg:pl-4.5 xl:pl-5.5 z-10"
            onClick={() => setEventToggle(false)}
          >
            WORKSHOPS
          </div>
        </div>
      </div>

      <div className="mt-16 w-screen flex items-center justify-center p-0 md:p-5 lg:p-0">
        <ul className="w-full grid gap-x-[20px] md:grid-cols-2 xl:grid-cols-3">
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
