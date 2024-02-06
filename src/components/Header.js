import { useFormContext } from "react-hook-form";
import SubmitButton from "./SubmitButton";

const Header = () => {
  const { register } = useFormContext();

  return (
    <>
      <input {...register("input1")} placeholder="input1" />
      <input {...register("input2")} placeholder="input2" />
      <button
        type="button"
        onClick={() => {
          alert("다른행동");
          // console.log("다른행동");
        }}
      >
        다른버튼
      </button>
      <SubmitButton />
    </>
  )
}

export default Header;