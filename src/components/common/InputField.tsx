import { Label, TextInput } from "flowbite-react";
import { IInputItem } from "../../constant/interfaces";

const InputField = ({
  inputType,
  inputName,
  description,
  placeholderText,
  register,
  error,
}: IInputItem) => {
  return (
    <div>
      <Label
        htmlFor={inputName}
        className="block text-sm font-medium text-[#2B3674] mt-[24px] mb-[13px]"
        value={description}
      />
      <TextInput
        type={inputType}
        id={inputName}
        className="placeholder-[#A3AED0] w-[410px] h-full flex-shrink-0 rounded-[16px] border border-secondary-grey-500 border-[#E0E5F2]"
        placeholder={placeholderText}
        {...register(inputName)}
      />
      {<p className="text-start text-xs italic text-red-500 mt-2"> {error}</p>}
    </div>
  );
};

export default InputField;
