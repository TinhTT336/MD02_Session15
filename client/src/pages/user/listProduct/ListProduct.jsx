import React, { useEffect, useState } from 'react'
import Header from '../../../components/user/header/Header';
import axios from "axios";
import { Button, Pagination } from 'antd';

export default function ListProduct() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [categoryId, setCategoryId] = useState(0);
    const [currenPage, setCurrentPage] = useState(1);
    const [pageSize, setPageSize] = useState(8);

    //goi API lay ra danh sach tat ca category
    useEffect(() => {
        axios.get("http://localhost:3000/categories")
            .then((response) => setCategories(response.data))
            .catch((error) => console.log(error))
    }, [])

    //lay ra id cua category
    const getCategoryId = (id) => {
        setCategoryId(id);
    }

    //goi API LAY TAT CA THONG TIN SAN PHAM
    const loadData = () => {
        axios.get("http://localhost:3000/products")
            .then((response) => {
                //neu khong co categoryId
                if (categoryId === 0) {
                    setProducts(response.data)
                } else {
                    //neu co categoryId thi tien hanh loc
                    const listProduct = response.data.filter(product => product.category_id === categoryId)
                    setProducts(listProduct)
                }
            })
            .catch((error) => console.log(error))
    }
    useEffect(() => {
        loadData();
    }, [categoryId])

    // tinh toan chi muc sam pham bat dau va chi muc san pham ket thuc
    const startIndex = (currenPage - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    const displayProducts = products.slice(startIndex, endIndex);
    //xu ly su kien khi thay doi
    const handlePageChange = (page) => {
        setCurrentPage(page);
    }

    return (
        <>
            <Header />
            <div className='p-4 flex gap-8'>
                <div className='w-1/5 border rounded shadow-md h-screen'>
                    <ul>
                        <li
                            style={
                                categoryId === 0
                                    ? { backgroundColor: "#EA580C", color: "#fff" }
                                    : {}
                            }
                            onClick={() => setCategoryId(0)}
                            className="p-3 hover:bg-slate-100 cursor-pointer"
                        >
                            Xem tất cả sản phẩm
                        </li>
                        {categories.map((cat) => (
                            <li
                                key={cat.category_id}
                                onClick={() => getCategoryId(cat.category_id)}
                                style={
                                    categoryId === cat.category_id
                                        ? { backgroundColor: "#EA580C", color: "#fff" }
                                        : {}
                                }
                                className="p-3 hover:bg-slate-100 cursor-pointer"
                            >
                                {cat.category_name}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col w-4/5'>
                    <div className=' flex flex-wrap gap-6 justify-center bg-orange-600 py-4'>
                        {displayProducts.map(pro => (
                            <div key={pro.id} className='w-1/5 border pt-3 rounded bg-white h-96'>
                                <img src={pro.image} alt="anh san pham" />
                                <h3 className='text-center py-3'>{pro.product_name}</h3>
                                <div className='text-center'>
                                    <span>{pro.price}</span>
                                </div>
                                <div className='text-center'>
                                    <Button type='primary' className='t-btn-primary mt-3'>Thêm vào giỏ hàng</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='text-center mt-4'>
                        <Pagination current={currenPage}
                            pageSize={pageSize}
                            total={products.length}
                            onChange={handlePageChange}
                        />
                    </div>
                </div>
            </div >
        </>
    )
}
