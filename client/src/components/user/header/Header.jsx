import React from 'react'
import { Link, NavLink, useNavigate } from "react-router-dom"
import { KeyOutlined, LogoutOutlined, ShoppingCartOutlined, UserAddOutlined } from "@ant-design/icons"
import { Button, Dropdown, Modal } from 'antd';
import "./header.css";

export default function Header() {
    const navigate = useNavigate();
    //lay thong tin user da dang nhap
    const userLogin = JSON.parse(localStorage.getItem("userLocal"));

    // ham xac nhan dang xuat
    const handleLogout = () => {
        localStorage.removeItem("userLocal");
        navigate("/");
    }
    //ham xu ly dang xuat
    const handleConfirmLogout = () => {
        Modal.confirm({
            title: "Xác nhận",
            content: "Bạn có chắc chắn muốn đăng xuất?",
            onOk() {
                handleLogout();
            },
            onCancel() {
                cancelText: "Huỷ bỏ";
                okText: "Đăng xuất";
            }

        })
    }
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
                <a onClick={handleConfirmLogout} >
                    <LogoutOutlined className='mr-2' />  Đăng xuất
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
                        <span className='bg-white px-2 rounded-xl text-black absolute'>0</span>
                    </NavLink>
                </div>
                <div className='flex gap-4 items-center'>
                    <NavLink to="/about">Giới thiệu</NavLink>
                    <NavLink to="/contact">Liên hệ</NavLink>
                    {//neu co tai khoan dang nhap bang Google
                        userLogin !== null ?
                            //thi hien thi ten+anh dang nhap
                            (<>  <Dropdown
                                menu={{
                                    items,
                                }}
                                placement="bottomLeft"
                                arrow
                            >
                                <Button className='border-none shadow-none text-white hover:text-white'>
                                    <div className='flex items-center gap-2 hover:text-white'>
                                        <img className='rounded-full'
                                            height={25} width={25} src={userLogin.image} alt="" />
                                        {userLogin.userName}
                                    </div>
                                </Button>
                            </Dropdown></>)
                            //neu khong co thi hien dang nhap+ dang ky
                            : (<><NavLink to="/register">Đăng ký</NavLink>
                                <NavLink to="/login">Đăng nhập</NavLink></>)
                    }


                </div>
            </div>
        </>
    )
}