import { useNavigate } from "react-router-dom"
import Arrow_Down from "../../assets/icons/Arrow_Down";

const BackToDashboard = () => {
    const navigate = useNavigate();
    return (
        <>
            <Arrow_Down />
            <a href="" onClick={() => {navigate('/')}} className="text-[#A3AED0] text-sm font-medium leading-[30px] tracking-[-0.28px] ml-[6px]">Back to dashboard</a>
        </>
    )
}

export default BackToDashboard;