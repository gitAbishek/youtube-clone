import { useFormContext } from "react-hook-form";
interface Props {
  defaultValue?: string;
}

const Password: React.FC<Props> = ({ defaultValue }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor="password"
        className=" text-gray-400 text-[14px]  hover:cursor-pointer"
      >
        Password
      </label>
      <input
        type="password"
        defaultValue={defaultValue}
        className="outline-none py-2 px-4 border border-[#303030] text-sm  text-gray-300 bg-[#2A2B2C] rounded-full"
        placeholder=""
        {...register("password", { required: "This field is required" })}
      />
      {errors.password && (
        <span className="text-red-500 text-sm">
          {errors.password.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default Password;
