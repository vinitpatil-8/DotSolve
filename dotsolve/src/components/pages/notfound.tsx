import Heading from '../headings/primaryHeading.tsx'
import Subtext from '../headings/secondaryHeading.tsx'
import Button from '../button/primaryButton.tsx'
import { Link } from 'react-router-dom'

const Notfound = () => {
    return (
        <div className="w-full h-screen full-body flex flex-col items-center justify-center gap-8">
            <Heading value="404" />
            <Subtext value="page not found" />
            <div className='mt-8'><Link to='/'><Button value="home" /></Link></div>
        </div>
    )
}

export default Notfound
