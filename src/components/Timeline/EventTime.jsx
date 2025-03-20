export default function EventTime({ event, time }){
    return(
        <div className=" z-10 h-[30px] sm:h-[45px] w-[260px] sm:w-[1600px] border-[1.3px] sm:border-[2px] border-[#FF9500] border-b-[#924E00] text-white rounded-[7px] px-[10px] flex justify-between items-center text-[9px] sm:text-[24px] font-[600] overflow-x-auto">
            <span>{event}</span>
            <span>{time}</span>
        </div>
    )
}