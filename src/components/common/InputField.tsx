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
    <div className="flex flex-col gap-[0.44rem]">
      <label
        htmlFor={inputName}
        className="block text-white font-sans text-xs font-normal leading-3"
      >
        {description} <span className="text-[#ED2B2B]">*</span>
      </label>
      <input
        type={inputType}
        id={inputName}
        className="bg-black text-white rounded-xl border border-solid border-white border-opacity-15 w-full p-4 placeholder:font-sans placeholder:text-sm placeholder:font-normal placeholder:leading-[1.09375rem] placeholder:text-white placeholder:text-opacity-60 placeholder:tracking-[-0.0175rem]"
        placeholder={placeholderText}
        {...register(inputName)}
      />
      <p
        className="text-start text-xs font-normal leading-[124%] text-[#ED2B2B] mt-2"
        style={{ display: error ? "block" : "none" }}
      >
        {error}
      </p>
    </div>
  );
};

export default InputField;
