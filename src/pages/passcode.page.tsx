import BackToDashboard from "../components/common/BackToDashboard";
import PasscodeForm from "../components/passcode/PasscodeForm";

const PasscodePage = () => {
    return (
        <div className="flex justify-between">
            <div className="ml-[308px] mt-[40px]">
                <div className="flex items-center">
                <BackToDashboard />
                </div>
                <div className="mt-[100px]">
                    <PasscodeForm />
                </div>
            </div>
        </div>
    )
}

export default PasscodePage;