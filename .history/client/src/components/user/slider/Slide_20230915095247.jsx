import React from 'react';
import Slider from "react-slick";
import "~slick-carousel/slick/slick.css";
import "~slick-carousel/slick/slick-theme.css";

export default function Slide() {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div>
                <div>
                    <h2>Fade</h2>
                    <Slider {...settings}>
                        <div>
                            <img src={"https://haycafe.vn/wp-content/uploads/2021/12/Hinh-nen-powerpoint-de-thuong-cute.jpg"} />
                        </div>
                        <div>
                            <img src="https://khoinguonsangtao.vn/wp-content/uploads/2022/09/anh-nen-powerpoint-hoc-tap.jpg" />
                        </div>
                        <div>
                            <img src="https://thuthuatphanmem.vn/uploads/2018/06/18/hinh-nen-slide-dep-1_035347328.jpg" />
                        </div>
                        <div>
                            <img src="https://mega.com.vn/media/news/2007_background-lam-slide-de-thuong10.jpg" />
                        </div>
                    </Slider>
                </div>
            </div>

        </>
    )
}
