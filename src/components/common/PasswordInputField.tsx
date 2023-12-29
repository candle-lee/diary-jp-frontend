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
    <div className="relative">
      <label
        htmlFor={inputName}
        className="block font-sans text-sm font-medium text-[#2B3674] leading-[1.09375rem] tracking-[-0.0175rem] mb-[0.56rem]"
      >
        {description}{" "}
        <span className="text-[#4318FF] text-sm font-medium leading-[1.09375rem] font-sans tracking-[-0.0175rem]">
          *
        </span>{" "}
      </label>
      <div className="flex items-center">
        <input
          type={isPasswordVisible ? "text" : "password"}
          id={inputName}
          className="rounded-2xl border border-solid border-[#E0E5F2] w-full py-3 px-6 placeholder:text-sm placeholder:font-sans placeholder:font-normal placeholder:leading-[1.09375rem] placeholder:text-[#A3AED0] placeholder:tracking-[-0.0175rem]"
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
        className="text-start text-xs italic text-red-500 mt-4"
        style={{ display: error ? "block" : "none" }}
      >
        {error}
      </p>
    </div>
  );
};

export default PasswordInputField;
