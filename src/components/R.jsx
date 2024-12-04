import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "./R.css";
import data from "./slider.json";
import { sliderSettings } from "./Common.jsx";

const Residencies = () => {
  return (
    <div>
      <section className="r-wrapper">
        <div className="paddings innerWidth r-container">
          <div className="r-head flexColStart">
            <span className="orangeText">Best Choices</span>
            <span className="primaryText">Popular Plants</span>
          </div>

          <Swiper {...sliderSettings}>
            <SliderButtons></SliderButtons>
            {data.map((card, i) => (
              <SwiperSlide key={i}>
                <div className="r-card flexColStart">
                  <img src={card.image} alt="" />
                  <br />
                  <span className="primaryText r-name">{card.name}</span>
                  <span className="secondaryText r-detail">{card.detail}</span>
                  <br />
                  <br />
                  <br />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Residencies;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="r-button flexCenter">
      <button onClick={() => swiper.slidePrev()}>&lt;</button>
      <button onClick={() => swiper.slideNext()}>&gt;</button>
    </div>
  );
};
