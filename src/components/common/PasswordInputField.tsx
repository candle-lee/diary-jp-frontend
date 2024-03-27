import { IInputItem } from "../../constant/interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEyeSlash, faEye } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const PasswordInputField: React.FC<IInputItem> = ({
  inputName,
  description,
  placeholderText,
  register,
  error,
}: IInputItem) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  return (
    <div className="flex flex-col gap-[0.44rem] relative">
      <label
        htmlFor={inputName}
        className="block text-white font-sans text-xs font-normal leading-3"
      >
        {description} <span className="text-[#ED2B2B]">*</span>
      </label>
      <div className="flex items-center">
        <input
          type={isPasswordVisible ? "text" : "password"}
          id={inputName}
          className="bg-black text-white rounded-xl border border-solid border-white w-full p-4 placeholder:font-sans placeholder:text-sm placeholder:font-normal placeholder:leading-[125%] placeholder:text-white placeholder:text-opacity-60 placeholder:tracking-[-0.0175rem]"
          placeholder={placeholderText}
          {...register(inputName)}
        />
        <FontAwesomeIcon
          icon={isPasswordVisible ? faEyeSlash : faEye}
          className="text-[#A3AED0] cursor-pointer absolute right-5"
          onClick={togglePasswordVisibility}
        />
      </div>
      <p
        className="text-start text-xs font-normal leading-[124%] text-[#ED2B2B]"
        style={{ display: error ? "block" : "none" }}
      >
        {error}
      </p>
    </div>
  );
};

export default PasswordInputField;
