const Secondarybutton = (props:any) => {
  return (
    <button type="button" className={`${props.statess || ""} bg-white border-2 cursor-pointer border-black p-2 duration-500 transition-all custombox`}>
        <span className='uppercase text-[#F57474] text-xl sm:text-2xl md:text-3xl tracking-wide font-extrabold text-stroke-1 sm:text-stroke-2 font-oswald [word-spacing:10px]'>
            {props.value}
        </span>
    </button>
  )
}

export default Secondarybutton