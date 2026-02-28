const heading = (props:any) => {
  return (
    <div className="w-fit h-fit cursor-default">
      <span className="uppercase duration-500 transition-all customsmallshadow sm:customshadow text-white md:text-9xl sm:text-7xl text-6xl tracking-wide font-extrabold text-stroke-2 font-oswald [word-spacing:10px]">{props.value}</span>
    </div>
  )
}

export default heading
