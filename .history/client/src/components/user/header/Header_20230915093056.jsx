import React from 'react'
import { NavLink } from "react-router-dom"
import { ShoppingCartOutlined } from "@ant-design/icons"
import { Button, Dropdown } from 'antd';

export default function Header() {
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    Thông tin tài khoản
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    Lịch sử mua hàng
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    Đăng xuất
                </a>
            ),
        },
    ];
    return (
        <>
            <div className='w-full bg-orange-600 h-14 text-white flex items-center justify-between px-5'>
                <div className='flex gap-4 items-center'>
                    <NavLink to="/">LOGO</NavLink>
                    <NavLink to="/">Trang chủ</NavLink>
                    <NavLink to="/list-product">Sản Phẩm</NavLink>
                    <NavLink to="/cart">
                        <ShoppingCartOutlined className='text-2xl relative' />
                        <span className='bg-white px-2 rounded-xl text-black absolute'></span>
                    </NavLink>
                </div>
                <div className='flex gap-4 items-center'>
                    <NavLink to="/about">Giới thiệu</NavLink>
                    <NavLink to="/contact">Liên hệ</NavLink>
                    <NavLink to="/register">Đăng ký</NavLink>
                    <NavLink to="/login">Đăng nhập</NavLink>
                    <Dropdown
                        menu={{
                            items,
                        }}
                        placement="bottomLeft"
                        arrow
                    >
                        <Button>
                            <img src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj" alt="" />
                            Trần Thị Tính
                        </Button>
                    </Dropdown>
                </div>
            </div>
        </>
    )
}