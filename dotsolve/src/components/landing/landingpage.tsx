import Heading from '../headings/primaryHeading.tsx'
import Subtext from '../headings/secondaryHeading.tsx'
import Button from '../button/primaryButton.tsx'
import Sidebar from '../misc/sidebar.tsx'

const landingpage = () => {
  return (
    <div className="full-body w-screen min-h-dvh">
      <div className='w-screen min-h-dvh flex flex-col items-center justify-center gap-6'>
        <Heading value="DotSolve AI" />
        <Subtext value="your ultimate puzzle solver" />
        <div className='md:mt-12 mt-8'><Button value="Enter" /></div>
      </div>
      <Sidebar />

    </div>
  )
}

export default landingpage
