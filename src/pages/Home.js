import React from "react";
import HomeBanner from "../components/HomeBanner";
import HomeHighlet from "../components/HomeHighlet";
import HomeCatItem from "../components/HomeCatItem";
import HomeProducts from "../components/HomeProducts";
import HomeAboutImg from "../assets/img/abouthome.jpg";

const Home = () => {
  let homeTitle = "ABOUT CHAKRACHEM";
  let HomeAboutDesc =
    "Our purpose is to solve the toughest problems in life science by collaborating with the global scientific community. ChakraChem is specialized in the process development and the manufacturing of complex organic molecules as active pharmaceutical ingredients (APIs), as well as innovative products for research purposes.";

  const cultureItem = [
    {
      id: 1,
      IconName: "icon-lightbulb",
      CultureTitle: "OUR VISION",
      CultureDesc:
        " To Emerge as leading Indian Pharmaceutical company meeting global healthcare needs by providing superior research driven value to our customers through innovation, focus & specialization.",
    },
    {
      id: 2,
      IconName: "icon-united",
      CultureTitle: "Our MISSION",
      CultureDesc:
        "Develop, produce & deliver high quality pharmaceutical active ingredients & advanced drug intermediates for the global pharmaceutical industry.",
    },
    {
      id: 3,
      IconName: "icon-lightbulb",
      CultureTitle: "QUALITY POLICY",
      CultureDesc:
        "Chakrachem committed to maintian best Quality standards in Research & Development and Manufacturing the Speciality chemical products through periodic reviews.",
    },
  ];
  return (
    <div>
      <main>
        <HomeBanner />
        {/* home about section */}
        <section className="homeAbout">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="aboutHighlates">
                  <div className="d-flex justify-content-between">
                    <div className="aboutHighlates__column text-center">
                      <HomeHighlet Number="500" Title="Happy Customers" />
                    </div>
                    <div className="aboutHighlates__column text-center">
                      <HomeHighlet Number="700" Title="Shipping hours" />
                    </div>
                    <div className="aboutHighlates__column text-center">
                      <HomeHighlet Number="120" Title="Completed Projects" />
                    </div>
                  </div>
                </div>
                <img
                  src={HomeAboutImg}
                  alt=""
                  className="img-fluid w-100 d-none d-md-block"
                />
              </div>
              <div className="col-md-6 rightArticle align-self-center">
                <h6 className="text-uppercase">{homeTitle}</h6>
                <h2 className="py-2">
                  We are experts in providing
                  <span> Advanced organic chemicals.</span>
                </h2>
                <p className="pb-3">{HomeAboutDesc}</p>
                <p>
                  <a to="" className="button green-btn float-start">
                    Read More About Chakra Chem
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Caregories */}
        <div className="HomeCategories">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <div className="shadow rounded">
                  <HomeCatItem
                    CatTitle="Flavones & Flavanones"
                    CatDesc="Chakra Chem manufactures high-quality Flavones & Flavanones chemicals for diverse industrial applications, ensuring reliability and innovation."
                    CatLink=""
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="shadow rounded">
                  <HomeCatItem
                    CatTitle="Fine Chemicals"
                    CatDesc="Chakra Chem produces high-quality fine chemicals, ensuring precision, reliability, and innovation for diverse industrial applications."
                    CatLink=""
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="shadow rounded">
                  <HomeCatItem
                    CatTitle="Coumarin - Chalcones"
                    CatDesc="Chakra Chem specializes in producing high-quality Coumarins and Chalcones for various industrial applications, ensuring reliability."
                    CatLink=""
                  />
                </div>
              </div>
              <div className="col-md-3">
                <div className="shadow rounded">
                  <HomeCatItem
                    CatTitle="API Intermediate"
                    CatDesc="Chakra Chem manufactures high-quality API Intermediates, ensuring reliability and innovation for pharmaceutical industry needs. "
                    CatLink=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Culture */}
        <section className="ourCulture">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <div className="cultureSection">
                  <h6 class="font-semibold text-upperase">OUR CULTURE</h6>
                  <h3 class="font-bold pb-3">
                    Every month we do new experiments
                  </h3>
                  {cultureItem.map((item) => (
                    <div key={item.id} className="cultureColumn d-md-flex">
                      <div class="cultureColumn__icon">
                        <span class={`${item.IconName} icomoon`}></span>
                      </div>
                      <div class="cultureColumn__article">
                        <h6>{item.CultureTitle}</h6>
                        <p>{item.CultureDesc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Poducts List */}
        <section class="PopularProducts">
          <div className="container">
            <div className="title-section">
              <h6 class="font-semibold text-upperase">POPULAR PRODUCTS</h6>
              <h3 class="font-bold pb-3">High Demand Speciality Chemicals</h3>
            </div>
            <div className="slider-products">
              <HomeProducts />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
