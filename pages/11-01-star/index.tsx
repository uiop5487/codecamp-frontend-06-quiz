import { useState } from "react";
import { Rate } from "antd";

const LibraryStarPage = () => {
  const [value, setValue] = useState(3);
  const handleChange = (value: number) => {
    setValue(value);
    alert(`${value}점`);
  };

  return (
    <div>
      <Rate onChange={handleChange} value={value} />
      <div>{value}점</div>
    </div>
  );
};
// 안트디자인 개발자가 만든 onchange임 밸류가 들어오게 됨
export default LibraryStarPage;
