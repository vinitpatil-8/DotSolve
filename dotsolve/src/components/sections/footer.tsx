import Typewriter from 'typewriter-effect';
import Letter from '../misc/letter'
import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";
import { AiFillHome } from "react-icons/ai";

const handleClick = (value: string) => {
    window.open(value, "_blank")
}

const totalScreenWidth = screen.width;
let n = 20
if (totalScreenWidth >= 640) {
    n = 25
}else if (totalScreenWidth >= 768) {
    n = 30
}

const Footer = () => {

    let list_of_texts = [
        'More Games Coming Soon !',
        'Try Messaging Me !',
        'Connect With Me On LinkedIn',
        'Say Hello...',
        'Checkout My Other Projects',
        'Connect With Me On Instagram',
        'Why is 10 scared ?',
        'Wait for it...',
        'Because he is between 9-11',
        'JK, Pls dont cancel me'
    ]

    return (
        <div className="footer w-full h-98 mt-50 flex flex-col sm:flex-row justify-between">
            <div className='sm:w-[48%] w-full flex flex-col h-98 sm:pl-9 pt-12 sm:text-left text-center'>

                <div className='hover:text-shadow-[-0px_0px_0px_black] text-shadow-[-1px_1px_0px_black] sm:hover:text-shadow-[-0px_0px_0px_black] sm:text-shadow-[-1.5px_1.5px_0px_black] text-white md:text-3xl sm:text-xl text-[1rem] font-black text-stroke-1 sm:text-stroke-2 font-oswald [word-spacing:5px] duration-500 transition-all'>
                    <Typewriter
                        options={{
                            strings: list_of_texts,
                            autoStart: true,
                            loop: true,
                            delay: 75,
                            pauseFor: 2000,
                        } as any}
                    />
                </div>
                <div className='sm:w-fit w-full mt-2'>
                    <span className='hover:text-shadow-[-0px_0px_0px_black] text-shadow-[-1px_1px_0px_black] sm:hover:text-shadow-[-0px_0px_0px_black] sm:text-shadow-[-1.5px_1.5px_0px_black] text-[#00FF00] md:text-4xl sm:text-2xl text-xl font-black text-stroke-1 sm:text-stroke-2 font-oswald [word-spacing:5px] duration-500 transition-all'>
                        <a href='mailto:vinit.2007.20@gmail.com?subject=Hello&body=Hi,%20I%20have%20some%20feedback' target="_blank" rel="noopener noreferrer">
                            vinit.2007.20@gmail.com
                        </a>
                    </span>
                </div>
                <div className='sm:mt-25 mt-10 mx-auto sm:mx-0 w-fit border border-black'>
                    <Letter href='/'>V</Letter>
                </div>
            </div>
            <div className='sm:w-[48%] w-full h-98 sm:pr-9 sm:pt-12 pt-10 sm:text-right text-center'>
                <span className='uppercase hover:text-shadow-[-0px_0px_0px_black] text-shadow-[-1px_1px_0px_black] sm:hover:text-shadow-[-0px_0px_0px_black] sm:text-shadow-[-1.5px_1.5px_0px_black] text-white md:text-3xl sm:text-xl text-[1rem] font-black text-stroke-1 sm:text-stroke-2 font-oswald [word-spacing:5px] duration-500 transition-all'>
                    vinit patil, india
                </span>
                <div className='w-full justify-center sm:justify-end flex flex-row gap-4 mt-4'>
                    <span onClick={() => handleClick("https://github.com/vinitpatil-8/DotSolve")} className="h-fit p-2 rounded-full hover:bg-[#E34AC3] bg-[#C32AA3] flex justify-center">
                        <LuGithub size={n} color='white' />
                    </span>
                    <span onClick={() => handleClick("https://instagram.com/vinitpatil_8")} className="h-fit p-2 rounded-full hover:bg-[#E34AC3] bg-[#C32AA3] flex justify-center">
                        <LuInstagram size={n} color='white' />
                    </span>
                    <span onClick={() => handleClick("https://www.linkedin.com/in/vinit-patil-085205384/")} className="h-fit p-2 rounded-full hover:bg-[#E34AC3] bg-[#C32AA3] flex justify-center">
                        <LuLinkedin size={n} color='white' fill='white' />
                    </span>
                </div>
                <div className='w-full hidden sm:flex mt-21 justify-end'>
                    <div className='w-fit border border-[#F1D624] hover:border-black'>
                        <Letter href='/'><AiFillHome /></Letter>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer