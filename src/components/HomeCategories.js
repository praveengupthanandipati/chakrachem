import React, { useEffect, useState } from "react";
import HomeCatItem from "../components/HomeCatItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useNavigate } from "react-router-dom";

const HomeCategories = () => {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:8080/chakram/api/getAllCategories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = (categoryId) => {
    navigate(`/Products/${categoryId}`);
  };

  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 20 },
          768: { slidesPerView: 4, spaceBetween: 40 },
          1024: { slidesPerView: 4, spaceBetween: 20 },
        }}
        modules={[Pagination]}
        className="mySwiper CategorySwiper"
      >
        {categories.map((category) => (
          <SwiperSlide key={category.id}>
            <div
              className="shadow rounded mb-3 mb-lg-0"
              onClick={() => handleCategoryClick(category.id)}
            >
              <HomeCatItem
                CatTitle={category.name}
                CatDesc={category.description}
                CatLink={`/Products/${category.id}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeCategories;
