import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Ally, Autoplay } from "swiper/modules";
import Banner01 from "../assets/img/slider01.jpg";
import Banner02 from "../assets/img/slider02.jpg";
import Banner03 from "../assets/img/slider03.jpg";
import Banner04 from "../assets/img/slider04.jpg";

const HomeBanner = () => {
  const homeSliderItems = [
    {
        id:1,
        imageName:Banner01,
        smallTitle:"To Emerge as leading Indian Pharmaceutical company",
        titlePrimary:"Driving your Innovation",
        titleSecondary:"with our chemistry"
    },
    {
        id:2,
        imageName:Banner02,
        smallTitle:"To Emerge as leading Indian Pharmaceutical company",
        titlePrimary:"Driving your Innovation",
        titleSecondary:"with our chemistry"
    },
    {
        id:3,
        imageName:Banner03,
        smallTitle:"To Emerge as leading Indian Pharmaceutical company",
        titlePrimary:"Driving your Innovation",
        titleSecondary:"with our chemistry"
    },
    {
        id:4,
        imageName:Banner04,
        smallTitle:"To Emerge as leading Indian Pharmaceutical company",
        titlePrimary:"Driving your Innovation",
        titleSecondary:"with our chemistry"
    }
  ];
  return (
    <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}   
        loop={true}
        speed={2000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper HomeSwiper"
      >
        {homeSliderItems.map((item)=>(
        <SwiperSlide key={item.id}>
          <img src={item.imageName} className="img-fluid w-100" alt="" />
          <article className="slider-article">
            <h6 className="d-none d-md-block">{item.smallTitle}</h6>
            <h1 className="slidertitle">
              {item.titlePrimary} <span>{item.titleSecondary}</span>
            </h1>
          </article>
        </SwiperSlide>      
        ))}
      </Swiper>
    </div>
  );
};

export default HomeBanner;
