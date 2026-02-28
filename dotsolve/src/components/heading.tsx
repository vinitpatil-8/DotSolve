const heading = (props:any) => {
  return (
    <div className="w-fit h-fit">
      <span className="uppercase duration-500 transition-all shadow text-white text-9xl tracking-wide font-extrabold text-stroke-2 font-oswald [word-spacing:25px]">{props.value}</span>
    </div>
  )
}

export default heading
