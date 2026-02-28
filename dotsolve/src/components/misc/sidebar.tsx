import { LuGithub } from "react-icons/lu";
import { LuLinkedin } from "react-icons/lu";
import { LuInstagram } from "react-icons/lu";

const handleClick = (value: string) => {
    window.open(value, "_blank")
}

const totalScreenWidth = screen.width;
let n = 25
if(totalScreenWidth >= 640){
    n = 30
}


const sidebar = () => {
  return (
    <div className="bg-white md:w-14 md:h-38 sm:w-38 sm:h-14 w-30 h-11 bottom-0 absolute md:top-[calc((100vh-9.5rem)/2)] right-0 flex flex-row md:flex-col gap-3.5 items-center md:justify-center cursor-pointer">
        <span onClick={() => handleClick("https://github.com/vinitpatil-8/DotSolve")} className="w-full h-fit flex justify-center">
            <LuGithub size={n}/>
        </span>
        <span onClick={() => handleClick("https://www.linkedin.com/in/vinit-patil-085205384/")} className="w-full h-fit flex justify-center">
            <LuLinkedin size={n}/>
        </span>
        <span onClick={() => handleClick("https://instagram.com/vinitpatil_8")} className="w-full h-fit flex justify-center">
            <LuInstagram size={n}/>
        </span>
    </div>
  )
}

export default sidebar
