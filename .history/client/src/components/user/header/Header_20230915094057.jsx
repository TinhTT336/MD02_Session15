import React from 'react'
import { Link, NavLink } from "react-router-dom"
import { KeyOutlined, LogoutOutlined, ShoppingCartOutlined, UserAddOutlined } from "@ant-design/icons"
import { Button, Dropdown } from 'antd';

export default function Header() {
    const items = [
        {
            key: '1',
            label: (
                <Link to="/profile" >
                    <UserAddOutlined className='mr-2' /> Thông tin tài khoản
                </Link>
            ),
        },
        {
            key: '2',
            label: (
                <Link to="/change-password" >
                    <KeyOutlined className='mr-2' />  Đổi mật khẩu
                </Link>
            ),
        },
        {
            key: '3',
            label: (
                <Link >
                    <LogoutOutlined className='mr-2' />  Đăng xuất
                </Link>
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
                        <Button className='border-none shadow-none text-white hover:text-white'>
                            <div className='flex items-center gap-2 hover:text-white'>
                                <img className='rounded-full'
                                    height={25} width={25} src="https://yt3.googleusercontent.com/-CFTJHU7fEWb7BYEb6Jh9gm1EpetvVGQqtof0Rbh-VQRIznYYKJxCaqv_9HeBcmJmIsp2vOO9JU=s900-c-k-c0x00ffffff-no-rj" alt="" />
                                Trần Thị Tính
                            </div>

                        </Button>
                    </Dropdown>
                </div>
            </div>
        </>
    )
}