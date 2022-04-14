import ReactPlayer from "react-player";

const youtubePage = () => {
  return (
    <ReactPlayer
      url="https://www.youtube.com/watch?v=u5a1CGlLUoU"
      width={800}
      height={600}
      muted={true}
      playing={true}
    />
  );
};

export default youtubePage;
