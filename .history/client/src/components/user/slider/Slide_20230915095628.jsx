import React from 'react';
import Slider from "react-slick";


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
                    {/* <h2>Fade</h2> */}
                    <Slider {...settings}>
                        <div>
                            <img width={"100vw"} height={400} src={"https://haycafe.vn/wp-content/uploads/2021/12/Hinh-nen-powerpoint-de-thuong-cute.jpg"} />
                        </div>
                        <div>
                            <img width={"100vw"} height={400} src="https://khoinguonsangtao.vn/wp-content/uploads/2022/09/anh-nen-powerpoint-hoc-tap.jpg" />
                        </div>
                        <div>
                            <img width={"100vw"} height={400} src="https://thuthuatphanmem.vn/uploads/2018/06/18/hinh-nen-slide-dep-1_035347328.jpg" />
                        </div>
                        <div>
                            <img width={"100vw"} height={400} src="https://isinhvien.com/wp-content/uploads/t-leech-pro/2022/06/22/isinhvien-175-ht9-1024x682.jpg" />
                        </div>
                    </Slider>
                </div>
            </div>

        </>
    )
}