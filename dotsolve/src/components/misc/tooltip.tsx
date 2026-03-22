const Tooltip = (props:any) => {
  return (
    <div className="relative inline-block border-b cursor-pointer hover:visible">
        <span className="hidden hover:visible w-20 bg-black text-white text-center px-4 rounded-xl absolute z-1">
            {props.value}
        </span>
      
    </div>
  )
}

export default Tooltip
