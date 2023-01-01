import React from "react";
import "./testimonials.css";
import Img from "../../assets/Avatar.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const data = [
  {
    avatar: Img,
    name: "Oh Sehun",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum quod necessitatibus sed, nihil distinctio, ipsum consequuntur nemo molestias ea earum at dignissimos eligendi nam eaque ipsa optio vero quisquam!",
  },
  {
    avatar: Img,
    name: "Park Chanyeol",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum quod necessitatibus sed, nihil distinctio, ipsum consequuntur nemo molestias ea earum at dignissimos eligendi nam eaque ipsa optio vero quisquam!",
  },
  {
    avatar: Img,
    name: "Byun Baekhyun",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum quod necessitatibus sed, nihil distinctio, ipsum consequuntur nemo molestias ea earum at dignissimos eligendi nam eaque ipsa optio vero quisquam!",
  },
  {
    avatar: Img,
    name: "Kim kai",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit dolorum quod necessitatibus sed, nihil distinctio, ipsum consequuntur nemo molestias ea earum at dignissimos eligendi nam eaque ipsa optio vero quisquam!",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <Swiper className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="avatar" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
