import Heading from "../headings/primaryHeading"
import Button from "../button/primaryButton"
import Sidebar from "../sections/sidebar"
import { Link } from "react-router-dom"

const ComingSoon = () => {
    return (
        <div className="full-body w-full min-h-dvh flex flex-col gap-25 text-center items-center justify-center">
            <Heading value="Coming soon..." />
            <div>
                <Link to='/menu'>
                <Button value="Back To Menu" />
                </Link>
            </div>
            <Sidebar />
        </div>
    )
}

export default ComingSoon
