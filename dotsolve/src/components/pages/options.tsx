import Floating from '../headings/floating'
import Heading from '../headings/primaryHeading.tsx'
import Subtext from '../headings/secondaryHeading.tsx'
import RedSubtext from '../headings/redHeading.tsx'
import Button from '../button/primaryButton.tsx'
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import Footer from '../sections/footer.tsx'

const options = () => {
    return (
        <div className="full-body w-full min-h-dvh flex flex-col">
            <div className='h-fit w-full'>
                <div className='w-fit absolute'><Floating class='hover:text-[1.55rem] transition-all duration-300' value='click to go back' /></div>
                <div className='w-full flex justify-center mt-18'><Heading value='Options' /></div>
            </div>
            <div className='flex flex-row w-full h-fit justify-center mt-15'>
                <Subtext value='You have selected' />
                <RedSubtext value='&nbsp;Sudoku' />
            </div>
            <div className='flex flex-col h-fit w-full items-center justify-center mt-4'>
                <Floating value='Choose your preferred way' />
            </div>
            <div className='flex flex-row h-fit w-full justify-center gap-45 mt-18'>
                <div data-tooltip-id={"my-tooltip"} data-tooltip-content={"Manually Enter The Grid"}>

                    <Button value='Manual' />

                </div>

                <Tooltip id="my-tooltip" />

                <div data-tooltip-id={"my-tooltip2"} data-tooltip-content={"Upload / Capture A Picture"}>

                    <Button value='Upload' />

                </div>

                <Tooltip id="my-tooltip2" />
            </div>
            <Footer />
        </div>
    )
}

export default options
