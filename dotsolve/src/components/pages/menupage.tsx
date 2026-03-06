import Heading from '../headings/primaryHeading.tsx'
import Subtext from '../headings/secondaryHeading.tsx'
import Image1 from '../../assets/connectdots.png'
import Image2 from '../../assets/sudoku.png'
import Image3 from '../../assets/nonogram.png'
import Image4 from '../../assets/kakuro.png'
import Image5 from '../../assets/queens.png'
import Image6 from '../../assets/tango.png'
import Card from '../misc/cards.tsx'
import Footer from '../sections/footer.tsx'
// import Sidebar from '../misc/sidebar.tsx'

const menupage = () => {
  return (
    <div className="full-body w-full min-h-dvh flex flex-col">
        <div className='w-full h-fit mt-15 flex flex-col items-center gap-6'>
            <Heading value="menu" />
            <Subtext value="choose wisely" />
        </div>
        <div className='max-w-7xl mt-20 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20'>
            <Card heading="Connect The Dots" desc="Get a completely solved grid" image={Image1}/>
            <Card heading="Sudoku" desc="Get a completely solved grid" image={Image2}/>
            <Card heading="LinkedIn Tango" desc="Get a completely solved grid" image={Image6}/>
            <Card heading="LinkedIn Queens" desc="Get a completely solved grid" image={Image5}/>
            <Card heading="Kakuro" desc="Get a completely solved grid" image={Image4}/>
            <Card heading="Nonogram" desc="Get a completely solved grid" image={Image3}/>
        </div>
        <Footer />
        {/* <Sidebar /> */}
    </div>
  )
}

export default menupage
