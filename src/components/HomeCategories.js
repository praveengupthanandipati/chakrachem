import React from "react";
import HomeCatItem from "../components/HomeCatItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Ally, Autoplay } from "swiper/modules";

const HomeCategories = () => {
  const categories = [
    {
      id: 1,
      CatTitle: "Flavones & Flavanones",
      CatDesc:
        "Chakra Chem manufactures high-quality Flavones & Flavanones chemicals for diverse industrial applications, ensuring reliability and innovation.",
      CatLink: "",
    },
    {
      id: 2,
      CatTitle: "Fine Chemicals",
      CatDesc:
        "Chakra Chem produces high-quality fine chemicals, ensuring precision, reliability, and innovation for diverse industrial applications.",
      CatLink: "",
    },
    {
      id: 3,
      CatTitle: "Coumarin - Chalcones",
      CatDesc:
        "Chakra Chem specializes in producing high-quality Coumarins and Chalcones for various industrial applications, ensuring reliability.",
      CatLink: "",
    },
    {
      id: 4,
      CatTitle: "API Intermediate",
      CatDesc:
        "Chakra Chem manufactures high-quality API Intermediates, ensuring reliability and innovation for pharmaceutical industry needs.",
      CatLink: "",
    },
    {
      id: 5,
      CatTitle: "Flavones & Flavanones",
      CatDesc:
        "Chakra Chem manufactures high-quality Flavones & Flavanones chemicals for diverse industrial applications, ensuring reliability and innovation.",
      CatLink: "",
    },
    {
      id: 6,
      CatTitle: "Fine Chemicals",
      CatDesc:
        "Chakra Chem produces high-quality fine chemicals, ensuring precision, reliability, and innovation for diverse industrial applications.",
      CatLink: "",
    },
    {
      id: 7,
      CatTitle: "Coumarin - Chalcones",
      CatDesc:
        "Chakra Chem specializes in producing high-quality Coumarins and Chalcones for various industrial applications, ensuring reliability.",
      CatLink: "",
    },
    {
      id: 8,
      CatTitle: "API Intermediate",
      CatDesc:
        "Chakra Chem manufactures high-quality API Intermediates, ensuring reliability and innovation for pharmaceutical industry needs.",
      CatLink: "",
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
        className="mySwiper CategorySwiper"
      >
        {categories.map((category, index) => (
          <SwiperSlide>
            <div className="shadow rounded mb-3 mb-lg-0">
              <HomeCatItem
                CatTitle={category.CatTitle}
                CatDesc={category.CatDesc}
                CatLink={category.CatLink}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCategories;
