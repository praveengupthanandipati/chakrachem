import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Ally, Autoplay } from "swiper/modules";
import product01 from "../assets/img/products/1702205754.png";
import product02 from "../assets/img/products/1702205780.png";
import product03 from "../assets/img/products/1702205809.png";
import product04 from "../assets/img/products/1702205901.png";
import product05 from "../assets/img/products/1702205928.png";
import product06 from "../assets/img/products/1702205969.png";
import product07 from "../assets/img/products/17022053491.png";

const HomeProducts = () => {
  const ProductItem = [
    {
      id: 1,
      ImageName: product01,
      CasNumber: "615-94-1",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 2,
      ImageName: product02,
      CasNumber: "615-94-1",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 3,
      ImageName: product03,
      CasNumber: "82671-06-5",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 4,
      ImageName: product04,
      CasNumber: "608-31-1",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 5,
      ImageName: product05,
      CasNumber: "3392-97-0",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 6,
      ImageName: product06,
      CasNumber: "3430-21-5",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 7,
      ImageName: product07,
      CasNumber: "5154-00-7",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
    {
      id: 8,
      ImageName: product01,
      CasNumber: "1501185-00-7",
      ProductName: `2,4-Dimethoxybenzaldehyde`,
    },
  ];
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination]}
        className="mySwiper productSwiper"
      >
        {ProductItem.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="productItem shadow">
              <a to="">
                <img
                  src={item.ImageName}
                  alt={item.ImageName}
                  className="productItem__image"
                />
              </a>
              <div className="productItem__casnumber">{item.CasNumber}</div>
              <div className="productItem__productName">
                <a to="">{item.ProductName}</a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeProducts;
