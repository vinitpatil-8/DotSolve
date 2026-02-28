const primarybutton = (props:any) => {
  return (
    <button type="button" className="bg-white border-4 cursor-pointer border-black p-2 duration-500 transition-all custombox">
        <span className="uppercase text-[#F57474] text-2xl sm:text-3xl md:text-5xl tracking-wider font-black text-stroke-2 font-oswald [word-spacing:10px]">
            {props.value}
        </span>
    </button>
  )
}

export default primarybutton
