import React from "react";
import { NavLink } from "react-router-dom";
import { ShoppingCartOutlined } from "@ant-design/icons";

export default function Header() {
    return (
        <>
            <div className="w-full bg-orange-600 h-14 text-white flex justify-between items-center px-5">
                <div className="flex gap-4 items-center">
                    <NavLink>LOGO</NavLink>
                    <NavLink>Trang chủ</NavLink>
                    <NavLink>Sản phẩm</NavLink>
                    <NavLink className="text-2xl">
                        <ShoppingCartOutlined className="text-2xl" />
                    </NavLink>
                </div>
                <div className="flex gap-4">
                    <NavLink>Giới thiệu</NavLink>
                    <NavLink>Liên hệ</NavLink>
                    <NavLink>Đăng ký</NavLink>
                    <NavLink>Đăng nhập</NavLink>
                </div>
            </div>
        </>
    );
}