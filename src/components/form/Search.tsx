import React, { useEffect, useRef, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { useFormContext } from "react-hook-form";
import { alphabetArray } from "../../constants/alphabetArray";

interface SearchProps {
  setSearch: (value: string) => void;
  onSearchQuerySelected: (query: string) => unknown;
}

const Search: React.FC<SearchProps> = ({
  setSearch,
  onSearchQuerySelected,
}) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const { register } = useFormContext();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchValue(value);
    setSearch(value);
    if (value.length > 0) {
      setShowDropDown(true);
    }
  };

  const handleClick = () => {
    setSearch(searchValue);
  };

  const handleSelect = (data: string) => {
    if (data) {
      onSearchQuerySelected(data);
      setSearchValue(data);
    }
    setShowDropDown(false);
  };

  const handleDocumentClick = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setShowDropDown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  const filteredWords =
    searchValue &&
    alphabetArray
      .filter((item) => item.id.toLowerCase() === searchValue.toLowerCase())
      .flatMap((item) => item.words);

  return (
    <div className="w-full rounded-full flex border border-[#303030] justify-start items-center relative">
      <input
        className="relative w-full rounded-l-full outline-none text-white text-sm py-2 no-clear-button bg-[#2A2B2C] px-3"
        placeholder="Search"
        {...register("search")}
        value={searchValue}
        onChange={handleChange}
        list="filteredWordsList"
        type="search"
        autoComplete="off"
      />
      {showDropDown && (
        <div
          ref={dropdownRef}
          className="w-[90%] rounded-3xl flex flex-col justify-start absolute -bottom-40  hover:cursor-default "
        >
          {Array.isArray(filteredWords) &&
            filteredWords.length > 0 &&
            filteredWords.map((item) => (
              <div
                className="flex items-center gap-3 bg-[#212121] text-gray-300 text-sm hover:bg-gray-600 px-5 py-2  "
                onClick={() => handleSelect(item)}
                key={item}
              >
                <IoIosSearch className="text-white" />
                {item}
              </div>
            ))}
        </div>
      )}

      <button
        onClick={handleClick}
        className="w-[20%] md:w-[10%] h-9 flex items-center justify-center bg-[#2A2B2C] md:bg-[#252425] rounded-r-full"
      >
        <IoIosSearch className="font-bold text-gray-400 hover:cursor-pointer" />
      </button>
    </div>
  );
};

export default Search;
