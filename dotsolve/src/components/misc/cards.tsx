import Image from '../../assets/connectdots.png'

const cards = () => {

    return (
        <div className='w-80 h-80 relative'>
            <div className='w-80 h-80 brightness-40 opacity-95 rounded-2xl'>
                <img className='rounded-3xl' src={Image} alt="image" />
            </div>
            

            <div className='absolute left-4 top-1/8 font-extrabold'>
                <h1 className='text-white uppercase text-3xl font-retro'>Connect The Dots</h1>
                <h2 className='text-white text-md mt-5'>Get a completely solved grid</h2>
                <button type="button" className='font-retro uppercase bg-amber-50 mt-18 p-4 text-2xl rounded-xl cursor-pointer border-4 border-[#F1D624]'>
                    solve
                </button>
                
            </div>

        </div>
    )
}

export default cards
