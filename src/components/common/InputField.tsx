interface IInputItem {
    inputType: string;
    inputName: string;
    description: string;
    placeholderText: string;
    isRequired: boolean;
}

const InputField = ({inputType, inputName, description, placeholderText, isRequired}: IInputItem) => {
    return (
        <div>
            <label htmlFor={inputName} className="block text-sm font-medium text-[#2B3674] mt-[24px] mb-[13px]"> {description} </label>
            <input type={inputType} name={inputName} id={inputName} className="placeholder-[#A3AED0] w-[410px] h-[50px] flex-shrink-0 rounded-[16px] border border-secondary-grey-500 border-[#E0E5F2]" placeholder={placeholderText} required={isRequired} />
        </div>
    )
}

export default InputField;