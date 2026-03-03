import Heading from '../headings/primaryHeading.tsx'
import Subtext from '../headings/secondaryHeading.tsx'
import Image1 from '../../assets/connectdots.png'
import Image2 from '../../assets/sudoku.png'
import Card from '../misc/cards.tsx'

const menupage = () => {
  return (
    <div className="full-body w-full min-h-dvh flex flex-col">
        <div className='w-full h-fit mt-15 flex flex-col items-center gap-6'>
            <Heading value="menu" />
            <Subtext value="choose wisely" />
        </div>
        <div className='w-full h-fit flex flex-row gap-[calc((100vw-78rem)/2)] px-36 py-10 mt-6'>
            <Card heading="Connect The Dots" desc="Get a completely solved grid" image={Image1}/>
            <Card heading="Sudoku" desc="Get a completely solved grid" image={Image2}/>
            <Card heading="Sudoku" desc="Get a completely solved grid" image={Image2}/>
        </div>
        
    </div>
  )
}

export default menupage
