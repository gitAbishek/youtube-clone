import { RxHamburgerMenu } from "react-icons/rx";
import { GrYoutube } from "react-icons/gr";
import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import Search from "../form/Search";
import { useNavigate } from "react-router-dom";


interface Props {
  onSearchQuerySelected: (query: string) => unknown;
}
const Navbar = ({ onSearchQuerySelected }: Props) => {
  const methods = useForm();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    console.log("hello");
    navigate("/");
  }

  const onSubmit =  () => {
    onSearchQuerySelected(query)
  };

  return (
    <div className="flex justify-between items-center gap-5 py-3 px-2 md:px-10 shadow-xl bg-[#0F0F0F] sticky top-0 z-50">
      <div className="flex items-center gap-10">
        <RxHamburgerMenu className="text-white text-3xl font-thin hover:cursor-pointer hidden md:block" />
        <div className="flex items-center  gap-2">
          <GrYoutube className="text-red-800 text-2xl md:text-3xl hover:cursor-pointer" onClick={handleClickNavigate} />
          <div className="text-white font-medium text-xl md:text-2xl font-sans">
            YouTube
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <Search setSearch={setQuery} onSearchQuerySelected={onSearchQuerySelected} />
          </form>
        </FormProvider>
      </div>
      <div>
        <div className="h-6 md:h-8 w-6 md:w-8 bg-red-800 rounded-full text-white flex justify-center items-center text-xs md:text-sm font-medium">
          A
        </div>
      </div>
    </div>
  );
};

export default Navbar;
