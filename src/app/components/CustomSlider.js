"use client";
// import { useEffect, useRef } from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
// import { useSwiper } from "swiper/react";
import Image from "next/image";
import "swiper/css";


const CustomSlider = ({ images }) => {
  // const matches = useMediaQuery("(min-width: 600px)");
  return (
    <SliderContainer>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          clickable: true,
          el: ".swiper-pagination",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          renderBullet: (index, className) => {
            return `<div class="${className}"></div>`;
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSlideNextTransitionEnd={() => console.log("transition next end")}
        onSwiper={(swiper) => console.log(swiper)}
        style={{ width: "100%", height: "100%" }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Slide>
                <Image
                  src={image}
                  alt={`photo-${index}`}
                  width={2000}
                  height={2000}
                  style={{ width: "100%", height: "100%" }}
                />
              </Slide>
            </SwiperSlide>
          );
        })}
        <ArrowButton className="swiper-button-prev" style={{ left: "15px" }}>
          <ArrowLeft />
        </ArrowButton>
        <ArrowButton className="swiper-button-next" style={{ right: "15px" }}>
          <ArrowRight />
        </ArrowButton>

        <Dot className="swiper-pagination" />
      </Swiper>
    </SliderContainer>
  );
};

const SliderContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "550px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  [theme.breakpoints.down("md")]: {
    height: "400px",
  },
}));

const Slide = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const ArrowButton = styled(Button)({
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "transparent",
  color: "#fff",
  border: "2px solid #fff",
  borderRadius: "50%",
  padding: "0",
  minWidth: "auto",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  zIndex: 2,
});

const Dot = styled(Box)(({ active }) => ({
  "&.swiper-pagination": {
    position: "absolute",
    bottom: "15px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    gap: "30px",
  },
  "&.swiper-pagination .swiper-pagination-bullet": {
    padding: "5px",
    borderRadius: "50%",
    width: "2px",
    height: "2px",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    lineHeight: "30px",
    fontSize: "12px",
    color: "#000",
    opacity: 1,
    backgroundColor: "gray",
  },
  "&&.swiper-pagination .swiper-pagination-bullet-active": {
    background: "#ffffff",
    width: "10px",
    height: "10px",
  },
}));

export default CustomSlider;
