import { Link } from "react-router-dom";
import ArrowDownSVGIcon from "../../assets/icons/ArrowDownSVGIcon";

const BackToDashboard = () => {
  return (
    <Link to="/" className="flex items-center">
      <ArrowDownSVGIcon />
      <p className="text-[#A3AED0] text-sm font-medium leading-[30px] tracking-[-0.28px] ml-[6px]">
        Back to dashboard
      </p>
    </Link>
  );
};

export default BackToDashboard;
