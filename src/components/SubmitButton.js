import { useFormContext } from "react-hook-form";

const SubmitButton = () => {
  const { getValues } = useFormContext();

  return (
    <button
      onClick={() => {
        alert(JSON.stringify(getValues()));
        console.log(getValues());
      }}
    >
      제출하기
    </button>
  );
};

export default SubmitButton;