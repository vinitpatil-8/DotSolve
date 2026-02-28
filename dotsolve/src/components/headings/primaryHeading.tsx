const heading = (props:any) => {
  return (
    <div className="w-fit h-fit cursor-default">
      <span className="uppercase duration-500 transition-all customshadow text-white md:text-9xl sm:text-7xl text-5xl tracking-wide font-extrabold text-stroke-2 font-oswald [word-spacing:10px]">{props.value}</span>
    </div>
  )
}

export default heading
