import { useNavigate } from "react-router";

const BackButton: React.FC = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <button
      type="button"
      onClick={goBack}
      className="text-[#FFF] text-xs font-medium leading-[125%] tracking-[-0.0175rem]"
    >
      Back
    </button>
  );
};

export default BackButton;
