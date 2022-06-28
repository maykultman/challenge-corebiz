import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Item from './Item';

const Loop = ({products, addProduct}) => {

    let items = [];
    
    const breakpoints={
        500: {
            width: 500,
            slidesPerView: 2,
            spaceBetween : 30,
            allowTouchMove: true,
            navigation: false
        },
        768: {
          width: 768,
          slidesPerView: 3,
          spaceBetween : 30,
          allowTouchMove: true,
          navigation: false
        },
        992: {
            width: 992,
            slidesPerView: 4,
            spaceBetween : 30,
            allowTouchMove: false,
            navigation: true
          },
        1200: {
            width: 1200,
            slidesPerView: 4,
            spaceBetween : 30,
            allowTouchMove: false,
            navigation: true
        }
    }
    
    products.forEach( (e,index) => {
        items.push( <SwiperSlide key={index}><Item key={e.productId} product={e} addProduct={addProduct} /></SwiperSlide> )
    });

    return (
        <div className="loop">
            <Swiper 
                modules={[Navigation, Pagination]} 
                breakpoints={breakpoints}
                scrollbar={{ draggable: false }}
                pagination={{ clickable: true }}
            >
                {items}
            </Swiper> 
        </div>
    )
}
export default Loop;