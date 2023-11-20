import { SearchSVGIcon } from "../../icons";

const SearchInput: React.FC = () => {
  return (
    <form>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <SearchSVGIcon />
        </div>
        <input
          type="search"
          id="default-search"
          className=" rounded-[30px] block w-full pl-10 text-gray-900 border border-none bg-[#F4F7FE] focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search"
          required
        />
      </div>
    </form>
  );
};

export default SearchInput;
