import Heading from '../headings/primaryHeading.tsx'
import Subtext from '../headings/secondaryHeading.tsx'
import Button from '../button/primaryButton.tsx'
import Sidebar from '../sections/sidebar.tsx'
import { Link } from 'react-router-dom'

const Landingpage = () => {
  return (
    <div className="full-body w-screen min-h-dvh">
      <div className='w-screen min-h-dvh flex flex-col items-center justify-center gap-6'>
        <Heading value="DotSolve AI" />
        <Subtext value="your ultimate puzzle solver" />
        <div className='md:mt-12 mt-8'><Link to='/menu'><Button value="Enter" /></Link></div>
      </div>
      <Sidebar />

    </div>
  )
}

export default Landingpage
