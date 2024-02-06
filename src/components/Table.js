import React, { useEffect } from 'react';
import { useFormContext } from "react-hook-form";

const data = ["S00001", "S00002", "S00003", "S00004", "S00005"];

const Table = () => {
  const { register, setValue, watch } = useFormContext();

  // 모든 체크박스를 체크, 체크해제하는 로직
  const handleSelectAll = (e) => {
    if(e.currentTarget.checked) { // selectAll 체크박스가 체크되면
      data.forEach((item) => {
        setValue(`id.${item}`, true); // 모든 체크박스의 value를 true로
      })
    } else {  // selectAll 체크박스가 체크해제되면
      data.forEach((item) => {
        setValue(`id.${item}`, false);  // 모든 체크박스의 value를 false로
      })
    }
  }
  
  useEffect(
    () => {
      if (data.every((item) => watch(`id.${item}`) === true)) {
        setValue("selectAll", true);
      } else {
        setValue("selectAll", false);
      }
    },
    data.map((item) => watch(`id.${item}`))
  );

  return (
    <>
      <div>
        <input 
          type="checkbox"
          {...register("selectAll")}  // 전체 체크, 체크해제를 담당하는 체크박스
          onChange={handleSelectAll}
        />
      </div>
      {data.map((item) => (
        <input {...register(`id.${item}`)} key={`${item}`} type="checkbox" />
      ))}
    </>
  )
}

export default Table;