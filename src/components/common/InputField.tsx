import { IInputItem } from "../../constant/interfaces";

const InputField: React.FC<IInputItem> = ({
  inputType,
  inputName,
  description,
  placeholderText,
  register,
  error,
}: IInputItem) => {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={inputName}
        className="block text-white font-sans text-xs font-normal leading-[100%]"
      >
        {description} <span className="text-[#ED2B2B]">*</span>
      </label>
      <input
        type={inputType}
        id={inputName}
        className="bg-black text-white rounded-xl border border-solid border-white w-full p-4 placeholder:font-sans placeholder:text-sm placeholder:font-normal placeholder:leading-[125%] placeholder:text-white placeholder:text-opacity-60 placeholder:tracking-[-0.0175rem]"
        placeholder={placeholderText}
        {...register(inputName)}
      />
      <p
        className="text-start text-xs font-normal leading-[124%] text-[#ED2B2B]"
        style={{ display: error ? "block" : "none" }}
      >
        {error}
      </p>
    </div>
  );
};

export default InputField;
