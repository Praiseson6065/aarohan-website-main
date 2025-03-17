import Image from 'next/image'
import React from 'react'

const EventCard = ({event}) => {
  return (
    <div className='w-[20vw] h-fit text-sm border border-red-500'>
        <div className='w-full h-10px'>{event.name}</div>
        <div>
            {/* <Image
            src={event.poster}
            layout='fill'
            className='object-cover'
            /> */}
        </div>
        <div>
            <div className='w-full h-10 flex items-center justify-between'>
                <div>{event.time}</div>
                <div>{event.venue}</div>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default EventCard