import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import styles from "./Residencies.module.scss";
import classname from "classnames/bind";
import test from "../../assets/images/r1.png";

import data from "../../utils/slider.json";

const cx = classname.bind(styles);

const Residencies = () => {
    return (
        <section className={cx("residencies-wrapper")}>
            <div
                className={cx(
                    "residencies-container",
                    "paddings",
                    "inner-width"
                )}
            >
              <div className={cx('residencies__head', 'flex-col-start')}>
                  <h2 className={cx('orange-text')}>Best Choices</h2>
                  <h1 className={cx('primary-text')}>Popular Residencies</h1>
              </div>

              <Swiper>
                  {
                    data.map((card, index) => (
                      <SwiperSlide key={index}>
                        <div className={cx('residency', 'flex-col-start')}>
                          <img src={card.image} alt="residency-img" className={cx('residency-img')} />
                          <div className={cx('residency-price', 'secondary-text')}>
                            <span style={{color:"orange"}}>$</span>
                            <span>{card.price}</span>                          
                          </div>
                          <h4 className={cx('residency-name', 'primary-text')}>{card.name}</h4>
                          <p className={cx('residency-detail', 'secondary-text')}>{card.detail}</p>
                        </div>
                      </SwiperSlide>
                    ))
                  }
              </Swiper>
            </div>
        </section>
    );
};

export default Residencies;
