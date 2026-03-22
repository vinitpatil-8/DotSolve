const Heading = (props:any) => {
  return (
    <div className="w-fit h-fit cursor-default">
      <span className="uppercase duration-500 transition-all hover:text-shadow-[-1px_1px_0px_black] text-shadow-[-2px_2px_0px_black] sm:hover:text-shadow-[-2px_2px_0px_black] sm:text-shadow-[-4px_4px_0px_black] text-white md:text-9xl sm:text-7xl text-6xl tracking-wide font-extrabold text-stroke-2 font-oswald [word-spacing:10px]">{props.value}</span>
    </div>
  )
}

export default Heading