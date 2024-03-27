import React from 'react';
import { useNavigate } from "react-router-dom";

interface BackButtonProps {
  label: string;
}

const BackButton: React.FC<BackButtonProps> = ({ label }) => {
  const navigate = useNavigate();
  
  const goBack = () => {
    navigate(-1);
  };
  
  return (
    <button
      type="button"
      onClick={goBack}
      className="text-[#FFF] text-xs font-medium leading-[100%] tracking-[-0.0175rem] flex justify-start"
    >
      {label}
    </button>
  );
};

export default BackButton;
