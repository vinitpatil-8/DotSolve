const secondaryHeading = (props:any) => {
  return (
    <div className="cursor-default w-fit h-fit">
      <span className="uppercase duration-500 tracking-wide transition-all text-[#F57474] md:text-4xl sm:text-2xl text-xl font-black text-stroke-1 sm:text-stroke-2 font-oswald [word-spacing:5px]">{props.value}</span>
    </div>
  )
}

export default secondaryHeading