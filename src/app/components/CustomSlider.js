"use client";
import { useState, useEffect } from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import { styled } from "@mui/system";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { useSwiper } from "swiper/react";
import Image from "next/image";
import "swiper/css";

const CustomSlider = ({ images }) => {
  const swiper = useSwiper();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // nextSlide();
    }, 7000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <SliderContainer>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        loop={true}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          modifierClass: "swiper-pagination-custom",
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
        <DotsContainer>
          {/* {images.map((_, index) => (
            <Dot
              key={index}
              active={currentIndex === index ? "true" : "false"}
              onClick={() => goToSlide(index)}
            />
          ))} */}
          <Dot className="swiper-pagination" />
        </DotsContainer>
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

const DotsContainer = styled(Box)({
  position: "absolute",
  bottom: "15px",
  display: "flex",
  justifyContent: "center",
  width: "100%",
  zIndex: 2,
});

const Dot = styled(Box)(({ active }) => ({
  // height: "10px",
  // width: "10px",
  // backgroundColor: active === "true" ? "#717171" : "#bbb",
  // borderRadius: "50%",
  // margin: "0 5px",
  // cursor: "pointer",
  // transition: "background-color 0.3s ease",
  "&.swiper-pagination-custom .swiper-pagination-bullet": {
    background: "#000",
    width: "12px",
    height: "12px",
    opacity: "1",
  },
  "&.swiper-pagination-custom .swiper-pagination-bullet-active": {
    background: "#ff0000",
    width: "16px",
    height: "16px",
  },
}));

export default CustomSlider;
