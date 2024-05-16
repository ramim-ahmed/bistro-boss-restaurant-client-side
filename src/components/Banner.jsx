import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import slideOne from "../assets/home/01.jpg";
import slideTwo from "../assets/home/02.jpg";
import slideThree from "../assets/home/03.png";
import slideFour from "../assets/home/04.jpg";
import slideFive from "../assets/home/05.png";
import slideSix from "../assets/home/06.png";
export default function Banner() {
  return (
    <div className="">
      <Carousel centerMode>
        <div>
          <img src={slideOne} />
        </div>
        <div>
          <img src={slideTwo} />
        </div>
        <div>
          <img src={slideThree} />
        </div>
        <div>
          <img src={slideFour} />
        </div>
        <div>
          <img src={slideFive} />
        </div>
        <div>
          <img src={slideSix} />
        </div>
      </Carousel>
    </div>
  );
}
