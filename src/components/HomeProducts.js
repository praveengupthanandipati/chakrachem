import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom"; // Import Link for navigation

const HomeProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/products/list");
      if (!response.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="productItem shadow">
              <Link to={`/ProductDetail/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name} // Changed alt text to item.name for better accessibility
                  className="productItem__image"
                />
              </Link>
              <div className="productItem__casnumber">{item.cas}</div>
              <div className="productItem__productName">
                <Link to={`/ProductDetail/${item.id}`}>{item.name}</Link> {/* Changed to Link for navigation */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HomeProducts;
