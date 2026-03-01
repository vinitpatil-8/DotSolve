import Heading from '../headings/primaryHeading.tsx'
import Subtext from '../headings/secondaryHeading.tsx'
import Card from '../misc/cards.tsx'

const menupage = () => {
  return (
    <div className="full-body w-full min-h-dvh flex flex-col">
        <div className='w-full h-fit mt-15 flex flex-col items-center gap-6'>
            <Heading value="menu" />
            <Subtext value="choose wisely" />
        </div>
        <div className='w-full h-fit flex flex-row px-36 py-10 mt-6'>
            <Card />
        </div>
        
    </div>
  )
}

export default menupage
