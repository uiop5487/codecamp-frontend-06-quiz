interface IPresenterProps {
  child: string;
  age: number;
  count: number;
}

export default function Presenter(props: IPresenterProps) {
  return (
    <div>
      {props.child}는 {props.age}살 입니다.
      <div>{props.count}</div>
    </div>
  );
}
