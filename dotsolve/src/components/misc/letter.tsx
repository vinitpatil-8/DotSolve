type LetterProps = {
  children: React.ReactNode
  href?: string
}

const Letter = ({ children, href }: LetterProps) => {
  return (
    <div className="cursor-pointer flex text-7xl text-stroke-1 uppercase font-black w-20 h-20 justify-center text-white items-center bg-[#F1D624] text-shadow-[-1px_1px_0px_black] hover:text-shadow-[-2px_2px_0px_black] sm:text-shadow-[-2px_2px_0px_black] sm:hover:text-shadow-[-4px_4px_0px_black] duration-500 transition-all">
        <a href={href} target="_blank" rel="noopener noreferrer">{children}</a>
    </div>
  )
}

export default Letter