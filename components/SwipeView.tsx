import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Box } from "@mui/material";

import styles from "@/styles/Home.module.scss";
import { heroBannerItemType, heroBannerType } from "@/pages";

export default function SwipeView({
  data,
  handleSwipe,
}: {
  data: heroBannerType;
  handleSwipe: (newHeroData: heroBannerItemType) => void;
}) {
  return (
    <Box>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        speed={600}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={(swiper) => {
          console.log(swiper.activeIndex);
          handleSwipe(data[swiper.activeIndex]);
        }}
        className={styles.mySwiper}
      >
        {data.map((item, index) => (
          <SwiperSlide
            className={styles.swiperSlide}
            key={index}
            style={{ backgroundColor: item.backgroundImg.backgroundColor }}
          >
            {item.backgroundImg.src && (
              <div className={styles.imageWrapper}>
                <Image
                  src={item.backgroundImg.src}
                  alt={item.backgroundImg.alt ? item.backgroundImg.alt : ""}
                  className={styles.image}
                  fill
                ></Image>
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
