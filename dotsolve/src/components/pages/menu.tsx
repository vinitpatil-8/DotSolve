import Heading from '../headings/primaryHeading.tsx'
import Subtext from '../headings/secondaryHeading.tsx'
import Image1 from '../../assets/connectdots.png'
import Image2 from '../../assets/sudoku.png'
import Image3 from '../../assets/queens.png'
import Card from '../misc/cards.tsx'
import { Link } from 'react-router-dom'

const menu = () => {
  return (
    <div className="w-full min-h-dvh flex flex-col mb-40">
      <div className='w-full h-fit mt-15 flex flex-col items-center gap-6 text-center'>
            <Heading value="solver menu" />
            <Subtext value="choose wisely" />
        </div>
        <div className='max-w-7xl mt-20 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20'>
            <Card heading="Sudoku" desc="Get a completely solved grid" image={Image2} link='Sudoku'/>
            <Link to='coming-soon'><Card heading="LinkedIn Queens" desc="Coming Soon..." image={Image3} link='LinkedIn-Queens'/></Link>
            <Link to='coming-soon'><Card heading="Connect The Dots" desc="Coming Soon..." image={Image1}/></Link>
        </div>
    </div>
  )
}

export default menu
