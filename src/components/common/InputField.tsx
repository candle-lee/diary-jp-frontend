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
    <div>
      <label
        htmlFor={inputName}
        className="block font-sans text-sm font-medium text-[#2B3674] leading-[1.09375rem] tracking-[-0.0175rem] mb-[0.56rem]"
      >
        {description}{" "}
        <span className="text-[#4318FF] text-sm font-medium leading-[1.09375rem] font-sans tracking-[-0.0175rem]">
          *
        </span>{" "}
      </label>
      <input
        type={inputType}
        id={inputName}
        className="rounded-2xl border border-solid border-[#E0E5F2] w-full py-3 px-6 placeholder:text-sm placeholder:font-sans placeholder:font-normal placeholder:leading-[1.09375rem] placeholder:text-[#A3AED0] placeholder:tracking-[-0.0175rem]"
        placeholder={placeholderText}
        {...register(inputName)}
      />
      <p
        className="text-start text-xs italic text-red-500 mt-4"
        style={{ display: error ? "block" : "none" }}
      >
        {error}
      </p>
    </div>
  );
};

export default InputField;
