import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import './index.css';
const Slide = () => {

    return (
        <div className="container-fluid mb-4 container-slide">
            <div className="row">
                <div className="col-12 px-0 header">
                    <Swiper
                        modules={[Pagination]}
                        spaceBetween={0}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                    >
                        <SwiperSlide>
                            <img src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY" alt="img" className="img-fluid"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY" alt="img" className="img-fluid"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY" alt="img" className="img-fluid"/>
                        </SwiperSlide>
                        <SwiperSlide>
                            <img src="https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY" alt="img" className="img-fluid"/>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}
export default Slide;