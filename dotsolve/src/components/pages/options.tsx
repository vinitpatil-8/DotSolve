import Floating from '../headings/floating'
import Heading from '../headings/primaryHeading.tsx'
import Subtext from '../headings/secondaryHeading.tsx'
import RedSubtext from '../headings/redHeading.tsx'
import Dropdown from '../misc/dropdown.tsx'

const options = () => {
    return (
        <div className="full-body w-full min-h-dvh flex flex-col">
            <div className='h-fit w-full'>
                <div className='w-fit absolute'><Floating class='hover:text-[1.55rem] transition-all duration-300' value='click to go back' /></div>
                <div className='w-full flex justify-center mt-3'><Heading value='Options' /></div>
            </div>
            <div className='flex flex-row w-full h-fit justify-center mt-15'>
                <Subtext value='You have selected' />
                <RedSubtext value='&nbsp;Sudoku' />
            </div>
            <div className='flex flex-col h-fit w-full items-center justify-center mt-4'>
                <Floating value='Choose your preferred way'/>
            </div>
            <div className='flex flex-row h-fit w-full justify-center gap-40'>
                <Dropdown />
                <Dropdown />
            </div>
        </div>
    )
}

export default options
