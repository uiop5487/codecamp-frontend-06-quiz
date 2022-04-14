export default function HofQuizPage() {
  const onClickButton = (aaa: any) => () => {
    console.log(aaa);
  };

  return (
    <div>
      <button onClick={onClickButton(123)}>버튼</button>
    </div>
  );
}
