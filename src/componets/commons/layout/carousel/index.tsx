import styled from "@emotion/styled";
import Slider from "react-slick";

const CarouselPage = () => {
  const Wrapper = styled.div`
    width: 100%;
    background-color: blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const AA = styled(Slider)`
    width: 1200px;
    height: 300px;
  `;

  const BB = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
  `;

  const Img1 = styled.img`
    width: 400px;
    margin-left: 60px;
    height: 100%;
  `;
  const Img2 = styled.img`
    width: 400px;
    margin-left: 120px;
    height: 100%;
  `;
  const Img3 = styled.img`
    width: 400px;
    margin-left: 240px;
    height: 100%;
  `;
  const Img4 = styled.img`
    width: 400px;
    margin-left: 360px;
    height: 100%;
  `;
  const Img5 = styled.img`
    width: 400px;
    margin-left: 600px;
    height: 100%;
  `;
  const Img6 = styled.img`
    width: 400px;
    margin-left: 800px;
    height: 100%;
  `;

  //   const Header2 =

  return (
    <Wrapper>
      <h2> 여기는 캐러셀</h2>
      <AA {...settings}>
        <BB>
          <Img1 src="/images/dog.jpeg" />
        </BB>
        <div>
          <Img2 src="/images/dog.jpeg" />
        </div>
        <div>
          <Img3 src="/images/dog.jpeg" />
        </div>
        <div>
          <Img4 src="/images/dog.jpeg" />
        </div>
        <div>
          <Img5 src="/images/dog.jpeg" />
        </div>
        <div>
          <Img6 src="/images/dog.jpeg" />
        </div>
      </AA>
    </Wrapper>
  );
};
export default CarouselPage;
