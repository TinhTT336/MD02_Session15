import React from 'react';
import { NavLink, NavNavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className='w-full bg-orange-600 h-14 text-white'>
                <div>
                    <NavNavLink>LOGO</NavNavLink>
                    <NavLink>Trang chủ</NavLink>
                    <NavLink>Sản phẩm</NavLink>
                </div>
                <div>
                    <NavLink>Liên hệ</NavLink>
                    <NavLink>Giới thiệu</NavLink>
                    <NavLink>Đăng ký</NavLink>
                    <NavLink>Đăng nhập</NavLink>
                </div>
            </div>
        </>
    )
}
