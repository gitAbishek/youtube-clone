import {
  FieldValues,
  SubmitHandler,
  useForm,
  FormProvider,
} from "react-hook-form";
import UserName from "./components/UserName";
import Password from "./components/Password";
import { useContextStore } from "../../context/context.consumer";
import { useState } from "react";


const LoginForm = () => {
  const [isError, setIsError] = useState<boolean>(false);
  const methods = useForm();
  const { setIsLoggedIn } = useContextStore();


  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    if (data && data.userName === "abishek" && data.password === "abishek") {
      localStorage.setItem("isLoggedIn", "true");
      setIsLoggedIn("true");
    }else{
      setIsError(true);
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh] w-full md:w-1/2 lg:w-1/3  px-10">
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          className="flex flex-col gap-6 w-full "
        >
          <div className=" flex flex-col justify-center gap-4  border border-[#303030] rounded-md p-10   ">
            <div className="text-gray-500 font-extrabold text-center">
              Login Form
            </div>
            <UserName />
            <Password />

            {
              isError && <div className="text-red-500">Invalid credentials</div>
            }

            <button className="text-gray-200 bg-[#575656] hover:bg-[#0F0F0F] hover:border hover:border-[#303030] p-2 rounded-full mt-5 text-sm ">
              Login
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
