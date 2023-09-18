import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="w-full bg-orange-600 h-14 text-white flex items-center justify-between px-5">
                <div className="flex gap-4">
                    <NavLink>LOGO</NavLink>
                    <NavLink>Trang chủ</NavLink>
                    <NavLink>Sản phẩm</NavLink>
                </div>
                <div>
                    <NavLink>Giới thiệu</NavLink>
                    <NavLink>Liên hệ</NavLink>
                    <NavLink>Đăng ký</NavLink>
                    <NavLink>Đăng nhập</NavLink>
                </div>
            </div>
        </>
    );
}