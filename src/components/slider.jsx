import Carousel from "react-bootstrap/Carousel";

function Slider() {
  return (
    <Carousel slide={true} controls={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/slide1.jpg"
          height={800}
          style={{ objectFit: "cover" }}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          height={800}
          style={{ objectFit: "cover" }}
          src="slide2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;
