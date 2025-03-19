import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";
import { Clock, MapPin } from "lucide-react";
import Link from "next/link";

const EventCard = ({ event }) => {
  return (
    <div>
      <CardContainer className="inter-var">
        <CardBody className="bg-[#D9D9D9] relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-[280px] sm:w-[360px] md:w-[350px] lg:w-[380px] [@media(min-width:1600px)]:w-[400px] h-[430px] sm:h-auto rounded-xl p-6 border  ">
          <CardItem
            translateZ="50"
            className="w-full text-center text-base md:text-xl font-bold text-black"
          >
            {event.name}
          </CardItem>
          <CardItem
            as="div"
            translateZ="60"
            className="text-[10px] md:text-sm text-nowrap max-w-sm mt-2 text-neutral-700"
          >
            <div className="w-full h-fit flex items-center justify-between">
              <span className="flex items-center">
                <span className="mr-1.5 md:mr-3">
                  <Clock />
                </span>
                <span>{event.time}</span>
              </span>
              <span className="flex items-center justify-center">
                <span className="mr-1.5 md:mr-3">{event.venue}</span>
                <span>
                  <MapPin />
                </span>
              </span>
            </div>
          </CardItem>
          <CardItem translateZ="100" className="w-full mt-4">
            <Image
              src="/assets/MainBG.png"
              height="1000"
              width="1000"
              className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          <div className="w-full flex justify-between items-center mt-12 sm:mt-20 text-nowrap text-[9px] md:text-xs font-bold">
            <CardItem
              translateZ={20}
              as="button"
              target="__blank"
              className="px-4 py-2 rounded-xl bg-[#E38501]"
            >
              Know more
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-[#E38501]"
            >
              Register
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default EventCard;
