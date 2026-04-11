import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = (props: any) => {

    let navigate = useNavigate()

    function handleClick() {
        navigate(props.link)
    }

    const [style, setStyle] = useState({});

    const handleMouseMove = (e: any) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 15;
        const y = (e.clientY - top - height / 2) / 15;

        setStyle({
            transform: `rotateY(${x}deg) rotateX(${-y}deg)`
        });
    };

    const reset = () => {
        setStyle({
            transform: "rotateY(0deg) rotateX(0deg)"
        });
    };

    return (
        <div className='xl:w-80 xl:h-80 sm:w-70 sm:h-70 w-68 h-68 relative perspective-[1000px]'>
            <div onMouseMove={handleMouseMove}
                onMouseLeave={reset}
                style={style}
                className="group overflow-hidden w-full h-full relative rounded-4xl transition-all duration-200 ease-out"
            >
                <div className='xl:w-80 xl:h-80 sm:w-70 sm:h-70 w-68 h-68 brightness-40 opacity-95 rounded-2xl'>
                    <img className='rounded-3xl' src={props.image} alt="image" />
                </div>


                <div className='absolute left-4 top-1/8 bottom-1/8 flex flex-col gap-3 xl:font-extrabold font-bold'>
                    <h1 className='text-white uppercase md:text-3xl sm:text-[22px] text-xl font-retro'>{props.heading}</h1>
                    <h2 className='text-white text-md'>{props.desc}</h2>
                    {/* <button type="button" className='mt-auto w-fit font-retro uppercase bg-amber-50 p-4 text-2xl rounded-xl cursor-pointer border-4 border-[#F1D624]'>
                            solve
                        </button> */}
                    <button onClick={handleClick} type="button" className="mt-auto w-fit font-retro uppercase px-6 py-3 text-xl bg-[#F1D624] text-black rounded-xl border-4 border-black shadow-[6px_6px_0px_black] transition-all duration-150 hover:shadow-[3px_3px_0px_black] hover:translate-x-0.75 hover:translate-y-0.75 active:shadow-none active:translate-x-1.5 active:translate-y-1.5 cursor-pointer hover:drop-shadow-[0_0_8px_#F1D624]">
                        Solve
                    </button>

                </div>



            </div>

        </div>
    )
}

export default Card