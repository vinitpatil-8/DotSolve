import Heading from '../headings/primaryHeading.tsx'
import Subtext from '../headings/secondaryHeading.tsx'
import Button from '../button/primaryButton.tsx'

const notfound = () => {
    return (
        <div className="w-full h-screen full-body flex flex-col items-center justify-center gap-8">
            <Heading value="404" />
            <Subtext value="page not found" />
            <div className='mt-8'><Button value="home" /></div>
        </div>
    )
}

export default notfound
