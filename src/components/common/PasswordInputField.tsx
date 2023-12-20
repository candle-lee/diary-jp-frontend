import { Label } from "flowbite-react";
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
      <Label
        htmlFor={inputName}
        className="block text-sm font-medium text-[#2B3674] mb-3"
        value={description}
      />
      <div className="flex items-center">
        <input
          type={isPasswordVisible ? "text" : "password"}
          id={inputName}
          className="w-full bg-gray-50 block border border-gray-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:border-cyan-500 dark:focus:ring-cyan-500 dark:placeholder-gray-400 dark:text-white disabled:cursor-not-allowed disabled:opacity-50 focus:border-cyan-500 focus:ring-cyan-500 p-2.5 rounded-lg text-gray-900 text-sm"
          placeholder={placeholderText}
          {...register(inputName)}
        />
        <FontAwesomeIcon
          icon={isPasswordVisible ? faEyeSlash : faEye}
          className="text-[#A3AED0] cursor-pointer absolute right-3"
          onClick={togglePasswordVisibility}
        />
      </div>
      {error && (
        <p className="text-start text-xs italic text-red-500 my-4">{error}</p>
      )}
    </div>
  );
};

export default PasswordInputField;
