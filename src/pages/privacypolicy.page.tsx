import BackButton from "../components/common/BackButton";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-[#000] flex justify-center h-full">
      <div className="w-full max-w-3xl px-6 py-[4.75rem]">
        <div className="flex flex-col gap-14">
          <div>
            <BackButton />
            <p className="text-white text-4xl font-bold leading-[125%] mt-8">
              Privacy Policy
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
