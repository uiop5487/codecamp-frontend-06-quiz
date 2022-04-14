import DaumPostcode from "react-daum-postcode";

const PostCodePage = () => {
  const handleComplete = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <DaumPostcode onComplete={handleComplete} />
    </div>
  );
};

export default PostCodePage;
