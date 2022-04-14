import { useEffect, useState } from "react";
import Presenter from "./quiz.presenter";

export default function Container() {
  const [state, setState] = useState(0);

  useEffect(() => {
    setState((qwer) => qwer + 1);
  }, []);

  console.log(state);

  let answer = ["철수", "영희", "훈이", "맹구"];

  answer.map((_, index) => {
    console.log(`영희는 ${index}번째 칸에 들어있습니다.`);
  });

  return <>{Presenter({ child: "철수", age: 13, count: state })}</>;
}
