import React, { useEffect, useState } from "react";
import HomeCatItem from "../components/HomeCatItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
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

  // Helper function to limit description to 5 sentences
  const truncateDescription = (description) => {
    if (!description) return "No description available"; // Handle null or undefined

    const sentences = description.split(/(?<=[.!?])\s+/); // Split by sentence end
    return sentences.slice(0, 2).join(" ");
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
                CatDesc={truncateDescription(category.description)}
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
