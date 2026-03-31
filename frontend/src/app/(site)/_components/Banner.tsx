import styles from './Banner.module.css'
import 'swiper/css/pagination'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/scrollbar'

import { Swiper, SwiperSlide } from 'swiper/react'
import { register } from 'swiper/element/bundle'

register()

export default function Banner() {
  return (
    <div className={styles.banner}>
      <Swiper slidesPerView={1} pagination={{ clickable: true}} loop={true} autoplay={{delay: 3000}} speed={1500}>
        <SwiperSlide>
          <img className={styles.image} src="/assets/images/Banner Cruzeiro.jpg" alt="Slide 1" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.image} src="/assets/images/Slide 2.jpg" alt="Slide 2" />
        </SwiperSlide>
        <SwiperSlide>
          <img className={styles.image} src="/assets/images/Slide 3.jpg" alt="Slide 3" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
