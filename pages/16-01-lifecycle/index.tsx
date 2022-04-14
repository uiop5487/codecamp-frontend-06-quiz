import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";

export default function LifecyclePage() {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [isChange, setIsChange] = useState(false);

  const onClickChange = () => {
    setIsChange((prev) => !prev);
  };

  const onClickMove = () => {
    router.push("/");
  };

  useEffect(() => {
    console.log("마운트");
    inputRef.current?.focus();
    return () => {
      alert("bye~~");
    };
  }, []);

  useEffect(() => {
    alert("Changed!!");
  }, [isChange]);

  console.log("렌더");
  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={onClickChange}>변경</button>
      <button onClick={onClickMove}>이동</button>
    </div>
  );
}
