import SectionHeading from "./SectionHeading";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import slideOne from "../assets/home/slide1.jpg";
import slideTwo from "../assets/home/slide2.jpg";
import slideThree from "../assets/home/slide3.jpg";
import slideFour from "../assets/home/slide3.jpg";
import slideFive from "../assets/home/slide4.jpg";
import { Button } from "./ui/button";

export default function Categories() {
  return (
    <div className="max-w-screen-xl mx-auto px-3 py-20">
      <div className="flex justify-center pb-10">
        <SectionHeading
          subHeading="---From 11:00am to 10:00pm---"
          heading="ORDER ONLINE"
        />
      </div>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="relative m-2">
              <img src={slideOne} alt="" className="w-full object-cover" />
              <div className="flex justify-center">
                <Button variant="outline" className="w-48 absolute bottom-10">
                  SALADS
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative m-2">
              <img src={slideTwo} alt="" className="w-full object-cover" />
              <div className="flex justify-center">
                <Button variant="outline" className="w-48 absolute bottom-10">
                  SOUPS
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative m-2">
              <img src={slideThree} alt="" className="w-full object-cover" />
              <div className="flex justify-center">
                <Button variant="outline" className="w-48 absolute bottom-10">
                  DESSERTS
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative m-2">
              <img src={slideFour} alt="" className="w-full object-cover" />
              <div className="flex justify-center">
                <Button variant="outline" className="w-48 absolute bottom-10">
                  SALADS
                </Button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative m-2">
              <img src={slideFive} alt="" className="w-full object-cover" />
              <div className="flex justify-center">
                <Button variant="outline" className="w-48 absolute bottom-10">
                  SALADS
                </Button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
