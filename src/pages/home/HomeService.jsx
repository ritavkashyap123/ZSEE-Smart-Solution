// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/grid";
// import "swiper/css/pagination";
// import { Autoplay, Pagination, Navigation } from "swiper/modules";
// import "./home.scss";
// import HomeContent from "./HomeContent";
// import { Link } from "react-router-dom";
// import { FaArrowRight } from "react-icons/fa";

// const HomeService = () => {
//   const { service } = HomeContent();

//   return (
//     <Swiper
//       spaceBetween={30}
//       slidesPerView={3}
//       autoplay={{
//         delay: 5000,
//         disableOnInteraction: false,
//       }}
//       pagination={{
//         clickable: true,
//       }}
//       navigation={true}
//       breakpoints={{
//         200: {
//           rows: 1,
//           slidesPerView: 1,
//         },
//         768: {
//           slidesPerView: 2,
//           spaceBetween: 20,
//         },
//         1024: {
//           slidesPerView: 3,
//           spaceBetween: 30,
//         },
//       }}
//       modules={[Pagination, Autoplay, Navigation]}
//       className="service"
//     >
//       {service.map((service, index) => (
//         <SwiperSlide key={index} className="border-top-black">
//           <Link to={service.link} className="Card">
//             <img src={service.image} alt="" />
//             <h2>{service.title}</h2>
//             <p>{service.para}</p>
//             <div className="explore-btn">
//               <Link to={service.link} className="black">
//                 Explore <FaArrowRight />
//               </Link>
//             </div>
//           </Link>
//         </SwiperSlide>
//       ))}
//     </Swiper>
//   );
// };

// export default HomeService;

import React from "react";
import { IoWaterOutline, IoPeopleOutline } from "react-icons/io5";
import { FaSolarPanel, FaNetworkWired } from "react-icons/fa";
import { BsLightning } from "react-icons/bs";
import { MdOutlinePrecisionManufacturing } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";





const HomeService = () => {
  return (
    <section className="what-we-offer">
      <div className="heading__fix u-center-text">
        <h3 className="heading-tertiary u-margin-bottom-small">Our services</h3>
      </div>
      <h2 className="heading-secondary u-margin-bottom-small u-center-text">
        What we do offer
      </h2>
      <p className="paragraph u-margin-bottom-big u-center-text">
        As a leader in our industry, we have always worked to develop advanced
        technology and innovative methods.
      </p>
      <div className="what-we-offer__content-box">
        <div className="what-we-offer__content">
          <h4 className="what-we-offer__title u-margin-bottom-small">
            <span className="icon-box">
              {/* <svg className="icon">
                <use xlinkHref="img/sprite.svg#crane" />
              </svg> */}
              <IoWaterOutline className="icon"/>
            </span>
            Water 
          </h4>
          <p className="paragraph">
            Whatever your construction requirements we can help you - from new
            builds to refurbishments.
          </p>
        </div>
        <div className="what-we-offer__content">
          <h4 className="what-we-offer__title u-margin-bottom-small">
            <span className="icon-box">
              {/* <svg className="icon">
                <use xlinkHref="img/sprite.svg#compass" />
              </svg> */}
              < FaSolarPanel className="icon" />
            </span>
            Solar
          </h4>
          <p className="paragraph">
            Building Design, Interior Design, Structural Design, 3D
            Visualization.
          </p>
        </div>
        <div className="what-we-offer__content">
          <h4 className="what-we-offer__title u-margin-bottom-small">
            <span className="icon-box">
              {/* <svg className="icon">
                <use xlinkHref="img/sprite.svg#electric" />
              </svg> */}
              < BsLightning className="icon" />
            </span>
            Lightning
          </h4>
          <p className="paragraph">
            We install and cable associated devices such as switches,
            distribution boards, sockets, and light fittings in a structure.
          </p>
        </div>
        <div className="what-we-offer__content">
          <h4 className="what-we-offer__title u-margin-bottom-small">
            <span className="icon-box">
              {/* <svg className="icon">
                <use xlinkHref="img/sprite.svg#view" />
              </svg> */}
              < LuNetwork className="icon" />
            </span>
            SCADA &amp; IoT
          </h4>
          <p className="paragraph">
            Hard landscaping projects create an interesting outside area to your
            property and will add to its value.
          </p>
        </div>
        <div className="what-we-offer__content">
          <h4 className="what-we-offer__title u-margin-bottom-small">
            <span className="icon-box">
              {/* <svg className="icon">
                <use xlinkHref="img/sprite.svg#mechanic" />
              </svg> */}
              <IoPeopleOutline className="icon" />
            </span>
            Consultancy
          </h4>
          <p className="paragraph">
            We design, install, commission, maintain and service a vast range of
            mechanical equipment in Private Housing, Social Housing and
            Commercial properties.
          </p>
        </div>
        <div className="what-we-offer__content">
          <h4 className="what-we-offer__title u-margin-bottom-small">
            <span className="icon-box">
              {/* <svg className="icon">
                <use xlinkHref="img/sprite.svg#roof" />
              </svg> */}
              < MdOutlinePrecisionManufacturing className="icon" />
            </span>
            Manufacturing
          </h4>
          <p className="paragraph">
            We provide effective, service-oriented roofing and consistently
            providing our clients with materials of the highest quality.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeService;
