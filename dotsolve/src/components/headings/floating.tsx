const quickselect = (props:any) => {
  return (
    <div className="w-fit h-fit m-2 text-black font-gaegu cursor-pointer font-bold sm:text-2xl text-xl">
      <div className={props.class}>
        {props.value}
      </div>
    </div>
  )
}

export default quickselect
