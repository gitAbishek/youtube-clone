import { useFormContext } from "react-hook-form";
interface Props {
  defaultValue?: string;
}

const UserName: React.FC<Props> = ({ defaultValue }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor="userName"
        className=" text-gray-400 text-[14px]  hover:cursor-pointer"
      >
        UserName
      </label>
      <input
        type="text"
        defaultValue={defaultValue}
        className="outline-none py-2 px-4 border border-[#303030] text-sm  text-gray-300 bg-[#2A2B2C] rounded-full"
        placeholder=""
        {...register("userName", { required: "This field is required" })}
      />
      {errors.userName && (
        <span className="text-red-500 text-sm">
          {errors.userName.message?.toString()}
        </span>
      )}
    </div>
  );
};

export default UserName;
