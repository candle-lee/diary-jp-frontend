import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setAutherStatus } from "../redux/slices/auth.slice";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuth: boolean = useAppSelector(
    (state) => state.authReducer.isAutherized
  );
  console.log(isAuth);
  return (
    <div className="sticky top-0 flex justify-between items-center bg-[#000] border-b border-white border-opacity-15 p-2 lg:px-4 lg:py-2">
      <div className="py-2">
        <p className="text-[#FFF] font-sans lg:text-2xl md:text-base sm:text-base font-normal lg:leading-6 md:leading-4 sm:leading-4">
          U-DATA
        </p>
      </div>
      {isAuth && (
        <div>
          <button
            type="button"
            className="text-[#FFF] text-sm font-normal leading-[125%] tracking-[-0.0175rem] py-1 px-3 border border-solid border-white rounded-2xl"
            onClick={() => dispatch(setAutherStatus(false))}
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
