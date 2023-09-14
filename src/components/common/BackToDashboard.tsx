import { Link } from "react-router-dom"
import Arrow_Down from "../../assets/icons/Arrow_Down";

const BackToDashboard = () => {
    return (
        <>
            <Arrow_Down />
            <Link to='/' className="text-[#A3AED0] text-sm font-medium leading-[30px] tracking-[-0.28px] ml-[6px]">Back to dashboard</Link>
        </>
    )
}

export default BackToDashboard;